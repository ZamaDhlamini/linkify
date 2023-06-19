import React from 'react';
import styles from './Profile.module.css';
import { Divider } from 'antd';

// Define the types for the profile data
interface ProfileData {
  personalInformation: string;
  bookingInformation: string;
  branches: string[];
}

// Fetch the profile data from an API or any data source
const fetchProfileData = (): ProfileData => {
  // Replace this with your actual implementation to fetch the data
  return {
    personalInformation: 'Personal information goes here',
    bookingInformation: 'Booking information goes here',
    branches: ['Branch 1', 'Branch 2', 'Branch 3'],
  };
};

const Profile: React.FC = () => {
  // Fetch the profile data
  const profileData = fetchProfileData();

  return (
    <div>
        <div className={styles.heading}>
      <h1>Profile Page</h1>
        </div>
        <h2>[Name]</h2>
<div className={styles.container}>
      <section>
        <h3>Personal Information</h3>
        <p>{profileData.personalInformation}</p>
      </section>
      <Divider/>
      <section>
        <h3>Booking Information</h3>
        <p>{profileData.bookingInformation}</p>
      </section>
      <Divider/>
      <section>
        <h3>Map of Branches</h3>
        <Divider/>
        <p>Map component goes here</p>
      </section>

      <section>
        <h3>Link Sassa Card</h3>
        
        <a href="https://www.sassa.gov.za/">SASSA Branch</a>
      </section>
</div>
    </div>
  );
};

export default Profile;
