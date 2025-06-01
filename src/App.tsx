import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import Contact from "./pages/Contact";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
