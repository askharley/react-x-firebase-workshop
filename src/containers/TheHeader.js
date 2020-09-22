import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Layout, Menu, Avatar, message } from 'antd';
import { routeKeys } from '../shared/utils/constants';
import { useNavigation, useModal } from '../shared/hooks';
import { UserProfileModal } from '../modules/auth/components/modals';
import { actionCreators } from '../shared/state/authStore';
import { signOut } from '../shared/services/authService';

export default function TheHeader() {
  const dispatch = useDispatch();
  const { push } = useNavigation();
  const user = useSelector((state) => state.auth.current);
  const [showUserProfileModal, toggleUserProfileModal] = useModal();

  const handleLogout = () => {
    signOut();
    dispatch(actionCreators.clearAuthUser());
    push(routeKeys.LOGIN);
    message.success('You successfully logged out.');
  }

  return (
    <Layout.Header style={{ padding: 0, backgroundColor: '#FFFFFF' }}>
      <Menu mode="horizontal" style={{ backgroundColor: 'inherit' }}>
        {user &&
          <Menu.SubMenu style={{ float: 'right' }} title={<Avatar src={user.photoUrl} />}>
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
