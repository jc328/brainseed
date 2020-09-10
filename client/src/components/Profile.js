import React from 'react';
import '../styles/profile.css'
import LogOutButton from './LogOutButton';

function Profile(props) {
  const pictureURL = props.picture ? props.picture : process.env.PUBLIC_URL + 'avatar_generic.png'

    return (
        <>
        <div className="profile_container">

                    <div className="profile_account_info">
                        <div><img className="profile_image" src={pictureURL} alt="" /></div>
                        <div className="profile_username">User Name{props.lastName}</div>
                        <div className="profile_data">User Since:{props.lastName}</div>
                        <div className="profile_data">Cards Reviewed:{props.lastName}</div>
                        <LogOutButton />
                    </div>
                    {/* <div className="profile_settings">Settings</div> */}

            </div>
        </>
    );
}
export default Profile;
