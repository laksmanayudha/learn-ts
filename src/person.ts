export interface Person {
  name: string,
  // sayHello: Function
  sayHello(name: string): string
};