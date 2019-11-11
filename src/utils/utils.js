export function updateState(newValues) {
  let originalStateCopy = Object.assign({}, this.state);
  let newState = Object.assign(originalStateCopy, newValues);
  this.setState(newState);
}

export function min(array, accessor) {
  return  Math.min.apply(Math, array.map(it => accessor(it)));
}

export function max(array, accessor) {
  return  Math.max.apply(Math, array.map(it => accessor(it)));
}
