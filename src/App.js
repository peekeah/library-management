import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Navbar from "./components/Navbar";
import "./App.css";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import { DisplayBook } from "./components/DisplayBook";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/edit-book/:id" element={<EditBook />} />
          <Route path="/book" element={<DisplayBook />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
