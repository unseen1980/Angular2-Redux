import Immutable = require('immutable');
import { IBagAction } from './actions';
import { Bag } from './bag-store';

export function reducer(state: Immutable.List<Bag> = Immutable.List<Bag>(), action: IBagAction) {
  switch (action.type) {
    case 'ADD':
      return state.push({
        size: action.size,
        price: action.price
      });
    case 'REMOVE':
      return state.delete(findBySize());
    case 'REMOVEALL':
      return state.clear();
    default:
      return state;
  }

  function findBySize() {
    return state.findLastIndex((bag) => bag.size === action.size);
  }
}
