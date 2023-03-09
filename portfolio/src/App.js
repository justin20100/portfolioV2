import {BrowserRouter, Route, Routes} from "react-router-dom";
import Notfound from "./pages/Notfound";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/projects" element={<Projects/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>

          // erreur 404
          <Route path="*" element={<Notfound/>}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
