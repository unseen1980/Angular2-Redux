export interface IBagAction {
  type: string;
  size?: string;
  price?: number;
}

export function addBag(size: string, price: number): IBagAction {
  return {
    type: 'ADD',
    size,
    price
  };
}

export function removeBag(size: string, price: number): IBagAction {
  return {
    type: 'REMOVE',
    size,
    price
  };
}

export function removeAll() {
  return {
    type: 'REMOVEALL'
  };
}
