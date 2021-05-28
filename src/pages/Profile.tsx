import { useState, useEffect } from 'react';
import { Result, Button } from 'antd';
import { SmileOutlined } from '@ant-design/icons';
import { singleton } from '@/singleton';

export default function Profile() {
  const [username, setUsername] = useState('');

  useEffect(() => {
    singleton.onGlobalStateChange((value: any) => {
      setUsername(value.currentUser.username);
    }, true);
  }, []);

  return (
    <Result
      icon={<SmileOutlined />}
      title={
        username ? `我在子应用中获取到了你的用户名：${username}` : '还未登录'
      }
    />
  );
}
