import { Layout, Menu } from 'antd';
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
  return (
    <>
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
          <Menu.Item key="map-branches" icon={<EnvironmentOutlined />}>
            Map of Branches
          </Menu.Item>
          <Menu.Item key="sassa-card" icon={<CreditCardOutlined />}>
            Link of SASSA Card
          </Menu.Item>
          <Menu.Item key="FAQ" icon={<QuestionCircleOutlined />}>
            FAQ
          </Menu.Item>
        </Menu>
      </Sider>
    </div>
    <div> 
      <div>
        <div className={styles.container}>
      <GrantTable data={grantData} />
        </div>
      </div>
    </div>
      </>
  );
};

export default Sidebar;
