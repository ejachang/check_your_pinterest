export const PROFILE_INFO = 'PROFILE_INFO';

export const profileInfo = (data) => {
  return {
    type: PROFILE_INFO,
    payload: data
  };
};