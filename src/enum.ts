export enum CustomerType {
  // REGULAR = 2,
  // GOLD = 1,
  // PLATINUM = 0,
  REGULAR = 'REGULAR',
  GOLD = 'GOLD',
  PLATINUM = 'PLATINUM',
};

export type Customer = {
  id: number,
  name: string,
  type: CustomerType,
};