import React from 'react';
import { CCard, CCardBody } from '@coreui/react';
import { FormattedMessage } from 'react-intl';
import { AffiliateUrl } from '../../../types/resortTypes';
import Link from 'next/link'

const AdvertiseHere: React.FC <AffiliateUrl> = ({ affiliateUrl }) => {
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
        <Link href={affiliateUrl} target="_blank">
        <p>
            <p className="caption-text">Get in touch with us.</p>
        </p>
        </Link>
      </CCardBody>
    </CCard>
  </>
  );
};

export default AdvertiseHere;
