import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Card, Col, Row, Select } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import Chart1 from "../components/charts/Chart1";
import Chart2 from "../components/charts/Chart2";
import Chart3 from "../components/charts/Chart3";
import Chart4 from "../components/charts/Chart4";
import Chart5 from "../components/charts/Chart5";
import Header1 from "../components/header/Header";
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

function Home() {
  const [collapsed, setCollapsed] = useState(true);
  const [mostMatchesWinner, setMostMatchsWinner] = useState(2017);
  const [topFiveVenues, setTopFiveVenues] = useState(2017);
  const { Option } = Select;
  const onCollapse = (collapsed) => {
    setCollapsed((prevCol) => {
      return !prevCol;
    });
  };
  return (
    <Layout>
      <Header>
        <div className="logo" />
        {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu> */}
      </Header>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          breakpoint="lg"
          collapsible
          collapsed={collapsed}
          onCollapse={onCollapse}
        >
          {/* <div className="logo" /> */}
          <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<PieChartOutlined />}>
              Insights
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: "0 16px", color: "black" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
            </Breadcrumb>
            <div
              className="site-layout-background content-container"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div className="chart-container">
                <Row gutter={[24, 24]}>
                  <Col xs={24} xl={12}>
                    <Card
                      bodyStyle={{}}
                      className="custom-card"
                      title="Card title"
                      bordered={true}
                      hoverable
                    >
                      <Chart1 />
                    </Card>
                  </Col>
                  <Col xs={24} xl={12} hoverable={true}>
                    <Card
                      className="custom-card"
                      title="Card title"
                      bordered={true}
                      hoverable
                    >
                      <Chart2 />
                    </Card>
                  </Col>
                </Row>
                <Row gutter={[24, 24]}>
                  <Col xs={24} xl={12}>
                    <Card
                      bodyStyle={{}}
                      className="custom-card"
                      title="Card title"
                      bordered={true}
                      hoverable
                    >
                      <Select
                        defaultValue="2017"
                        style={{ width: 120 }}
                        onChange={(e) => setTopFiveVenues(e)}
                      >
                        <Option value="2017">2017</Option>
                        <Option value="2016">2016</Option>
                        <Option value="2015">2015</Option>
                      </Select>
                      <Chart3 year={topFiveVenues} />
                    </Card>
                  </Col>
                  <Col xs={24} xl={12} hoverable={true}>
                    <Card
                      className="custom-card"
                      title="Card title"
                      bordered={true}
                      hoverable
                    >
                      {" "}
                      <Select
                        defaultValue="2017"
                        style={{ width: 120 }}
                        onChange={(e) => setMostMatchsWinner(e)}
                      >
                        <Option value="2017">2017</Option>
                        <Option value="2016">2016</Option>
                        <Option value="2015">2015</Option>
                      </Select>
                      <Chart5 year={mostMatchesWinner} />
                    </Card>
                  </Col>
                  <Col xs={24} xl={12} hoverable={true}>
                    <Card
                      className="custom-card"
                      title="Card title"
                      bordered={true}
                      hoverable
                    >
                      <Chart4 />
                    </Card>
                  </Col>
                  <Col>
                    <Header1 year={mostMatchesWinner} />
                  </Col>
                </Row>
              </div>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            Made by @Purna Chandra
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}

export default Home;
