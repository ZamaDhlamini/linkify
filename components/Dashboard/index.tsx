import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { Card } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const tabList = [
    {
      key: 'tab1',
      tab: 'tab1',
    },
    {
      key: 'tab2',
      tab: 'tab2',
    },
  ];
  
  const contentList: Record<string, React.ReactNode> = {
    tab1: <p>content1</p>,
    tab2: <p>content2</p>,
  };
  
  const tabListNoTitle = [
    {
      key: 'article',
      label: 'article',
    },
    {
      key: 'app',
      label: 'app',
    },
    {
      key: 'project',
      label: 'project',
    },
  ];
  
  const contentListNoTitle: Record<string, React.ReactNode> = {
    article: <p>article content</p>,
    app: <p>app content</p>,
    project: <p>project content</p>,
  };

const items: MenuProps['items'] = [
  getItem('Personal Information', 'sub1', <MailOutlined />, [
    getItem('Item 1', 'g1', null, [getItem('Option 1', '1'), getItem('Option 2', '2')], 'group'),
    getItem('Item 2', 'g2', null, [getItem('Option 3', '3'), getItem('Option 4', '4')], 'group'),
  ]),

  getItem('Booking Information', 'sub2', <AppstoreOutlined />, [
    getItem('Option 5', '5'),
    getItem('Option 6', '6'),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

  { type: 'divider' },

  getItem('Map of Branches', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Link Sassa Card', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9'),
    getItem('Option 10', '10'),
    getItem('Option 11', '11'),
    getItem('Option 12', '12'),
  ]),

  getItem('Navigate', 'grp', null, [getItem('Home', '13'), getItem('Maps', '14')], 'group'),
];

const DashBoard: React.FC = () => {
  const onClick: MenuProps['onClick'] = (e) => {
    console.log('click ', e);
  };

  const [activeTabKey1, setActiveTabKey1] = useState<string>('tab1');
  const [activeTabKey2, setActiveTabKey2] = useState<string>('app');

  const onTab1Change = (key: string) => {
    setActiveTabKey1(key);
  };
  const onTab2Change = (key: string) => {
    setActiveTabKey2(key);
  };

  return (
    <>
    <Menu
          onClick={onClick}
          style={{ width: 256 }}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          items={items} /><Card
              style={{ width: '100%' }}
              title="Card title"
              extra={<a href="#">More</a>}
              tabList={tabList}
              activeTabKey={activeTabKey1}
              onTabChange={onTab1Change}
          >
              {contentList[activeTabKey1]}
          </Card>
          <br />
          <br />
          <Card
              style={{ width: '100%' }}
              tabList={tabListNoTitle}
              activeTabKey={activeTabKey2}
              tabBarExtraContent={<a href="#">More</a>}
              onTabChange={onTab2Change}
          >
              {contentListNoTitle[activeTabKey2]}
          </Card>
          </>
  );
};

export default DashBoard;