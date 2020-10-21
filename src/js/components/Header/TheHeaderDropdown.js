import React from 'react';
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilBell, cilEnvelopeOpen, cilTask } from '@coreui/icons';

export default { title: 'TheHeaderDropdown' };

export const TheHeaderDropdown = () => (
  <CDropdown
    inNav
    className="c-header-nav-items mx-2"
    direction="down"
  >
    <CDropdownToggle className="c-header-nav-link" caret={false}>
      <div className="c-avatar">
        <CImg
          src={'https://shredindex.com/storage/app/uploads/public/5c0/04f/e78/thumb_43_90_90_0_0_crop.png'}
          className="c-avatar-img"
          alt="admin@bootstrapmaster.com"
        />
      </div>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownItem
        header
        tag="div"
        color="light"
        className="text-center"
      >
        <strong>Account</strong>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon content={cilBell} name="cil-bell" className="mfe-2"/>
        Updates
        <CBadge color="info" className="mfs-auto">42</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon content={cilEnvelopeOpen} name="cil-envelope-open" className="mfe-2 mr-2"/>
        Messages
        <CBadge color="success" className="mfs-auto">42</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon content={cilTask} name="cil-task" className="mfe-2"/>
        Tasks
        <CBadge color="danger" className="mfs-auto">42</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-comment-square" className="mfe-2"/>
        Comments
        <CBadge color="warning" className="mfs-auto">42</CBadge>
      </CDropdownItem>
      <CDropdownItem
        header
        tag="div"
        color="light"
        className="text-center"
      >
        <strong>Settings</strong>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-user" className="mfe-2"/>Profile
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-settings" className="mfe-2"/>
        Settings
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-credit-card" className="mfe-2"/>
        Payments
        <CBadge color="secondary" className="mfs-auto">42</CBadge>
      </CDropdownItem>
      <CDropdownItem>
        <CIcon name="cil-file" className="mfe-2"/>
        Projects
        <CBadge color="primary" className="mfs-auto">42</CBadge>
      </CDropdownItem>
      <CDropdownItem divider/>
      <CDropdownItem>
        <CIcon name="cil-lock-locked" className="mfe-2"/>
        Lock Account
      </CDropdownItem>
    </CDropdownMenu>
  </CDropdown>
);