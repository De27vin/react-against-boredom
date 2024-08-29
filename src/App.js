import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home.js";
import Counter from "./pages/Counter.js";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </Router>
  )
}