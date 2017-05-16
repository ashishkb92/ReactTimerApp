var React = require('react');
var Clock =require('Clock');
var CountDownForm = require('CountDownForm');
var Controls = require('Controls')

var CountDown = React.createClass({
	renderControlArea:function(){
     if (this.state.countdownStatus !== 'stopped'){
     	return(<Controls countdownStatus = {this.state.countdownStatus} onStatusChange = {this.handleStatusChange}/>); 
     }else {
     	return(<CountDownForm onSetCountDown= {this.handleSetCountDown}/>);
     }

    


	},

	 handleStatusChange: function(newStatus){
     	this.setState({countdownStatus : newStatus})
     },

	getInitialState : function (){

		return {count : 0 ,
        countdownStatus :'stopped' ,

		};
	},

    commponenetWillUnmount: function(){
        clearInterval(this.timer);
           	this.timer =  undefined;
    }   ,

	componentDidUpdate : function(prevProps,prevState){
		if(this.state.countdownStatus !== prevState.countdownStatus){
           switch(this.state.countdownStatus){
           	case 'started':
           	this.startTimer();
           	break;
           	case 'stopped':
           	this.setState({ count : 0 });
           	case 'paused' :
           	clearInterval(this.timer);
           	this.timer =  undefined;
           	
           	break;
           } 
		}
	},

	startTimer : function(){
		this.timer = setInterval(() => {
			var newCount = this.state.count - 1;
			this.setState({
            count : newCount >= 0 ? newCount : 0 
			});
			if (newCount === 0) this.setState({countdownStatus:'stopped'});
		},1000);
	},

    handleSetCountDown : function(seconds){
      this.setState({
      	count : seconds ,
      	countdownStatus :'started'
      });
    },


      render : function () {
         var {count} = this.state 
         return(<div>
	     <Clock totalSeconds= {count}/> 
	     {this.renderControlArea()}




	   </div>


	);
}





});

module.exports = CountDown;