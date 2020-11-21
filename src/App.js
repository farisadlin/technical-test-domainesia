import "./App.css";
import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Testimonial from "./components/Testimonial";
import PriceSection from "./components/PriceSection";
import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import SeparatorUp from "./components/separator/SeparatorUp";
import SeparatorDown from "./components/separator/SeparatorDown";
import SeparatorIntro from "./components/separator/SeparatorIntro";
import { createClient } from "contentful";

function App() {
  const [dataCustomer, setDataCustomer] = useState([]);
  const [dataPricing, setDataPricing] = useState([]);
  const [dataServices, setDataServices] = useState([]);
  const [dataTestimonial, setDataTestimonial] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const contentful = require("contentful");

  require('dotenv').config();

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_TOKEN,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  const loadData = () => {
    client
      .getEntries({
        content_type: "hostingKite",
      })
      .then((response) => {
        const customer = response.items.map((item) => item.fields.datacustomer);
        const price = response.items.map((item) => item.fields.datapricing);
        const services = response.items.map((item) => item.fields.dataservices);
        const testimonial = response.items.map(
          (item) => item.fields.datatestimonial
        );

        setDataCustomer(customer);
        setDataPricing(price);
        setDataServices(services);
        setDataTestimonial(testimonial);
      });
  };

  return (
    <>
      <Router>
        <Navbar />
        <HeroSection />
        {dataServices.map((items, id) => {
          return <Services key={id} data={items} />;
        })}
        <SeparatorIntro />
        <SeparatorUp />
        {dataTestimonial.map((items, id) => {
          return <Testimonial key={id} data={items} />;
        })}
        <SeparatorDown />
        {dataPricing.map((items, id) => {
          return <PriceSection key={id} data={items} />;
        })}
        {dataCustomer.map((items, id) => {
          return <CustomerSection key={id} data={items} />;
        })}
        <Footer />
      </Router>
    </>
  );
}

export default App;
