import css from "./Profile.module.css";

export default function Profile({ img, name, tag, location, stats }) {
  return (
    <div className={css.profile}>
      <div className={css.avatar}>
        <img src={img} alt="User avatar" />
        <p className={css.title}>{name}</p>
        <p className={css.subtitle}>{tag}</p>
        <p className={css.subtitle}>{location}</p>
      </div>

      <ul className={css.followers}>
        <li>
          <span>Followers: </span> <span>{stats.followers}</span>
        </li>

        <li>
          <span>Views</span>
          <span>{stats.views}</span>
        </li>

        <li>
          <span>Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
