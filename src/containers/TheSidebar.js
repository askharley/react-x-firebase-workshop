import React from 'react'
import { Layout, Menu } from 'antd';
import { LoginOutlined, AppstoreOutlined } from '@ant-design/icons';
import { useNavigation } from '../shared/hooks';
import { routeKeys } from '../shared/utils/constants';

const TheSidebar = () => {
  const { push } = useNavigation();

  return (
    <Layout.Sider>
      <img src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/SW_opening_crawl_logo.svg/1200px-SW_opening_crawl_logo.svg.png" alt="header-logo" width="200" style={{ padding: '20px' }} />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item onClick={() => push(routeKeys.LOGIN)} key={routeKeys.LOGIN} icon={<LoginOutlined />}>
          Login
        </Menu.Item>
        <Menu.Item onClick={() => push(routeKeys.MOVIES)} key={routeKeys.MOVIES} icon={<AppstoreOutlined />}>
          Movies
        </Menu.Item>
      </Menu>
    </Layout.Sider>
  );
}

export default React.memo(TheSidebar)
