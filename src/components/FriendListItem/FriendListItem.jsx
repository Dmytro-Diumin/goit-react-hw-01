import styles from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      {isOnline && <p className={styles.online}>Online</p>}
      {!isOnline && <p className={styles.offline}>Offline</p>}
    </div>
  );
};

export default FriendListItem;
