import { CAMPSITES } from '/Users/drsuite/Macbook-Document/Assignments/NucampFolder/React/nucampsite/src/app/shared/CAMPSITES.js';

export const selectAllCampsites = () => {
  return CAMPSITES;
};

export const selectCampsiteById = (id) => {
  return CAMPSITES.find((campsite) => campsite.id === id);
};