import { Seller } from "../src/interface";
import { Employee, Manager } from "../src/interface-extend";
import { Person } from "../src/person";

describe('Interface', function() {
  it('should support in typescript', function() {
    const seller: Seller = {
      id: 1,
      name: 'Toko ABC',
      nib: '123456789',
      npwp: '123456789',
    };
    
    // seller.nib = 'test';
    console.info(seller);
  });

  it('should support function interface', function() {
    interface AddFunction {
      (valueOne: number, valueTwo: number): number
    }

    const add: AddFunction = (value1: number, value2: number): number => {
      return value1 + value2;
    }

    expect(add(2, 2)).toBe(4);
  });

  it('should support indexable interface', function() {
    interface StringArray {
      [index: number]: string
    };

    const names: StringArray = ['Laksmana Yudha', 'Dede', 'Santhi'];
    console.info(names);
  });

  it('should support indexable interface for non number index', function() {
    interface StringDictionary {
      [key: string]: string
    };

    const dictionary: StringDictionary = {
      name: 'Yudha',
      address: 'Indonesia'
    };

    expect(dictionary['name']).toBe('Yudha');
  });

  it('should support extend interface', function() {
    const employee: Employee = {
      id: '1',
      name: 'Yudha',
      division: 'IT'
    };

    const manager: Manager = {
      id: '2',
      name: 'Laksmana',
      division: 'IT',
      numberOfEmployee: 10
    };

    console.info({ employee, manager });
  });

  it('should support function in interface', function() {
    const person: Person = {
      name: 'Yudha',
      sayHello: function (name: string): string {
        return `Hello ${name}, my name is ${this.name}`;
      }
    };

    console.info(person.sayHello('Eko'));
  });

  it('should support intersection types', function() {

    interface HasName {
      name: string
    };

    interface HasId {
      id: string
    }

    // interface Domain extends HasName, HasId {} // atau
    type Domain = HasId & HasName;

    const domain: Domain = {
      id: '1',
      name: 'Yudha',
    };

    console.info(domain);
  });

  it('should support type assertions', function() {
    const person: any = {
      name: 'Yudha',
      age: 24
    };

    const person2: Person = person as Person;

    // console.info(person2.age);
    // person2.sayHello('hello');
    console.info(person2);
  });
});