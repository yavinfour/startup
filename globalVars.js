let pokedex = 0;
let favArray = new Set();

export const getPokedex = () => pokedex;

export const setPokedex = (newValue) => {
  pokedex = newValue;
};

export const getFavArray = () => favArray;

export const setFavArray = (newValue) => {
    favArray.add(pokedex);
}

export const resetFavArray = () => {
    favArray = new Set();
}

export const deleteElement = (oldVal) => {
    favArray.delete(oldVal);
}