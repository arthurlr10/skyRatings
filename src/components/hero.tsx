import React from "react";
import { ConfigProvider, Layout, Menu, Typography } from "antd";
import { useRouter } from "next/router";
import Image from "next/image";

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
            <div className={"hero--cloud1"}>
                <Image
                    src={"/pictures/heroCloud1.png"}
                    width={"345"}
                    height={"329"}
                    alt="Cloud 1"
                />
            </div>
            <div className={"hero--cloud2"}>
                <Image
                    src={"/pictures/heroCloud2.png"}
                    width={"329"}
                    height={"297"}
                    alt="Cloud 2"
                />
            </div>
        </div>
    );
};

export default Hero;
