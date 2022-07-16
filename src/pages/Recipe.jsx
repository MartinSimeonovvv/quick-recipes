import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

import "./Recipe.scss";

function Recipe() {
    const params = useParams();
    const [details, setDetails] = useState({});
    const [active, setActive] = useState("instructions");

    const fetchDetails = async () => {
        const data = await fetch(
            `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}`
        );
        const detailData = await data.json();
        setDetails(detailData);
    };

    useEffect(() => {
        fetchDetails(params.id);
    }, [params.id]);

    return (
        <motion.div
            className="recipe_details"
            animate={{ opacity: 1 }}
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div>
                <h2>{details.title}</h2>
                <img src={details.image} alt={details.title} />
            </div>
            <div className="info">
                <button
                    onClick={() => setActive("instructions")}
                    className={active === "instructions" ? "active" : ""}
                >
                    Instructions
                </button>
                <button
                    onClick={() => setActive("ingredients")}
                    className={active === "ingredients" ? "active" : ""}
                >
                    Ingredients
                </button>
                {active === "instructions" && (
                    <div>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.summary,
                            }}
                        ></h3>
                        <h3
                            dangerouslySetInnerHTML={{
                                __html: details.instructions,
                            }}
                        ></h3>
                    </div>
                )}
                {active === "ingredients" && (
                    <ul>
                        {details.extendedIngredients.map((ingredient) => (
                            <li key={ingredient.id}>{ingredient.original}</li>
                        ))}
                    </ul>
                )}
            </div>
        </motion.div>
    );
}

export default Recipe;
