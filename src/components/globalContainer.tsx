import React from "react";
import { ConfigProvider, Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const customTheme = {
    token: {
        colorPrimary: "#7EC2F9",
        headerBg: "#DCDCDC",
        colorText: "#000000",
        fontFamilyCode: "Liberation Mono"
    },
};

const items = [
    { key: "flights", label: "Flights" },
    { key: "companies", label: "Companies" },
    { key: "airports", label: "Airports" },
    { key: "about", label: "About" },
    // Ajoutez plus d'éléments ici
];

const GlobalContainer: React.FC = ({ children }) => {
    return (
        <ConfigProvider theme={customTheme}>
            <Layout>
                <Header style={{ display: "flex", alignItems: "center", padding: "0" }}>
                    <div>
                        <h1 style={{ padding: "0 15px 0px 15px", backgroundColor: customTheme.token.headerBg }}>SkyRatings</h1>
                    </div>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={["1"]}
                        items={items}
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "space-around",
                        }}
                    />
                </Header>
                <Content style={{ margin: "0 16px", minHeight: "100vh" }}>{children}</Content>
                <Footer style={{ textAlign: "center" }}>
                    SkyRatings © 2024 Created by Arthur LORY, BERTIN Alexis,
                    YVENOU Pierre, HUCHEDE Simon
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default GlobalContainer;
