import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../card/Card";

import "@splidejs/react-splide/css/sea-green";
import "../card/Card.scss";

function Veggie() {
    const [veggie, setVeggie] = useState([]);

    const getVeggie = async () => {
        const checkVeggie = localStorage.getItem("veggie");

        if (checkVeggie) {
            setVeggie(JSON.parse(checkVeggie));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`
            );
            const data = await api.json();
            setVeggie(data.recipes);
            localStorage.setItem("veggie", JSON.stringify(data.recipes));
        }
    };

    useEffect(() => {
        getVeggie();
    }, []);

    return (
        <div className="picks">
            <div>
                <h3>Vegetarian Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {veggie.map((recipe) => {
                        return (
                            <SplideSlide key={recipe.id}>
                                <Card id={recipe.id} title={recipe.title} image={recipe.image} />
                            </SplideSlide>
                        );
                    })}
                </Splide>
            </div>
        </div>
    );
}

export default Veggie;
