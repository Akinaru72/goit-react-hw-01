import css from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  return (
    <div className={css.profile}>
      <div className={css.avatar}>
        <img className={css.image} src={image} alt="User avatar" />
        <p className={css.name}>{name}</p>
        <p className={css.text}>{tag}</p>
        <p className={css.text}>{location}</p>
      </div>

      <ul className={css.list}>
        <li className={css.link}>
          <span className={css.item}>Followers</span>
          <span className={css.name}>{followers}</span>
        </li>
        <li className={css.link}>
          <span className={css.item}>Views</span>
          <span className={css.name}>{views}</span>
        </li>
        <li className={css.link}>
          <span className={css.item}>Likes</span>
          <span className={css.name}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
