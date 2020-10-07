import React, { useState } from 'react'
import { Layout } from 'antd';
import { remoteConfig } from '../shared/services/firebase';

const TheFooter = () => {
  const [version, setVersion] = useState('0.0.0');
  remoteConfig.fetchAndActivate()
    .then(() => setVersion(remoteConfig.getString('version')))

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      {version}
    </Layout.Footer>
  );
}

export default React.memo(TheFooter);
