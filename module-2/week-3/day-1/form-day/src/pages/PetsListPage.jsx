const PetsListPage = ({ pets, handleDeletePet, handleSortPets }) => {
  return (
    <div>
      <button onClick={handleSortPets}>Sort</button>
      <h1>Pets:</h1>
      {pets.map((onePet) => {
        return (
          <div className="pet-card" key={onePet.id}>
            <h4>Name: {onePet.name}</h4>
            <button onClick={() => handleDeletePet(onePet.id)}>Delete</button>
          </div>
        );
      })}
    </div>
  );
};
export default PetsListPage;
