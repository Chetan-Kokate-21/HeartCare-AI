import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Prediction from "./pages/Prediction";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/predict" element={<Prediction />} />
    </Routes>
  );
}

export default App;