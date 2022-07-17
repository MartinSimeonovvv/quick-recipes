import { Link } from "react-router-dom";

import "./Card.scss";

function Card({ id, title, image }) {
    return (
        <div className="card">
            <Link to={`/recipe/${id}`}>
                <p>{title}</p>
                <img src={image} alt={title} />
            </Link>
            <div className="gradient"></div>
        </div>
    );
}

export default Card;
