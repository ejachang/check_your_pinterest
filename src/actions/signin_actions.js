export const SIGNED_IN = 'SIGNED_IN';

export const signedIn = (access_token) => {
  return {
    type: SIGNED_IN,
    payload: access_token !== 'undefined' || access_token !== undefined
  };
};