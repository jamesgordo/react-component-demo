import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Sample from "./views/Sample";
import CustomLink from "./components/CustomLink";
import Vendor from "./views/Vendor";

export default function App() {
  return (
    <div className="App">
      <nav style={{ marginBottom: "10px" }}>
        <CustomLink to="/" style={{ marginRight: "10px" }}>
          Common Implementation
        </CustomLink>
        <CustomLink to="/component-style" style={{ marginRight: "10px" }}>
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
