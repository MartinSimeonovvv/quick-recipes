import { Link } from "react-router-dom";
import { FcHome } from "react-icons/fc";

import "./ErrorPage.scss";

const ErrorPage = () => {
    return (
        <section className="error-page">
            <div className="error-container">
                <h1>oops! No such page</h1>
                    <Link to="/" className="btn-primary">
                        <FcHome />
                        home
                    </Link>
            </div>
        </section>
    );
};

export default ErrorPage;
