import React from "react";
import { Link } from "react-router-dom";

function Navbar () {
    return(
        <>
       <header className="bg-black py-5">
            <nav className="container mx-auto">
                <ul className="flex items-center justify-end gap-5">
                    <li>
                        <Link to={"/"} className="text-white">
                            Home
                        </Link>
                    </li>
                    <li>
                    <Link to={"/register"} className="text-white">
                            Register
                        </Link>
                    </li>
                    <li>
                    <Link to={"/Login"} className="text-white">
                            Login
                        </Link>
                    </li>
                    <li>
                    <Link to={"/view"} className="text-white">
                           View
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
        </>
    )
}
export default Navbar;