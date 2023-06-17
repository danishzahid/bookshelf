import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";
import { Bookshelf } from "./components/Bookshelf";
import { Search } from "./components/Search";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Bookshelf />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
