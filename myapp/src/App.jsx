import Navbar from "./Navbar";
import Tag from "./Tag";
import Body from "./Body";
import Courses from "./Courses";
import About from "./About";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={[<Tag />, <Body />]} />
        <Route path="/about" element={[<About />]} />
        <Route path="/courses" element={[<Courses />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
