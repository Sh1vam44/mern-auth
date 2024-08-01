import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Singin from "./Pages/Singin";
import Singup from "./Pages/Singup";
import About from "./Pages/About";
import Header from "./components/Header";
export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/sign-in" element={<Singin />}></Route>
        <Route path="/sign-up" element={<Singup />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
