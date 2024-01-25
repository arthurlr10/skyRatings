import React from "react";
import { ConfigProvider, Layout, Menu, Typography } from "antd";
import { useRouter } from "next/router";
import Footer from "@components/footer";

const { Header, Content, Sider } = Layout;
const { Text } = Typography;

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

const items = [
    { key: "flights", label: "Flights" },
    { key: "companies", label: "Companies" },
    { key: "airports", label: "Airports" },
    { key: "about", label: "About" },
];

const GlobalContainer: React.FC = ({ children }) => {
    const router = useRouter();

    const handleMenuClick = (e: any) => {
        console.log(e);
        //router.push(`/${e.key}`);
    };

    return (
        <ConfigProvider theme={customTheme}>
            <Layout>
                <Header
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "flex-start",
                    }}
                >
                    <Text
                        style={{
                            color: "#7EC2F9",
                            fontSize: "36px",
                            fontWeight: "600",
                            flexShrink: 0,
                        }}
                    >
                        SkyRatings
                    </Text>
                    <Menu
                        mode="horizontal"
                        onClick={handleMenuClick}
                        style={{
                            width: "80%",
                            justifySelf: "center",
                            display: "flex",
                            alignItems: "center",
                            flex: 1,
                            minWidth: 0,
                            justifyContent: "center",
                            fontSize: "18px",
                            backgroundColor: "transparent",
                            borderBottom: "none",
                        }}
                    >
                        {items.map((item) => (
                            <Menu.Item
                                key={item.key}
                                style={{
                                    maxWidth: "150px",
                                }}
                            >
                                {item.label}
                            </Menu.Item>
                        ))}
                    </Menu>
                </Header>
                <Content style={{ margin: "0 16px", minHeight: "100vh" }}>
                    {children}
                </Content>
                <Footer/>
            </Layout>
        </ConfigProvider>
    );
};

export default GlobalContainer;
