import { useParams } from "react-router-dom";

const PetDetail = ({ pets }) => {
  //grabs the id from the url
  const { petId } = useParams();
  const foundOnePet = pets.find((onePet) => {
    if (onePet.id == petId) {
      return true;
    }
  });
  console.log(pets, petId, foundOnePet);
  return (
    <div>
      <h1>{foundOnePet.name}'s Page</h1>
      <h4>Age: {foundOnePet.age}</h4>
      <h4>Owner: {foundOnePet.owner}</h4>
    </div>
  );
};
export default PetDetail;
