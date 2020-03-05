import React from "react";
import PropTypes from "prop-types";
import FriendListItem from "../friendlistItem/FriendListItem";
const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(friends => {
        const { id, avatar, name, isOnline } = friends;
        return (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        );
      })}
    </ul>
  );
};
FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object).isRequired
};
export default FriendList;

























// import React, { Component } from "react";
// import styles from "../friendlist/Friendlist.module.css";
// import friends from "../friendlist/friendlist.json";
// import PropTypes from "prop-types";
// class FriendList extends Component {
//   prop = {
//     friendList: friends
//   };
//   state = {
//     isOnline:false
//   };
//  trueOnline(){
//     this.setState({isOnline:true})

// }
// falseOnline(){
//     this.setState({isOnline:false})

// }
//  render() {
//     return (
//       <ul className="friend-list">
//         {this.prop.friendList.map(friends => (
//           <li className={[styles.item]} key={friends.id}>
//             {friends.isOnline  ? (
//               <span className={[styles.greenAct]} ></span>
//             ) : (
//               <span className={[styles.redAct]}></span>
//             )}
//             <img
//               className="avatar"
//               src={friends.avatar}
//               alt="not available"
//               width="48"
//             />
//             <p className="name">{friends.name}</p>
//           </li>
//         ))}
//       </ul>
//     );
//   }

// }

// export default FriendList;
