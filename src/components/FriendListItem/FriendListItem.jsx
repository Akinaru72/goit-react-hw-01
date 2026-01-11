import clsx from "clsx";
import css from "./FriendListItem.module.css";

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClsx = clsx(isOnline ? css.online : css.offline);
  return (
    <div className={css.item}>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={statusClsx}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
