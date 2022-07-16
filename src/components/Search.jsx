import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import "./Search.scss";

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate(`/searched/${input}`);
    };

    return (
        <form className="search" onSubmit={submitHandler}>
            <div>
                <FaSearch />
                <input
                    type="text"
                    onChange={(e) => setInput(e.target.value)}
                    value={input}
                />
            </div>
        </form>
    );
}

export default Search;
