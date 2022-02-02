import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import AlbumDetails from "./components/AlbumDetails";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/AlbumDetails" element={<AlbumDetails/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
