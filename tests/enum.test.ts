import { Customer, CustomerType } from "../src/enum";

describe('Enum', function() {
  it('should suppor in typescript', function() {
    const customer: Customer = {
      id: 1,
      name:'Yudha',
      type: CustomerType.GOLD
    };

    console.info(customer);
  });
});