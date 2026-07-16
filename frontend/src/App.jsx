import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Home from "./pages/Home";
import Prediction from "./pages/Prediction";

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/predict" element={<Prediction />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;