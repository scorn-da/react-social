import React from 'react';
import styles from 'src/components/Profile/ProfileInfo/ProfileInfo.module.css';
import Loader from "src/components/common/Loader/Loader";
import Status from "src/components/Profile/Status/Status";

const ProfileInfo = ({ profile, status, updateStatus }) => {
  if (!profile) {
    return <Loader />
  }

  return (
      <div className={styles.info}>
        <div>
          <img className={styles.avatar} src={profile?.photos?.large ?? 'https://phonoteka.org/uploads/posts/2021-05/1621731417_1-phonoteka_org-p-izumrudnie-listya-fon-1.jpg'}
            alt=""/>
        </div>
        { profile?.aboutMe &&
          <div className={styles.bio}>
            {profile.aboutMe}
          </div>
        }
        <Status status={status} updateStatus={updateStatus} />
      </div>
  );
};

export default ProfileInfo;
