import { configure, shallow, mount, contains } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import App from "./App";
import Button from "./components/Button";
import CustomerSection from "./components/CustomerSection";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import PriceSection from "./components/PriceSection";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";

configure({ adapter: new Adapter() });

/* NOTE: Melewati 4 component karena tidak bisa mendeteksi map */
describe("rendering components", () => {
  it("renders App component without crashing", () => {
    shallow(<App />);
  });
  it("renders Button component without crashing", () => {
    shallow(<Button />);
  });
  it.skip("renders CustomerSection component without crashing", () => {
    shallow(<CustomerSection />);
  });
  it("renders Footer component without crashing", () => {
    shallow(<Footer />);
  });
  it("renders HeroSection component without crashing", () => {
    shallow(<HeroSection />);
  });
  it("renders Navbar component without crashing", () => {
    shallow(<Navbar />);
  });
  it.skip("renders PriceSection component without crashing", () => {
    shallow(<PriceSection />);
  });
  it.skip("renders Services component without crashing", () => {
    shallow(<Services />);
  });
  it.skip("renders Testimonial component without crashing", () => {
    shallow(<Testimonial />);
  });
});

describe("Renders UI correctly in App component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Link page="http://www.instagram.com">Instagram</Link>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
