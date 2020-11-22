import React, { FC } from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import { Provider } from 'react-redux';
import { store } from './store';
import Assets from './pages';

const Root: FC = () => {
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <Assets />
      </ConfigProvider>
    </Provider>
  );
};

export default Root;
