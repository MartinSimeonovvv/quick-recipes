import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter } from "react-router-dom";
import Search from "./components/Search";
import { Link } from "react-router-dom";
import { SiCodechef } from "react-icons/si";

import "./App.scss";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <div className="nav">
                    <SiCodechef />
                    <Link className="home" to={"/"}>Home</Link>
                </div>
                <Search />
                <Category />
                <Pages />
            </BrowserRouter>
        </div>
    );
}

export default App;
