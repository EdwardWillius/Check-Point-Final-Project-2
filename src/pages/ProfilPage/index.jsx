import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProfilePage = () => {
  const [profile, setProfile] = useState(null);

  const getProfile = async () => {

    const token = localStorage.getItem('token');
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };

    try {
      const response = await axios.get('https://dummyjson.com/auth/me', config);
      console.log(response);
      setProfile(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div>
      <h1>Profile</h1>
      {profile && (
        <div>
          <p>{profile.firstName}</p>
          <img src={profile.image} alt="profile" />
          <p>{profile.email}</p>
          <p>{profile.phone}</p>
        </div>
      )}
    </div>
  );
};

export default ProfilePage;