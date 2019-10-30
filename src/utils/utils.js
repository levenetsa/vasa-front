export function updateState(newValues) {
  let originalStateCopy = Object.assign({}, this.state);
  let newState = Object.assign(originalStateCopy, newValues);
  this.setState(newState);
}
