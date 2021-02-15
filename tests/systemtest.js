'use strict';
const chai = require('chai');
const assert = chai.assert;
const request = require('request');
const cheerio = require('cheerio');
const Calc = require('../routes/calc')

describe('単体テスト',function(){
    it('Testing input calc module 2, 4  return 8',function(){
        assert.equal(Calc.multiple(2,4),8);
    })

    it('Testing input calc module 0, 4  return 0',function(){
        assert.equal(Calc.multiple(0,4),0);
    })
});

describe('Webシステムテスト', async function(){
    it('Access with GET Method return 200', async function(){
        request.get({url:'http://localhost:3000'},function(err,response,body){
            assert.equal(response.statusCode,200);
        });
    });

    it('Access with POST Method return 200', async function(){
        request.post({url:'http://localhost:3000'},function(err,response,body){
            assert.equal(response.statusCode,200);
        });
    });

    it('Testing input title:掛け算', async function(){
        request.get({url:'http://localhost:3000',form:{title:'掛け算'}},function(err,response,body){
            const $ = cheerio.load(body);
            const title = $('#title').text();
            assert.equal(title,'掛け算');
        });
    });

    it('Testing input num1:"" num2:"" retutn 0 ', async function(){
        request.post({url:'http://localhost:3000',form:{num1:'',num2:''}},function(err,response,body){
            const $ = cheerio.load(body);
            const result = $('#result').text();
            assert.equal(result,0);
        });
    });

    it('Testing input num1:2 num2:3 return 6', async function(){
        request.post({url:'http://localhost:3000',form:{num1:2,num2:3}},function(err,response,body){
            const $ = cheerio.load(body);
            const result = $('#result').text();
            assert.equal(result,6);
        });
    });
});