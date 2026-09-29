import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import axios from "axios";

const ProfilePage = () => {
  const { currentUser } = useContext(AuthContext);
  const [profileUser, setProfileUser] = useState(null);
  useEffect(() => {
    async function getProfileData() {
      try {
        const { data } = await axios.get(
          `http://localhost:5005/auth/profile/${currentUser._id}`,
        );
        console.log(data);
        setProfileUser(data);
      } catch (error) {
        console.log(error);
      }
    }
    getProfileData();
  }, [currentUser._id]);
  return (
    <div>
      <h1>{currentUser && currentUser.username}'s Profile Page</h1>
      <img
        alt="profile image"
        src={profileUser && profileUser.profilePicture}
      />
    </div>
  );
};
export default ProfilePage;
