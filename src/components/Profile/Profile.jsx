import style from "./Profile.module.css";
const Profile = ({ name, tag, location, image, status }) => {
  const { followers, views, likes } = status || {};
  return (
    <div className={style.profile}>
      <div>
        <img src={image} alt={tag} className={style.image} />
        <p className={style.name}>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={style.list}>
        <li className={style.item}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={style.item}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={style.item}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
