import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Sample from "./views/Sample";
import CustomLink from "./components/CustomLink";
import Vendor from "./views/Vendor";

export default function App() {
  return (
    <div className="App">
      <nav className="my-8">
        <CustomLink to="/" className="mr-4">
          Common Implementation
        </CustomLink>
        <CustomLink to="/component-style" className="mr-4">
          Component Style
        </CustomLink>
        <CustomLink to="/vendor">Vendor Profile</CustomLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component-style" element={<Sample />} />
        <Route path="/vendor" element={<Vendor />} />
      </Routes>
    </div>
  );
}
