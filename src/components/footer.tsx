import React from "react";

const Footer: React.FC = () => {
    return (
        <div className={"footer"}>
            <div className={"footer--left"}>
                <div>Contact</div>
                <div>About us</div>
                <div>Legal mentions</div>
            </div>
            <div className={"footer--right"}>
                <div>EPSI 2024</div>
                <div>SkyRatings, MIT License</div>
                <div>
                    Pierre Yvenou, Arthur Lory
                    <br />
                    Alexis Bertin, Simon Huchede
                </div>
            </div>
        </div>
    );
};

export default Footer;
