import React from 'react';
import {
  CBreadcrumbRouter,
  CHeader,
  CHeaderBrand,
  CHeaderNav,
  CHeaderNavItem,
  CSubheader,
  CToggler,
  CFormGroup,
  CInputGroup,
  CInput,
  CInputGroupAppend,
  CButton,
  CLabel
} from '@coreui/react';

import {
  cibPowershell,
  cilChatBubble,
  cilEnvelopeOpen, cilFilter,
  cilGraph,
  cilHouse,
  cilSettings,
  cilUserPlus
} from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { TheHeaderDropdown } from './TheHeaderDropdown.stories';
import { TheHeaderDropdownMssg } from './TheHeaderDropdownMssg.stories';
import { TheHeaderDropdownTasks } from './TheHeaderDropdownTasks.stories';
import { TheHeaderDropdownNotif } from './TheHeaderDropdownNotif.stories';

export default { title: 'Header' };

export const Header = () => (
  <>
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none"
      />
      <CHeaderBrand className="mx-auto d-lg-none">
        <CIcon content={cilEnvelopeOpen} name="logo" height="48" alt="Logo"/>
      </CHeaderBrand>
      <CHeaderNav className="d-md-down-none mr-auto">
        <CHeaderNavItem className="px-3">
          <CIcon content={cilFilter} name="cil-graph" alt="Dashboard"/>&nbsp;Resorts
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CIcon content={cilChatBubble} name="cil-settings" alt="Settings"/>&nbsp;
          Join Chat
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
          <CIcon content={cilUserPlus} name="cil-settings" alt="Settings"/>&nbsp;
          Member Benefits
        </CHeaderNavItem>
        <CHeaderNavItem className="px-3">
            <div className="controls">
              <CInputGroup>
                <CInput id="appendedInputButtons" size="16" type="text" placeholder="Find a resort"/>
                <CInputGroupAppend>
                  <CButton color="secondary">Search</CButton>
                </CInputGroupAppend>
              </CInputGroup>
            </div>
        </CHeaderNavItem>
      </CHeaderNav>
      <CHeaderNav className="px-3">
        <TheHeaderDropdownNotif/>
        <TheHeaderDropdownTasks/>
        <TheHeaderDropdownMssg/>
        <div className="steeze-points col-4">
          <strong className="d-block text-right row">Tom</strong>
          <small className="d-block text-right row">1234 stz points</small>
        </div>
        <TheHeaderDropdown/>
      </CHeaderNav>
      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter
          className="border-0 c-subheader-nav m-0 px-0 px-md-3"
        />
        <div className="d-md-down-none mfe-2 c-subheader-nav">
          <div
            className="c-subheader-nav-link"
            aria-current="page"
            to="/resorts"
          >
            <CIcon content={cilHouse} name="cil-graph" alt="Resorts"/>&nbsp;Resorts
          </div>
          <div className="c-subheader-nav-link">
            <CIcon content={cilSettings} name="cil-settings" alt="Settings"/>&nbsp;Settings
          </div>
        </div>
      </CSubheader>
    </CHeader>


  </>
);
