import * as React from 'react';
import { PHDTwoLogo } from '../../../../shared/components/phd-two-logo/PHDTwoLogo';
import './phd-two-details.css';
import { IPHDTwoDetailsProps } from './types/IPHDTwoDetailsProps';

export const PHDTwoDetails = (props: IPHDTwoDetailsProps) => {

  return (
    <>
      <div className="main-head">
        <PHDTwoLogo size="large" />
      </div>

      <div className="message"> Your story begins here...</div>
    </>
  );
};