import { Layout, Menu, Avatar, Card, Row, Col } from 'antd';
import {
  HomeOutlined,
  UserOutlined,
  InfoCircleOutlined,
  EnvironmentOutlined,
  CreditCardOutlined,
  QuestionCircleOutlined
} from '@ant-design/icons';
import styles from './Dashboard.module.css';
import GrantTable from '../GrantTable';
import Link from 'next/link';

const { Sider } = Layout;

const Sidebar = () => {
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
  
  const userName = 'Your Name'; // Replace 'Your Name' with the actual name
  
  return (
    <>
      <div className={styles.header}>
        <Avatar size={64} src="path_to_your_profile_picture" /> {/* Replace 'path_to_your_profile_picture' with the actual path */}
        <h2 className={styles.greeting}>Hello, {userName}!</h2>
      </div>
      <div className={styles.menu}>
        <Sider width={200} theme="light" className={styles.sidebar}>
          <Menu mode="vertical" defaultSelectedKeys={['home']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
            <Menu.Item key="users" icon={<UserOutlined />}>
              Users
            </Menu.Item>
            <Menu.Item key="personal-info" icon={<InfoCircleOutlined />}>
              Personal Information
            </Menu.Item>
            <Link href='/BranchMaps'>
            <Menu.Item key="map-branches" icon={<EnvironmentOutlined />}>
              Map of Branches
            </Menu.Item>
            </Link>
            <Link href='/RegisterCard'>
            <Menu.Item key="sassa-card" icon={<CreditCardOutlined />}>
              Link of SASSA Card
            </Menu.Item>
            </Link>
            <Menu.Item key="FAQ" icon={<QuestionCircleOutlined />}>
              FAQ
            </Menu.Item>
          </Menu>
        </Sider>
      </div>
      <div>
        <div className={styles.container}>
          <Row gutter={16}>
            <Col span={12}>
              <Card title="SASSA Number" style={{ marginBottom: 16 }}>
                Content
              </Card>
            </Col>
            <Col span={12}>
              <Card title="SARS Number" style={{ marginBottom: 16 }}>
                Content
              </Card>
            </Col>
          </Row>
        </div>
        <div className={styles.table}>
          <GrantTable data={grantData} />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
