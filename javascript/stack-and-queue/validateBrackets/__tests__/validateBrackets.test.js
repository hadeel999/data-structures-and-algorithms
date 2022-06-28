'use strict';
const {validateBrackets} = require('../validateBrackets');


describe('Validate Brackets Test',()=>{
    it('Test 1',()=>{
        expect(validateBrackets("{}")).toEqual(true);
    })

    it('Test 2',()=>{
        expect(validateBrackets("{}(){}")).toEqual(true);
    })

    it('Test 3',()=>{
        expect(validateBrackets("()[[Extra Characters]]")).toEqual(true);
    })

    it('Test 4',()=>{
        expect(validateBrackets("(){}[[]]")).toEqual(true);
    })

    it('Test 5',()=>{
        expect(validateBrackets("{}{Code}[Fellows](())")).toEqual(true);
    })

    it('Test 6',()=>{
        expect(validateBrackets("[({}]")).toEqual(false);
    })

    it('Test 7',()=>{
        expect(validateBrackets("(](")).toEqual(false);
    })

    it('Test 8',()=>{
        expect(validateBrackets("{(})")).toEqual(false);
    })

    it('Test 9',()=>{
        expect(validateBrackets("{")).toEqual(false);
    })
    
    it('Test 10',()=>{
        expect(validateBrackets(")")).toEqual(false);
    })

    it('Test 11',()=>{
        expect(validateBrackets("[}")).toEqual(false);
    })

})
