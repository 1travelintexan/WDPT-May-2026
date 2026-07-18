import { useSearchParams } from "react-router-dom";

const ProfilePage = () => {
  //grab query from url
  const [searchParams] = useSearchParams();
  const theRealQuery = searchParams.get("best-pet");
  const theOtherQuery = searchParams.get("second-best");
  console.log(searchParams, theRealQuery, theOtherQuery);
  return <div>ProfilePage</div>;
};
export default ProfilePage;
