var React = require('react');

var Controls = React.createClass({


	onStatusChange : function(newStatus){
        return ()=> {
        	this.props.onStatusChange(newStatus)
        }; 
	} ,
    selectWhichButton : function() {
    	
    	if (this.props.countdownStatus === 'started'){
    		return(<button className = 'button primary' onClick = {this.onStatusChange('paused')}> Pause </button>);
    	}else
    	{
    		return (<button className = 'button secondary' onClick = {this.onStatusChange('started')}> Start </button>);
    	}


    } ,

	render : function(){
		var {countdownStaus} = this.props;
        return(<div className = 'controls'> 
        {this.selectWhichButton()}
		<button className = 'button alert hollow' onClick = {this.onStatusChange('stopped')}> Clear </button>
		</div>);
	}

});

module.exports = Controls;