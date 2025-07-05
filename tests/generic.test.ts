describe('Generic', () => {
  it('should support', () => {
    const addUID = <Type extends { name: string }>(obj: Type) => {
      const uid = +new Date();
      return {...obj, uid };
    }

    console.log(addUID({ name: 'yudha', age: 23 }));

    interface Resource<Type> {
      uid: number,
      resourceName: string,
      data: Type
    };

    const resource: Resource<string[]> = {
      uid: 3,
      resourceName: 'resource name',
      data: ['data', 'data', 'data', '3']
    }
  });
});