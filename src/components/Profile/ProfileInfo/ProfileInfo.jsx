import React, { useState } from 'react';
import styles from 'src/components/Profile/ProfileInfo/ProfileInfo.module.css';
import Loader from "src/components/common/Loader/Loader";
import Status from "src/components/Profile/Status/Status";
import userIcon from 'src/assets/images/user_icon.svg';
import ProfileDataForm from "src/components/Profile/ProfileInfo/ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({ isOwner, profile, status, updateStatus, savePhoto, saveProfile }) => {
  const [ editMode, setEditMode ] = useState(false);

  if (!profile) {
    return <Loader />
  }

  const onPhotoSelected = (e) => {
    if (e.target.files.length) {
      savePhoto(e.target.files[0]);
    }
  }

  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    })
  }

  return (
      <div className={styles.info}>
        <div>
          <img className={styles.avatar} src={profile?.photos?.large ?? userIcon}
            alt=""/>
          { isOwner && <input type="file" onChange={onPhotoSelected} /> }
        </div>
        {
          profile &&
          editMode
            ? <ProfileDataForm initialValues={profile} profile={profile} onSubmit={onSubmit} />
            : <ProfileData profile={profile} isOwner={isOwner} edit={() => setEditMode(true)} />
        }
        <Status status={status} updateStatus={updateStatus} />
      </div>
  );
};

const ProfileData = ({ profile, isOwner, edit }) => {
  const getContact = (title, value)  => {
    return <li key={title}>
      <b>{title}</b>: {value}
    </li>
  }

  return <>
    { isOwner &&
      <p onClick={edit}>
        <button>Edit</button>
      </p>
    }
    <p><b>Full name:</b> {profile.fullName}</p>
    <p><b>Looking for a job:</b> {profile.lookingForAJob ? "Yes" : "No"}</p>
    {profile.lookingForAJobDescription &&
    <p><b>Professional skills:</b> {profile.lookingForAJobDescription}</p>
    }
    <div>
      <p><b>Contacts:</b></p>
      <ul>
        {Object.keys(profile.contacts).map(key => getContact(key, profile.contacts[key]))}
      </ul>
    </div>
    { profile.aboutMe &&
    <p className={styles.bio}>
      <b>About:</b> {profile.aboutMe}
    </p>
    }
  </>
}

export default ProfileInfo;
