import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  //const addAt = (userName) => `@${userName}`;
  return (
    <>
      <TwitterFollowCard
        isFollowing={true}
        userName="midudev"
        name="david rivas"
      />
      <TwitterFollowCard
        isFollowing={false}
        userName="kikobeats"
        name="david domador"
      />
    </>
  );
}
