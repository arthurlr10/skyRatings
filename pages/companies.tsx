import React, { useEffect, useState } from "react";
import GlobalContainer from "@components/globalContainer";
import { Card, Col, Collapse, Row, Typography } from "antd";
import { PlusOutlined, UpOutlined } from "@ant-design/icons";

const { Text, Title } = Typography;

interface Airline {
    airline: string; 
  }

const Companies: React.FC = () => {

    const [airlines, setAirlines] = useState<Airline[]>([]);

    useEffect(() => {
      fetch('/api/airline-ranking')
        .then(response => response.json())
        .then(data => {
          setAirlines(data);
        })
        .catch(error => {
          console.error("Failed to load airlines", error);
        });
    }, []);

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
            {airlines.map((airline, index) => (
                <Col span={16}>
                    <Card>
                        <Row justify="space-around" align="middle">
                            <Col>
                            <UpOutlined style={{ fontSize: '24px', color: '#8EC69A' }}/>
                            </Col>
                            <Col>
                            <Text style={{ fontSize: "18px" }}>{index + 1}</Text>
                            </Col>
                            <Col><Text style={{ fontSize: "18px" }}>{airline.airline}</Text>
                            </Col>
                            <Col><Text type="secondary">Avg delay: 5min</Text>
                            </Col>
                            <Col><Text type="secondary">Cancellation rate: 1%</Text>
                            </Col>
                        </Row>
                        </Card>
                </Col>
                     ))}
            </Row>
        </GlobalContainer>
    );
};

export default Companies;
