import { createSelector } from "reselect";

const selectItem = state => state.directory;

export const selectDirectory = createSelector(
  [selectItem],
  directory => directory.storage
);
