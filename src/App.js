import { Home } from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import FlashCardApp from "./FlashCardApp"
import "./components/Header.css"
import { ASL } from "./pages/ASL"

function App() {
    return (
        <div className="App">
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flash" element={<FlashCardApp />} />
        <Route path="/ASL" element={<ASL />} />
    </Routes>
    </div>
    );
}

export default App