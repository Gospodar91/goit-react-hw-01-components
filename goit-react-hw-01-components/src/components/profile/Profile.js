import React from "react";
import PropTypes from "prop-types";
import styles from "../profile/Profile.module.css";

const Profile = ({ user }) => {
  const {
    name,
    stats: { followers, views, likes },
    tag,
    location,
    avatar
  } = user;
  return (
    <div className={[styles.container]}>
      <div className={[styles.profile]}>
        <div className={[styles.description]}>
          <img src={avatar} alt="user avatar" className={[styles.avatar]} />
          <p className={[styles.name]}>{name}</p>
          <p className={[styles.tag]}>{tag}</p>
          <p className={[styles.location]}>{location}</p>
        </div>

        <ul className={[styles.stats]}>
          <li className={[styles.list]}>
            <span className="label">Followers</span>
            <span className="quantity">{followers}</span>
          </li>
          <li className={[styles.list]}>
            <span className="label">Views</span>
            <span className="quantity">{views}</span>
          </li>
          <li className={[styles.list]}>
            <span className="label">Likes</span>
            <span className="quantity">{likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired
    })
  })
};

export default Profile;
