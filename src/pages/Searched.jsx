import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import "./Searched.scss";

function Searched() {
    const [seachedRecipes, setSeachedRecipes] = useState([]);
    let params = useParams();

    const getSearched = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
        );
        const recipes = await data.json();
        setSeachedRecipes(recipes.results);
    };

    useEffect(() => {
        getSearched(params.search);
    }, [params.search]);

    return (
        <motion.div
            className="searched-recipes"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {seachedRecipes.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <Link to={`/recipe/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                            <h4>{item.title}</h4>
                        </Link>
                    </div>
                );
            })}
        </motion.div>
    );
}

export default Searched;
