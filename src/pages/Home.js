import React, { useState } from "react";
import { Layout, Menu, Breadcrumb, Card, Col, Row } from "antd";
import { PieChartOutlined } from "@ant-design/icons";
import Chart1 from "../components/charts/Chart1";
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

function Home() {
  const [collapsed, setCollapsed] = useState(true);
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
              className="site-layout-background"
              style={{ padding: 24, minHeight: 360 }}
            >
              <div className="site-card-wrapper">
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
                      <Chart1 />
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
                      <Chart1 />
                    </Card>
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
