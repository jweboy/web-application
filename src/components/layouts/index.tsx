import React, { FC, useState } from 'react';
import { Layout, Menu } from 'antd';
import styles from './index.less';

const { Header, Footer, Content, Sider } = Layout;
const { SubMenu } = Menu;

const BkLayout: FC = props => {
  return (
    <Layout className={styles.layout}>
      <Sider>
        <div className={styles.logo} />
        <Menu
          theme="dark"
          defaultOpenKeys={['assets']}
          defaultSelectedKeys={['qiniuCloud']}
          mode="inline"
        >
          <SubMenu key="assets" title="静态资源">
            <Menu.Item key="qiniuCloud">七牛云</Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className={styles.container}>
        <Header className={styles.header} />
        <Content className={styles.content}>{props.children}</Content>
        <Footer className={styles.footer} style={{ textAlign: 'center' }}>
          Ant Design ©2020 Created by biubiubiu
        </Footer>
      </Layout>
    </Layout>
  );
};

export default BkLayout;
