import Navigation from "./components/Navigation"
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Contact from "./components/Contact";
import DashBoard from "./components/DashBoard";
import Detail from "./components/Detail";


function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path ="/detail/:id" element={<Detail />}></Route>
        <Route path="/dashboard" element={<DashBoard />}></Route>
      </Routes>
    </div>
  );
}

export default App;
