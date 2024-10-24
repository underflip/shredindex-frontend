import React from 'react';
import { useRecoilState } from 'recoil';
import { cilMenu } from '@coreui/icons';
import { CIcon } from '@coreui/icons-react';
import {
  CContainer, CHeader, CHeaderToggler,
} from '@coreui/react';
import Link from 'next/link';
import Logo from '../../images/logo.svg';
import HeaderMenuMain from '../HeaderMenuMain/HeaderMenuMain';
import { showSidebar as showSidebarAtom } from '../../atoms/showSidebar';
import ResortSearchAutosuggest from '../ResortSearchAutoSuggest/ResortSearchAutoSuggest';
import UserProfileMenu from '@/User/UserProfileMenu';

const Header: React.FC = () => {
  const [showSidebar, setShowSidebar] = useRecoilState(showSidebarAtom);

  return (
    <CHeader className="header">
      <CContainer fluid className="header__container-main d-flex align-items-center">
        <div className="d-flex align-items-center header-col-flex">
          <CHeaderToggler
            className="header__toggler ps-1 d-md-none"
            onClick={() => setShowSidebar(!showSidebar)}
          >
            <CIcon icon={cilMenu} size="lg" />
          </CHeaderToggler>
          <Link className="header__logo px-3 d-none d-md-block" href="/">
            <Logo className="header__logo-image" name="logo" height={28} alt="Logo" />
          </Link>
          <HeaderMenuMain />
        </div>
        <div className="d-flex justify-content-center header-col-flex-search">
          <ResortSearchAutosuggest />
        </div>
        <div className="d-flex justify-content-end header-col-flex">
          <UserProfileMenu />
        </div>
      </CContainer>
    </CHeader>
  );
};

export default Header;
