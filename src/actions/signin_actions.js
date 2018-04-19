export const SIGNED_IN = 'SIGNED_IN';

export const signedIn = () => {
  return {
    type: SIGNED_IN,
    payload: true
  };
};