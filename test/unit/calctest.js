'use strict';
const chai = require('chai');
const assert = chai.assert;
const path = require('path')
const Calc = require(path.join(__dirname,'../../functions/calc.js'))

describe('単体テスト',function(){
    it('Testing input calc module 2, 4  return 8',function(){
        assert.equal(Calc.multiple(2,4),8);
    })

    it('Testing input calc module 0, 4  return 0',function(){
        assert.equal(Calc.multiple(0,4),0);
    })
});