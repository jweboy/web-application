import React, { FC, useState } from 'react'
import { Layout, Menu } from 'antd'

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

const initialCollapsed: boolean = false;

const BkLayout: FC = (props) => {
  const [collapsed, setCollapsed] = useState(initialCollapsed);

  function onCollapse(collapsed: boolean) {
    setCollapsed(collapsed)
  }

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <span>Option 1</span>
            </Menu.Item>
          </Menu>
        </Sider>
      <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            {/* <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb> */}
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            Bill is a cat.
              {props.children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
    </Layout>
  )
}

export default BkLayout