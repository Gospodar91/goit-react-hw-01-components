import React from "react";
import PropTypes from "prop-types";
import styles from "../friendlistItem/Friendlist.module.css";

const FriendListItem = ({ id, name, avatar, isOnline }) => {
  return (
    <li className={[styles.item]} key={id}>
      {isOnline ? (
        <span className={[styles.greenAct]}></span>
      ) : (
        <span className={[styles.redAct]}></span>
      )}

      <img className="avatar" src={avatar} alt="not available" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired
};
export default FriendListItem;
