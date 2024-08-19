import { BrowserRouter, Route, Routes } from "react-router-dom";
import NotFound from "./pages/404";
import HomePage from "./pages/Home";
import Header from "./components/Header";
import NavigatePage from "./pages/NavigatePage";

const App = () => {

    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<NavigatePage />} />
                <Route path="/berita/:id" element={<HomePage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;