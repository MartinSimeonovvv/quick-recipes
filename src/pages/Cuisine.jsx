import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CustomCard from "../card/CustomCard";

import "../card/CustomCard.scss";

function Cuisine() {
    const [cuisine, setCuisine] = useState([]);
    let params = useParams();

    const getCuisine = async (name) => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
        );
        const recipes = await data.json();
        setCuisine(recipes.results);
    };

    useEffect(() => {
        getCuisine(params.type);
    }, [params.type]);

    return (
        <motion.div
            className="custom-card"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            {cuisine.map((item) => {
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

export default Cuisine;
