import campsites from 'NucampFolder/React/nucampsite/src/app/shared/CAMPSITES';

export const selectAllCampsites = () => {
  return campsites;
};

export const selectRandomCampsite = () => {
  return campsites[Math.floor(campsites.length * Math.random())];
};