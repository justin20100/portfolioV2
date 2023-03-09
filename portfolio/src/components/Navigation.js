import React from 'react';
import {NavLink} from "react-router-dom";

const Navigation = () => {
    return (
        <div className={"navigation"}>
            <div>
                <svg width="85" height="70" viewBox="0 0 85 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.4168 40.3565L0.468342 5.63435C-0.9095 3.10705 0.917585 0.025103 3.79876 0.0225933L40.9076 2.77677e-06C43.0058 -0.00250695 44.7049 1.69658 44.7049 3.79472V7.18536C44.7049 9.28099 46.4039 10.9801 48.4996 10.9801H53.78C56.7014 10.9801 58.5285 14.1423 57.0678 16.6721L48.2135 32.0041C46.7528 34.5364 43.1036 34.5364 41.643 32.0066L30.5826 12.8473C29.9125 11.6878 28.6802 10.9675 27.34 10.9525L22.9053 10.8998C19.9639 10.8646 18.1042 14.0445 19.5724 16.5918L39.1257 50.4556L40.5412 52.9076L41.4171 54.4235C42.8778 56.9533 46.5294 56.9533 47.9901 54.4235L50.2815 50.4556L71.9781 12.8774C72.6557 11.7029 73.9081 10.9801 75.2633 10.9801H80.4961C83.3798 10.9801 85.2094 14.0645 83.8265 16.5943L58.5912 62.7558C56.5207 66.661 51.2678 69.4342 45.1164 69.4342C39.6628 69.4342 35.1729 65.9708 32.7259 62.7558L19.4193 40.3565H19.4168Z" fill="#2BBCFA"/>
                </svg>
            </div>
            <ul>
                <NavLink to={"/"} className={(nav)=> (nav.isActive?"nav-active":"")}>
                    <li>Home</li>
                </NavLink>
                <NavLink to={"/projects"} className={(nav)=> (nav.isActive?"nav-active":"")}>
                    <li>Projects</li>
                </NavLink>
                <NavLink to={"/contact"} className={(nav)=> (nav.isActive?"nav-active":"")}>
                    <li>Contact</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;