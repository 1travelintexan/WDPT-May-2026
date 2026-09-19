import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);

  return <div>{currentUser && currentUser.username}'s Profile Page</div>;
};
export default ProfilePage;
