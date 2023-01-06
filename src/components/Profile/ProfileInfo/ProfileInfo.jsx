import React from 'react';
import styles from 'src/components/Profile/ProfileInfo/ProfileInfo.module.css';
import Loader from "src/components/Loader/Loader";

const ProfileInfo = ({ profile }) => {
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
      </div>
  );
};

export default ProfileInfo;
