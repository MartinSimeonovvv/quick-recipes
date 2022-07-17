import { Link } from "react-router-dom";

import "./CustomCard.scss";

function CustomCard({ id, image, title }) {
    return (
        <Link to={`/recipe/${id}`}>
            <img src={image} alt={title} />
            <h4>{title}</h4>
        </Link>
    );
}

export default CustomCard;
