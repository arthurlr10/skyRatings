import React from "react";

import GlobalContainer from "@components/globalContainer";
import Hero from "@components/hero";
import Head from "next/head";
import StatBox from "@components/statBox";
const Home: React.FC = () => {
    return (
        <GlobalContainer>
            <div className={"home--body"}>
                <Hero />
                <StatBox />
            </div>
        </GlobalContainer>
    );
};

export default Home;
