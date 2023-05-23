import React, { useState } from 'react';
import {Outlet,NavLink} from 'react-router-dom'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button } from 'antd';

const { Header, Sider, Content } = Layout;

const Admin: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    // 布局
    <Layout>
      {/* 侧边栏 */}
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        {/* 左侧菜单 */}
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: <NavLink to={'/menu-one'}>页面一</NavLink>,
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: <NavLink to={'/menu-two'}>页面二</NavLink>,
            },
          ]}
        />
      </Sider>
      <Layout>
        {/* 右侧头部 */}
        <Header style={{ padding: 0, background: '#fff' }}>
          {/* 伸缩按钮 */}
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        {/* 右侧内容区 */}
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: '#fff'
          }}
        >
          {/* 路由出口 */}
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Admin;