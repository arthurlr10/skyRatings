import React from "react";
import { ConfigProvider, Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;

const customTheme = {
    token: {
        colorPrimary: "#00b96b",
        headerBg: "#00b96b",
    },
};

const GlobalContainer: React.FC = ({ children }) => {
    return (
        <ConfigProvider >
            <Layout style={{ minHeight: "100vh" }}>
                <Header></Header>
                <Content style={{ margin: "0 16px" }}>{children}</Content>
                <Footer style={{ textAlign: "center" }}>
                    SkyRatings © 2024 Created by Arthur LORY, BERTIN Alexis, YVENOU Pierre, HUCHEDE Simon
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default GlobalContainer;
