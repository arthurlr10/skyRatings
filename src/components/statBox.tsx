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

const listOfStats = [
    {
        name: "Flights' informations available as of  Jan.2024",
        content: "+2927",
    },
    { name: "Companies trusted us", content: "43" },
    { name: "Airports are available so far", content: "183" },
    { name: "Countries covered", content: "90" },
];

const Hero: React.FC = () => {
    return (
        <div className={"statBox"}>
            {listOfStats.map((stat) => (
                <div className={"statElem"}>
                    <div className={"statElem--title"}>{stat.content}</div>
                    <div className={"statElem--desc"}>{stat.name}</div>
                </div>
            ))}
        </div>
    );
};

export default Hero;
