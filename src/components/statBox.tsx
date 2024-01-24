import React from "react";

const customTheme = {
    token: {
        colorPrimary: "#7EC2F9",
        colorText: "#000000",
    },
    components: {
        Menu: {
            activeBarHeight: 0,
        },
        Layout: {
            headerBg: "transparent",
        },
    },
};

const Hero: React.FC = () => {
    return (
        <div className={"hero"}>
            <div className={"hero--left"}>
                <div className={"hero--title"}>
                    Flights and airports,
                    <br />
                    sorted for <i>you</i>
                </div>
                <div className={"hero--desc"}>
                    Discover real time flights and airports informations with{" "}
                    <strong>SkyRatings</strong>
                </div>
                <div className={"hero--button"}>Get Started</div>
            </div>
        </div>
    );
};

export default Hero;
