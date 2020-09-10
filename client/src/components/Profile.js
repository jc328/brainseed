import React from 'react';
import '../styles/profile.css'

function Profile(props) {
  const pictureURL = props.picture ? props.picture : process.env.PUBLIC_URL + 'avatar_generic.png'

    return (
        <>
        <div className="profile_container">
                <div className="profile_image_name">
                    <div><img className="profile_image" src={pictureURL} alt="" /></div>
                    <div className="profile_username">User Name{props.lastName}</div>
                    {/* <div className="profile_settings">Settings</div> */}
                </div>
            </div>
        </>
    );
}
export default Profile;
