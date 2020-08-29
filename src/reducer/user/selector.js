import NameSpace from '../name-space.js';

const NAME_SPACE = NameSpace.USER;

function getAuthorizationStatus(state) {
  return state[NAME_SPACE].authorizationStatus;
}

export {getAuthorizationStatus};
