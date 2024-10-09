import React from 'react';
import {
  CAvatar,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
} from '@coreui/react';
import { gql } from '@apollo/client';
import { useRouter } from 'next/router';
import { useRecoilState } from 'recoil';
import { loggedInUserName } from '../../atoms/userName';
import { showLogin } from '../../atoms/showLogin';

export const GET_USER_PROFILE = gql`
  query GetUserProfile {
    userProfile {
      id
      member_tier
      profile_picture
    }
  }
`;


const UserProfileMenu: React.FC = () => {
  const [loggedInUsername, setLoggedInUserName] = useRecoilState(loggedInUserName); // Change this to test different scenarios
  const [, setShowLoginState] = useRecoilState(showLogin); // Change this to test different scenarios

  const router = useRouter();

  const handleViewProfile = () => {
    router.push(`/profile/${loggedInUsername}`);
  };

  const profilePicture = 'https://lh3.googleusercontent.com/ogw/AF2bZyglPyEFm4b62iHIYJBimPhUp937NSGC1QnJCtQYkkWiDhw=s64-c-mo';

  const handleLogout = () => {
    setLoggedInUserName('');
  };

  if (!loggedInUsername)
    return (
    <>
      <div onClick={() => setShowLoginState(true)}>
        Login
      </div>
    </>
    );

  return (
    <>
      <CDropdown variant="nav-item">
        <CDropdownToggle caret={false}>
          <CAvatar src={profilePicture} size="md" />
        </CDropdownToggle>
        <CDropdownMenu>
          <CDropdownItem onClick={handleViewProfile}>
            View Profile
          </CDropdownItem>
          <CDropdownItem onClick={handleLogout}>Logout</CDropdownItem>
        </CDropdownMenu>
      </CDropdown>
    </>
  );
};

export default UserProfileMenu;
