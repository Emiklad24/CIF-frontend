import React from 'react';
import "styles/pages/form.less";
import Epidemiological from "./Epidemiological";
import ClinicalHistory from "./ClinicalHistory";
import FinalClassification from "./FinalClassification";
import LaboratoryInformation from "./LaboratoryInformation";
import Referral from './Referral';

const BuruliUlcer = ({form}) => {
  return (
    <>
      <Epidemiological form={form}/>
      <ClinicalHistory form={form}/>
      <LaboratoryInformation form={form}/>
      <FinalClassification form={form}/>
      <Referral form={form}/>
    </>
  );
};
export default BuruliUlcer;
