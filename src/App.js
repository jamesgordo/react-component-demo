import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Home from "./views/Home";
import Sample from "./views/Sample";
import CustomLink from "./components/CustomLink";

export default function App() {
  return (
    <div className="App">
      <nav style={{ marginBottom: "10px" }}>
        <CustomLink to="/" style={{ marginRight: "10px" }}>
          Usual Implementation
        </CustomLink>
        <CustomLink to="/component-style">Component Style</CustomLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/component-style" element={<Sample />} />
      </Routes>
    </div>
  );
}
