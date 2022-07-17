import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import Card from "../card/Card";

import "@splidejs/react-splide/css/sea-green";
import "../card/Card.scss";

function Popular() {
    const [popular, setPopular] = useState([]);

    const getPopular = async () => {
        const checkPopular = localStorage.getItem("popular");

        if (checkPopular) {
            setPopular(JSON.parse(checkPopular));
        } else {
            const api = await fetch(
                `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
            );
            const data = await api.json();
            setPopular(data.recipes);
            localStorage.setItem("popular", JSON.stringify(data.recipes));
        }
    };

    useEffect(() => {
        getPopular();
    }, []);

    return (
        <div className="picks">
            <div>
                <h3>Popular Picks</h3>
                <Splide
                    options={{
                        perPage: 3,
                        arrows: false,
                        drag: "free",
                        gap: "5rem",
                    }}
                >
                    {popular.map((recipe) => {
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

export default Popular;
