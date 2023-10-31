import { useState } from "react";
export function TwitterFollowCard({ userName, name }) {
  const [isFollowing, setFollowing] = useState(false);

  const text = isFollowing ? "siguiendo" : "seguir";
  const imgSrc = `https://unavatar.io/${userName}`;
  //const addAt = (userName) => `@${userName}`;
  const buttonClassname = isFollowing
    ? "tw-followCard-button is--following"
    : "tw-followCard-button";

  const handleClick = () => {
    setFollowing(!isFollowing);
  };
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={imgSrc}
          alt={`${userName}s avatar`}
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>
      <aside>
        <button className={buttonClassname} onClick={handleClick}>
          {text}
        </button>
      </aside>
    </article>
  );
}
//" https://unavatar.io/kikobeats" alt=""
