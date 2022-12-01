import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategodyProduct from "./Pages/CategodyProduct";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<CategodyProduct />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
