import React, { useEffect } from "react";
import SectionHeader from "./common/SectionHeader";
import mic from '../assets/images/mic.png';
import { useDispatch, useSelector } from 'react-redux';
import { getTopOrganizationsThunk } from '../features/eventSlice';


const OrganizationLogos = ({ organizations }) => {
  const { topOrganizations } = useSelector((state) => state.event);
  const dispatch=useDispatch(); 
  useEffect(() => {
    dispatch(getTopOrganizationsThunk());
  }, [dispatch]);
  console.log('Top Organizations',topOrganizations)
  return (
    <div className="container">
    <SectionHeader title={'TOP ORGANIZations'} url={mic} />
        <div className="organizationLogos_wrapper mt-4">
            {topOrganizations?.map((org, index) => (
                <div key={index} className="organizationLogos_wrap">
                <img src={org.ipfsUrl} alt={org.name}/>
                <p className="mb-0">{org.name}</p>
                </div>
            ))}
        </div>
    </div>
  
  );
};

export default OrganizationLogos;
