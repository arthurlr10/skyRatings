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

const statElem: React.FC<{ name: string; content: string }> = ({
    name,
    content,
}) => {
    return (
        <div className={"statElem"}>
            <div className={"statElem--title"}>{name}</div>
            <div className={"statElem--desc"}>{content}</div>
        </div>
    );
};

export default statElem;
