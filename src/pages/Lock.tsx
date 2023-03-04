import React from 'react';
import { Button, Result } from 'antd';
import { useIntl } from 'umi';
import {FormattedMessage} from "@@/plugin-locale/localeExports";

const Lock: React.FC = () => {
  const intl = useIntl();
  return(
    <Result
      title={intl.formatMessage({
        id: 'app.dev.info',
        defaultMessage: '页面开发中~',
      })}
      extra={
        <Button type="primary" key="console" href='/create'>
          <FormattedMessage id='menu.return-home' defaultMessage='返回首页' />
        </Button>
      }
    />
  )
};

export default Lock;
