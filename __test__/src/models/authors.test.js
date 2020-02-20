const Authors = require('../../../src/models/authors.js');
require('@code-fellows/supergoose');

const authors = new Authors();
const testObj1 = {
    name: 'George Orwell',
    handle: 'GorWell'
}
const testObj2 = {
    name: 'Joanne Rowling',
    handle: 'JKrow'
}
let testID1;
let testID2;

describe('Authors model', () => {
    it('can create() a new author truthy', () => {
        
        return authors.create(testObj1)
            .then(record => {
                Object.keys(testObj1).forEach(key => {
                    expect(record[key]).toBeTruthy();
                })
                testID1 = record._id;
            })
            .catch(err => console.error('ERROR:', err))
        
    })
    it('can create() a new author', () => {
        
        return authors.create(testObj2)
            .then(record => {
                Object.keys(testObj2).forEach(key => {
                    expect(record[key]).toEqual(testObj2[key]);
                })
                testID2 = record._id;
            })
            .catch(err => console.error('ERROR:', err))
        
    })
    it('can read() all authors', () => {
        return authors.read()
            .then(record => {
                expect(typeof record).toBe('object');
                // console.log('record',record);
            })
            .catch(err => console.error('ERROR:', err))
    })
    it('can read() a single authors from create test', () => {
        return authors.read(testID1)
            .then(record => {
                expect(record[0].name).toBe(testObj1.name);
            })
            .catch(err => console.error('ERROR:', err))
    })
    // it('can update() an author', () => {
    //     return authors.update(testID,)
    //         .then(record => {
    //             expect(typeof record).toBe('object');
    //         })
    //         .catch(err => console.error('ERROR:', err))
    // })
    it('can delete() an author', () => {
        return authors.delete(testID2)
            .then(record => {
                expect(record._id).toEqual(testID2);
            })
            .catch(err => console.error('ERROR:', err))
    })
})