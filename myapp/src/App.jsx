import Navbar from "./Navbar";
import Tag from "./Tag";
import Body from "./Body";
import Path from "./Path";
import Courses from "./Courses";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={[<Tag />, <Body />]} />
        <Route path="/paths" element={[<Path />]} />
        <Route path="/courses" element={[<Courses />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
