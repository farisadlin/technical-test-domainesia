import "./App.css";
import React, { useState, useEffect } from "react";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import PriceSection from "./components/PriceSection";
import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import SeparatorUp from "./components/separator-section/SeparatorUp";
import SeparatorDown from "./components/separator-section/SeparatorDown";
import SeparatorIntro from "./components/separator-section/SeparatorIntro";
import { createClient } from "contentful";

function App() {
  /* NOTE: Menentukan array yang dibuat dengan state awal berupa empty array
   menggunakan React Hooks agar array dapat diisi dengan data-data JSON Object
   yang diperoleh dari API Contentful. Alasan menggunakan React Hooks dibandingkan 
   Class-based Component, kodenya lebih efisien dan mudah dibaca.
  */

  const [dataCustomer, setDataCustomer] = useState([]);
  const [dataPricing, setDataPricing] = useState([]);
  const [dataServices, setDataServices] = useState([]);
  const [dataTestimonial, setDataTestimonial] = useState([]);

  /* NOTE: Melakukan aktivasi API menggunakan Contentful agar
  dapat diambil data-datanya menggunakan instalasi yang ada di 
  https://www.contentful.com/developers/docs/javascript/tutorials/using-js-cda-sdk/ 
  */

  const contentful = require("contentful");

  /* NOTE: Melakukan aktivasi API menggunakan API Key berupa Space Token
  dan Access Token. API key disembunyikan dalam environment variable agar
  aksesnya dapat disembunyikan */

  const client = contentful.createClient({
    space: process.env.REACT_APP_SPACE_TOKEN,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  /* NOTE: Melakukan pengambilan data menggunakan 
  Promise untuk mengambil data dari Contentful dengan object 
  content_type: "hostingKite" */
  const loadData = () => {
    client
      .getEntries({
        content_type: "hostingKite",
      })
      .then((response) => {
        /* NOTE: Mengambil data API berupa JSON Object kemudian diberikan ke array baru
        menggunakan Map */

        const customer = response.items.map((item) => item.fields.datacustomer);
        const price = response.items.map((item) => item.fields.datapricing);
        const services = response.items.map((item) => item.fields.dataservices);
        const testimonial = response.items.map(
          (item) => item.fields.datatestimonial
        );

        /* NOTE: Memberikan data yang telah diperoleh dari API, kemudian diberikan 
        ke state yang berisi empty array */

        setDataCustomer(customer);
        setDataPricing(price);
        setDataServices(services);
        setDataTestimonial(testimonial);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /* NOTE: Melakukan pemanggilan API setelah melakukan render pada component  */

  useEffect(() => {
    loadData();
  }, []);

  /* NOTE: Membuat beberapa variabel baru yang di dalamnya terdapat 
    komponen yang memiliki props hasil pengambilan data dari API 
    yang akan dirender oleh masing-masing komponen yang membutuhkan 
    nantinya */

  const serviceSection = dataServices.map((items, id) => {
    return <Services key={id} data={items} />;
  });

  const testimonialSection = dataTestimonial.map((items, id) => {
    return <Testimonial key={id} data={items} />;
  });

  const priceSection = dataPricing.map((items, id) => {
    return <PriceSection key={id} data={items} />;
  });

  const customerSection = dataCustomer.map((items, id) => {
    return <CustomerSection key={id} data={items} />;
  });

  return (
    /* NOTE: Render masing-masing component ke dalam bentuk UI */
    <>
      <Navbar />
      <HeroSection />
      {serviceSection}
      <SeparatorIntro />
      <SeparatorUp />
      {testimonialSection}
      <SeparatorDown />
      {priceSection}
      {customerSection}
      <Footer />
    </>
  );
}

export default App;
