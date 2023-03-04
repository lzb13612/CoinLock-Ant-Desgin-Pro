// import { QuestionCircleOutlined } from '@ant-design/icons';
import { Button,Space } from 'antd';
import React from 'react';
import {FormattedMessage, SelectLang, useModel} from 'umi';
import HeaderSearch from '../HeaderSearch';
// import Avatar from './AvatarDropdown';
import styles from './index.less';
import { injected } from '@/web3';
import { Web3Provider } from '@ethersproject/providers';
import { useWeb3React } from '@web3-react/core';

export type SiderTheme = 'light' | 'dark';

export type IindexProps = {

}

const GlobalHeaderRight: React.FC<IindexProps> = ({}) => {
  const context = useWeb3React<Web3Provider>();
  const {
    connector,
    library,
    chainId,
    account,
    activate,
    deactivate,
    active,
    error,
  } = context;

  async function connect() {
    try {
      await activate(injected)
      // eslint-disable-next-line @typescript-eslint/no-shadow
    } catch (error) {
      console.log(error);

    }
  }

  const { initialState } = useModel('@@initialState');

  if (!initialState || !initialState.settings) {
    return null;
  }

  const { navTheme, layout } = initialState.settings;
  let className = styles.right;

  if ((navTheme === 'dark' && layout === 'top') || layout === 'mix') {
    className = `${styles.right}  ${styles.dark}`;
  }
  return (
    <Space className={className}>
      <HeaderSearch
        className={`${styles.action} ${styles.search}`}
        placeholder="站内搜索"
        defaultValue=""
        options={[
          { label: <a href="https://umijs.org/zh/guide/umi-ui.html">umi ui</a>, value: 'umi ui' },
          {
            label: <a href="next.ant.design">Ant Design</a>,
            value: 'Ant Design',
          },
          {
            label: <a href="https://protable.ant.design/">Pro Table</a>,
            value: 'Pro Table',
          },
          {
            label: <a href="https://prolayout.ant.design/">Pro Layout</a>,
            value: 'Pro Layout',
          },
        ]}
        // onSearch={value => {
        //   console.log('input', value);
        // }}
      />
      {active ? (
        <span className={styles.mm_font}>
          Connected with <b>{account}</b>
        </span>
      ) : (
        <span className={styles.mm_font}>
          <Button type="primary" onClick={connect}>
            <FormattedMessage id="menu.account.metamask" defaultMessage="连接狐狸钱包" />
          </Button>
        </span>
      )}
      <SelectLang className={styles.action} />
    </Space>
  );
};
export default GlobalHeaderRight;
