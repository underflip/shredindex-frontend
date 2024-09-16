import React from 'react';
import {CCard, CCardBody, CImage, CLink } from '@coreui/react';
import {FormattedMessage} from "react-intl";
import Image from "next/image";

// @ts-ignore
const Gear: React.FC = () => {
  return (
    <>
      <h3 className="resort-single-card-heading user-select-none mb-2">
        <FormattedMessage id="shredindex.resort.GEAR" defaultMessage="Gear"/>
      </h3>
      <CCard className="resort__gear-card mb-4">
        <CCardBody>
          <CLink href="https://www.kqzyfj.com/pi105xdmjdl0212345849021839322" target="_blank">
            <div className="resort__gear-image p-5 position-relative border-2 w-50">
              <Image src="https://www.ftjcfx.com/tf79tkocig132345695A13294A433" className="border-radius-small overflow-hidden" alt="" fill={true} />
            </div>
          </CLink>
        </CCardBody>
      </CCard>
    </>
  )
};

export default Gear;
