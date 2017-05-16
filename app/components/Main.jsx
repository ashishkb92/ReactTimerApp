var React = require('react');
var Navigation = require('Navigation');

var Main = (props) => {
	const calculateTip = (x,y,z)=>{
		debugger;
  if (z%x ===0 || z%y===0 || z%(x+y)===0 ){
    return 0;
  }
  
  let tip;
  let xmax = parseInt(z/x);
  let ymax = parseInt(z/y);
  
  if(xmax === 0){
    let leftTipx = x-z;
    let leftTipy = (ymax+y)-z;
    return Math.min(leftTipx,leftTipy);
  }else{
   let remainPaidx = z-(x*xmax)
   let PaidxTipx = x-remainPaidx
   let PaidxTipy = (Math.ceil(remainPaidx/y)*y)-remainPaidx
   
   let leftTipy = (ymax+y)-z;
   
   return Math.min(PaidxTipx,PaidxTipy,leftTipy);
   
  }
  
};


var minTip = (x,y,z) => {
  if(x>y) { 
    return calculateTip(x,y,z);     
  } else {
    return calculateTip(y,x,z);
  }
}

console.log(minTip(2,5,109));
  return (
    <div>
     <Navigation/>
      <div className = "row">
        <div className= "column small-centered medium-6 large-4">
         
          
          {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
