import React from 'react';
import './CallDetail.scss';
import { CgPhone } from 'react-icons/cg';
import { HiPhoneMissedCall } from 'react-icons/hi';

const CallDetail = () => {
  return (
    <div className="callDetail">
      <div className="info-call">
        <div className="call-number">(33) 99932-1998</div>
        <div className="duration-call">
          <span>Tempo de duração: </span>01:42:22
        </div>
      </div>
      <div className="action-call">
        <div className="accept">
          <CgPhone />
        </div>
        <div className="decline">
          <HiPhoneMissedCall />
        </div>
      </div>
    </div>
  );
};

export default CallDetail;
