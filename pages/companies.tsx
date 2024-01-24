import React from "react";
import GlobalContainer from "@components/globalContainer";
import { Card, Col, Collapse, Row, Typography } from "antd";
import { PlusOutlined, UpOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

const Companies: React.FC = () => {
    return (
        <GlobalContainer>
            <Row>
                <Col span={24} style={{ textAlign: "center" }}>
                    <Title level={2}>Companies ranking</Title>
                </Col>
                <Col span={24} style={{ textAlign: "center" }}>
                    <Title level={5}>
                        Based on average flight delay and cancellation
                    </Title>
                </Col>
            </Row>
            <Row justify={"center"}>
                <Col span={16}>
                    <Card><UpOutlined style={{ fontSize: '24px', color: '#8EC69A' }}/></Card>
                </Col>
            </Row>
        </GlobalContainer>
    );
};

export default Companies;
