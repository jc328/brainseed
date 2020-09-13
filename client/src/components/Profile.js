import React from 'react';
import '../styles/profile.css'
import LogOutButton from './LogOutButton';

function Profile({firstName, lastName, picture, createdDate}) {
  const pictureURL = picture ? picture : process.env.PUBLIC_URL + 'avatar_generic.png'

    return (
        <>
        <div className="profile_container">

                    <div className="profile_account_info">
                        <div><img className="profile_image" src={pictureURL} alt="" /></div>
    <div className="profile_username">{firstName} {lastName}</div>
                        <div className="profile_data">User Since: {createdDate}</div>
                        <div className="profile_data">Cards Reviewed:</div>
                        <LogOutButton />
                    </div>
                    {/* <div className="profile_settings">Settings</div> */}

            </div>
        </>
    );
}
export default Profile;
