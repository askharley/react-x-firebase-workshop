import React, { useState } from 'react'
import { Layout } from 'antd';

const TheFooter = () => {
  const [version, setVersion] = useState('0.0.0');

  return (
    <Layout.Footer style={{ textAlign: 'center' }}>
      {version}
    </Layout.Footer>
  );
}

export default React.memo(TheFooter);
