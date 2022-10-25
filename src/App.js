import { Home } from "./pages/Home"
import { Route, Routes } from "react-router-dom"
import { About } from "./pages/About"
import FlashCardApp from "./FlashCardApp"
import Header from "./components/Header"
import "./components/Header.css"

function App() {
    return (
        <div className="App">
        <Header />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/flash" element={<FlashCardApp />} />
    </Routes>
    </div>
    );
}

export default App