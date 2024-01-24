import React from "react";
import { ConfigProvider, Layout, Menu, Typography } from "antd";
import { useRouter } from "next/router";

const { Header, Content, Footer, Sider } = Layout;
const { Text } = Typography;


const customTheme = {
    token: {
        colorPrimary: "#7EC2F9",
        colorText: "#000000",
    },
    components: {
        Menu: {
            activeBarHeight: 0
        },
        Layout: {
            headerBg: "transparent",
        },
      },
};

const items = [
    { key: "flights", label: "Flights" },
    { key: "companies", label: "Companies" },
    { key: "airports", label: "Airports" },
    { key: "about", label: "About" },
]

const GlobalContainer: React.FC = ({ children }) => {
    const router = useRouter();

    const handleMenuClick = (e: any) => {
        router.push(`/${e.key}`);
    };

    return (
        <ConfigProvider theme={customTheme}>
            <Layout>
                <Header style={{ display: "flex" }}>
                    <Text style={{ color: "#7EC2F9", fontSize: "36px", flexShrink: 0 }}>SkyRatings</Text>
                    <Menu
                        mode="horizontal"
                        defaultSelectedKeys={["flights"]}
                        items={items}
                        onClick={handleMenuClick}
                        style={{ width: "100%", backgroundColor: "transparent", borderBottom: "none" }}
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