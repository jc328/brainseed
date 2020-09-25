import React, { useEffect } from 'react';
import '../styles/profile.css'
import LogOutButton from './LogOutButton';
import { useSelector } from 'react-redux'
import { message } from 'antd';

function Profile({firstName, lastName, picture, createdDate, percent}) {
  const pictureURL = picture ? picture : 'https://user-images.githubusercontent.com/19940754/94235461-7b0f5600-fec0-11ea-9292-c4e1ac2be64f.png'
  const valErrors = useSelector(state=> state.authentication.valErrors)

  useEffect(() => {
    if (valErrors) {
      if (valErrors.msg.search('Google') === 7) {
        message.loading('Google Account Found.  Logging In.', [2], () => {message.success(`Logged In.  Welcome ${firstName}`)})
      }
    }
  }, [firstName, valErrors])

    return (
        <>
        <div className="profile_container">
                    <div className="profile_account_info">
                        <div><img className="profile_image" src={pictureURL} alt="" /></div>
                        <div className="profile_username">{firstName} {lastName}</div>
                        <div className="profile_data">User Since: {createdDate}</div>
                        <div className="profile_data">Cards Reviewed: {percent}</div>
                        <LogOutButton />
                    </div>

            </div>
        </>
    );
}
export default Profile;
