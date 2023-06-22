import React from 'react';
import { HomeOutlined, EnvironmentOutlined, CreditCardOutlined, SettingOutlined, CalendarOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Layout, Menu, Row, theme } from 'antd';
import styles from './TestDashBoard.module.css';
import GrantTable from '../GrantTable';

const { Header, Content, Footer, Sider } = Layout;

const TestDashBoard: React.FC = () => {
    const grantData: Grant[] = [
        {
          id: 1,
          grantType: 'Type A',
          createdAt: '2023-06-15',
          description: 'This is grant A',
          approval: 'Approved',
          name: 'John',
          surname: 'Doe',
        },
        {
          id: 2,
          grantType: 'Type B',
          createdAt: '2023-06-16',
          description: 'This is grant B',
          approval: 'Pending',
          name: 'Jane',
          surname: 'Smith',
        },
        // Add more grant objects as needed
      ];
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    { icon: HomeOutlined, label: 'Home' },
    { icon: EnvironmentOutlined, label: 'Map' },
    { icon: CreditCardOutlined, label: 'Link Sassa Card' },
    { icon: SettingOutlined, label: 'Manage Card' },
    { icon: CalendarOutlined, label: 'Book a Branch Visit' },
    { icon: QuestionCircleOutlined, label: 'FAQ' },
    { icon: LogoutOutlined, label: 'Logout' },
  ];

  return (
    <Layout className={styles.layout}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        className={styles.sider}
      >
        <div className={styles.logoVertical} />
        <Menu
          className={styles.menuContent}
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems.map(({ icon: Icon, label }, index) => ({
            key: String(index + 1),
            icon: <Icon />,
            label,
          }))}
        />
      </Sider>
      <Layout>
        <Header className={styles.header} />
        <Content className={styles.content}>
          <div className={styles.contentInner}>
            <h1>Welcome back, Member!</h1>
            <img src="/coatofarms.png" />
            <h3>Name Surname</h3>
          </div>
          <div>
        <div className={styles.container}>
            <h2>Your Info!</h2>
            <Row gutter={16}>
    <Col span={12}>
      <Card title="SASSA Number" className={styles.customcard} style={{ marginBottom: 16 }}>
        Content
      </Card>
    </Col>
    <Col span={12}>
      <Card title="SARS Number" className={styles.customcard} style={{ marginBottom: 16 }}>
        Content
      </Card>
    </Col>
  </Row>
        </div>
        <div className={styles.table}>
          <GrantTable data={grantData} />
        </div>
      </div>
        </Content>
        <Footer className={styles.footer}>Linkify ©2023 Created by Zama Dhlamini</Footer>
      </Layout>
    </Layout>
  );
};

export default TestDashBoard;
