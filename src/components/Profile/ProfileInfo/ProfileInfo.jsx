import React from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = ({ bio }) => {
  return (
      <div className={styles.info}>
        <div>
          <img className={styles.avatar} src="https://phonoteka.org/uploads/posts/2021-05/1621731417_1-phonoteka_org-p-izumrudnie-listya-fon-1.jpg"
            alt=""/>
        </div>
        <div className={styles.bio}>
          {bio}
        </div>
      </div>
  );
};

export default ProfileInfo;
