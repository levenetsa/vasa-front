export function updateState(newValues) {
  let originalStateCopy = Object.assign({}, this.state);
  let newState = Object.assign(originalStateCopy, newValues);
  this.setState(newState);
}

export function arrayMin(array, accessor) {
  return Math.min.apply(Math, array.map(it => accessor(it)));
}

export function arrayMax(array, accessor) {
  return Math.max.apply(Math, array.map(it => accessor(it)));
}
