import React, { useEffect, useState } from 'react';
import { HomeOutlined, EnvironmentOutlined, CreditCardOutlined, SettingOutlined, CalendarOutlined, QuestionCircleOutlined, LogoutOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Layout, Menu, Row, theme } from 'antd';
import styles from './TestDashBoard.module.css';
import GrantTable from '../GrantTable';
import { useGrant } from '../../pages/providers/grant';
import { useUsers } from '../../pages/providers/person';
import router from 'next/router';
import Link from 'next/link';
import { Button } from 'antd';
import { useNumber } from '../../pages/providers/sarsNumber';

const { Header, Content, Footer, Sider } = Layout;

const TestDashBoard: React.FC = () => {
  const { getGrant, grantData } = useGrant();
  const { getNumber, numberData } = useNumber();
  const [sarsNumber, setSarsNumber] = useState('');


  const { logout, auth } = useUsers();

  useEffect(() => {
    getGrant();
  }, []);

  useEffect(() => {
    if (auth) {
      console.log('auth', auth);
    }
  }, [auth]);

  const Logout = async (values: boolean) => {
    console.log('Received values:', values);
    if (typeof logout === 'function') {
      logout();
    } else {
      console.log('Failed to log out');
      alert('Failed to log out');
    }
  };

  const handleGetSarsNumber = async () => {
    try {
      const number = await getNumber();
      if (typeof number === 'string') {
        setSarsNumber(number);
      } else {
        console.log('Invalid SARS number:', number);
      }
    } catch (error) {
      console.log('Error retrieving SARS number:', error);
    }
  };
  
  
  

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const menuItems = [
    { icon: HomeOutlined, label: 'Home', path: '/DashBoard' },
    { icon: HomeOutlined, label: 'Apply for Grant', path: '/ApplyForm' },
    { icon: EnvironmentOutlined, label: 'Map', path: '/BranchMaps' },
    { icon: CreditCardOutlined, label: 'Link Sassa Card', path: '/RegisterCard' },
    { icon: SettingOutlined, label: 'Manage Card', path: '/managecard' },
    { icon: CalendarOutlined, label: 'Book a Branch Visit', path: '/Booking' },
    { icon: QuestionCircleOutlined, label: 'FAQ', path: '/KnowledgeBase' },
    { icon: LogoutOutlined, label: 'Logout', path: '/' },
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
        <Menu className={styles.menuContent} theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          {menuItems.map(({ icon: Icon, label, path }, index) => (
            <Menu.Item key={path} icon={<Icon />}>
              <Link href={path}>{label}</Link>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout>
        <Header className={styles.header} />
        <Content className={styles.content}>
          <div className={styles.contentInner}>
            <h1>Welcome back, Member!</h1>
            <img src="/coatofarms.png" alt="Coat of Arms" />
            <h3>Name Surname</h3>
          </div>
          <div>
            <div className={styles.container}>
              <h2>Your Info!</h2>
              <Row gutter={16}>
                <Col span={12}>
                  <Card title="SASSA Number" className={styles.customcard} style={{ marginBottom: 16 }}>
                    <Button>Get Sassa Number</Button>
                    <p>69045</p>
                  </Card>
                </Col>
                <Col span={12}>
                  <Card title="SARS Number" className={styles.customcard} style={{ marginBottom: 16 }}>
                    <Button onClick={handleGetSarsNumber}>Get SARS Number</Button>
                    <p>54909</p>
                    {sarsNumber && <p>{sarsNumber}</p>}
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
