import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Dashboard from "./pages/Dashboard";
import AddVisitor from "./pages/AddVisitor";
import Visitors from "./pages/Visitors";
import SearchVisitor from "./pages/SearchVisitor";
import EditVisitor from "./pages/EditVisitor";

import ibmLogo from "./assets/ibm-logo.svg";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="logo-link">
          <img src={ibmLogo} alt="IBM Logo" className="ibm-logo" />
        </Link>

        <div className="nav-links">
          <Link to="/">Dashboard</Link>
          <Link to="/add">Add Visitor</Link>
          <Link to="/visitors">All Visitors</Link>
          <Link to="/search">Search Visitor</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/add" element={<AddVisitor />} />
        <Route path="/visitors" element={<Visitors />} />
        <Route path="/search" element={<SearchVisitor />} />
        <Route path="/edit/:id" element={<EditVisitor />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;