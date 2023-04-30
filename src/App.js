import { Routes, Route, Link, NavLink } from "react-router-dom";
import Beginner from "./pages/Beginner";
import Easy from "./pages/Easy";
import Medium from "./pages/Medium";
import Hard from "./pages/Hard";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/beginner" element={<Beginner />}/>
      <Route path="/easy" element={<Easy />}/>
      <Route path="/medium" element={<Medium />}/>
      <Route path="/hard" element={<Hard />}/>
    </Routes>
  );
}

export default App;
