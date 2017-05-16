var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDown = require('CountDown');

describe('CountDown',()=>{
    it('should countdown exist',()=>{
    	expect(CountDown).toExist();
    });
    describe('handleSetCountDown',()=>{
      it('handleSetCountDown count is working',(done)=>{
      	var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      	countdown.handleSetCountDown(11);
      	expect(countdown.state.count).toBe(11);
      	expect(countdown.state.countdownStatus).toBe('started');
           
      	setTimeout(() => {
        expect(countdown.state.count).toBe(10);
        done();
         } ,1001);
      });

      it('handleSetCountDown count is not negative',(done)=>{
      	var countdown = TestUtils.renderIntoDocument(<CountDown/>);
      	countdown.handleSetCountDown(1);
      	expect(countdown.state.count).toBe(1);
      	expect(countdown.state.countdownStatus).toBe('started');
           
      	setTimeout(() => {
        expect(countdown.state.count).toBe(0);
        done();
         } ,3001);
      });  
    });
});