// const capitalFirstLetter = () => {};
function capitalFirstLetter(word) {
  if (word === undefined || typeof word === "number") {
    return "NOT VALID";
  }

  const capitalWord = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capitalWord;
}
