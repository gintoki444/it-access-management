import { BrowserRouter, Routes, Route } from "react-router-dom";
import CategodyItem from "./Pages/CategodyItem";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<CategodyItem />} exact />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
