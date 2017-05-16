var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var CountDownForm =require('CountDownForm');

describe('CountDownForm',() =>{
   it ('should exist', () => {
      expect(CountDownForm).toExist(); 
        });	

    it ('should call onSetCountDown if valid second entered', () =>{
      var spy = expect.createSpy();
      var countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown ={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownform));

      countdownform.refs.seconds.value = '109';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toHaveBeenCalledWith(109) ;      	
    
   }); 

   it ('should call not onSetCountDown if not valid second entered', () =>{
      var spy = expect.createSpy();
      var countdownform = TestUtils.renderIntoDocument(<CountDownForm onSetCountDown ={spy}/>);
      var $el = $(ReactDOM.findDOMNode(countdownform));

      countdownform.refs.seconds.value = '109B';
      TestUtils.Simulate.submit($el.find('form')[0]);

      expect(spy).toNotHaveBeenCalled() ;      	
    
   });  
});