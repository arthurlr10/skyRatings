import React from "react";

import GlobalContainer from "@components/globalContainer";
import Hero from "@components/hero";
import Head from "next/head";
const Home: React.FC = () => {
    return (
        <GlobalContainer>
            <Hero />
        </GlobalContainer>
    );
};

export default Home;
