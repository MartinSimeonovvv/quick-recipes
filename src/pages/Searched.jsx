import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import CustomCard from "../card/CustomCard";

import "../card/CustomCard.scss";

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
            className="custom-card"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {seachedRecipes.map((item) => {
                return (
                    <div key={item.id} className="card">
                        <CustomCard
                            id={item.id}
                            title={item.title}
                            image={item.image}
                        />
                    </div>
                );
            })}
        </motion.div>
    );
}

export default Searched;
