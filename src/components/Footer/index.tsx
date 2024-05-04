import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import '@umijs/max';
import React from 'react';

const Footer: React.FC = () => {
  const defaultMessage = '小白智能个人出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'codeNav',
          title: '个人开源的 AIGC 项目',
          href: 'https://github.com/baichenbo/IntelligentBI',
          blankTarget: true,
        },

        {
          key: 'github',
          title: (
            <>
              <GithubOutlined /> Github
            </>
          ),
          href: 'https://github.com/baichenbo',
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
