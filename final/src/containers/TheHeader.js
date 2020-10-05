import React, { useContext } from 'react';
import { Layout, Menu, Avatar, message } from 'antd';
import { routeKeys } from '../shared/utils/constants';
import { useNavigation, useModal } from '../shared/hooks';
import { UserProfileModal } from '../modules/auth/components/modals';
import { signOut } from '../shared/services/authService';
import { UserContext } from '../shared/context';

function TheHeader() {
  const { push } = useNavigation();
  const [user, setUser] = useContext(UserContext);
  const [showUserProfileModal, toggleUserProfileModal] = useModal();

  const handleLogout = () => {
    signOut();    
    setUser(null);
    push(routeKeys.LOGIN);
    message.success('You successfully logged out.');
  }

  return (
    <Layout.Header style={{ padding: 0, backgroundColor: '#FFFFFF' }}>
      <Menu mode="horizontal" style={{ backgroundColor: 'inherit' }}>
        {user &&
          <Menu.SubMenu style={{ float: 'right' }} title={<Avatar src={user?.person?.photoUrl} />}>
            <Menu.Item onClick={toggleUserProfileModal}>View Profile</Menu.Item>
            <Menu.Item onClick={handleLogout}>Logout</Menu.Item>
          </Menu.SubMenu>}
      </Menu>
      {user && <>
        <UserProfileModal isOpen={showUserProfileModal} toggle={toggleUserProfileModal} />
      </>}
    </Layout.Header>
  );
}

export default React.memo(TheHeader);
