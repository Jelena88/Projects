let state = {};

const get = () => {
  return state;
};

const set = value => {
  state = value;
};

export { set, get, state };
