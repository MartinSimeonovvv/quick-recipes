import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import { NavLink } from "react-router-dom";

import "./Category.scss";

function Category() {
    return (
        <div className="category">
            <NavLink to={'/cuisine/Italian'}>
                <FaPizzaSlice />
                <h4>Italian</h4>
            </NavLink>
            <NavLink to={'/cuisine/American'}>
                <FaHamburger />
                <h4>American</h4>
            </NavLink>
            <NavLink to={'/cuisine/Thai'}>
                <GiNoodles />
                <h4>Thai</h4>
            </NavLink>
            <NavLink to={'/cuisine/Chinese'}>
                <GiChopsticks />
                <h4>Chinese</h4>
            </NavLink>
        </div>
    );
}

export default Category;
