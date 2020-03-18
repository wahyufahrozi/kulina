import DataMenu from "./directiory-data";

const INITIAL_STATE = {
  storage: DataMenu
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;
