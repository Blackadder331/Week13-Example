import React from "react";
import Navlinks from "./Navlinks";

function Navbar (props) {
    return(
        <nav className="navbar bg-dark mb-5">
            <div className="container">
                
                <img src="images/SHARP-logo-white.svg" style={{maxWidth: "175px", paddingTop: "20px"}} />
                
                <ul className="navbar-nav">
                    <Navlinks hrefName="invoices" linkName="Invoices" />
                    <Navlinks hrefName="payments" linkName="Payments" />
                    <Navlinks hrefName="reports" linkName="Reports" />
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;