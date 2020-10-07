import React from 'react';
import { Layout, Menu, Avatar } from 'antd';
import { useModal } from '../shared/hooks';
import { UserProfileModal } from '../modules/auth/components/modals';

function TheHeader() {
  const user = null;
  const [showUserProfileModal, toggleUserProfileModal] = useModal();

  return (
    <Layout.Header style={{ padding: 0, backgroundColor: '#FFFFFF' }}>
      <Menu mode="horizontal" style={{ backgroundColor: 'inherit' }}>
        {user &&
          <Menu.SubMenu style={{ float: 'right' }} title={<Avatar src={user?.person?.photoUrl} />}>
            <Menu.Item onClick={toggleUserProfileModal}>View Profile</Menu.Item>
            <Menu.Item onClick={() => { }}>Logout</Menu.Item>
          </Menu.SubMenu>}
      </Menu>
      {user && <>
        <UserProfileModal isOpen={showUserProfileModal} toggle={toggleUserProfileModal} />
      </>}
    </Layout.Header>
  );
}

export default React.memo(TheHeader);
