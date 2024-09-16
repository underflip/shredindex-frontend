import React from 'react';
import {CCard, CCardBody, CLink } from '@coreui/react';
import {FormattedMessage} from "react-intl";

// @ts-ignore
const AdvertiseHere: React.FC = ({affiliateUrl}) => {
  return (
  <>
    <div className="resort-single-card-heading user-select-none mb-2">
      <FormattedMessage id="shredindex.resort.ADVERTISEHERE" defaultMessage="Advertise"/>
    </div>
    <CCard className="resort__accomodation-card mb-4">
      <CCardBody>
        <p className="caption-text">
          Have a local business or a ski package to offer? &nbsp;
        </p>
        <p>
          <CLink href={affiliateUrl} target="_blank">
            <p className="caption-text">Get in touch with us.</p>
          </CLink>
        </p>
      </CCardBody>
    </CCard>
  </>
  )
};

export default AdvertiseHere;
