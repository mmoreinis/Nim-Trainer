/* Nim Trainer by Bram Moreinis	*/
// Initialzations	
var count = 0;	
var winner=null;	
var gameState = "simple"; //Initalize gameState to "Simple" to set default game state to it	
// Welcome	
function playNim(){
	gameState=prompt("Choose simple (s) or trainer (t)?");	
	
	alert("Welcome to Nim! You go first.");	
	// Start Play	
	// Keep looping until someone wins	
	while (count<21) {	
	   // Ask for player input and say current count, add to count	
	   winner="CPU"; 	
	   count+=playerTurn();	
	   alert("Current count is "+count);	
	   // Check if player loses, and prevent CPU from taking turn if so	
	   if (count<21) {	
	      // Ask for CPU input and say current count, add to count	
	      winner="you";	
	      if (gameState=="t"){	
	         count+=cpuTrainer(count);    	
	      }	
	      else count+=cpuTurn(count);	
	      alert("Current count is "+count);	
	   }	
	}	
	alert(winner+" won!");	
	// End	
	
	// Define function playerTurn	
	function playerTurn(){	
		let turn = 0;
		while(true){	
			turn=parseInt(prompt("Pick a number 1-3"));	
			if(turn>0 && turn<4 && Math.floor(turn)==turn) return turn;
			else alert("Number is out of range, try again.");	
		}	
	   return turn;	
	}	
	
	// Define function cpuTurn	
	function cpuTurn(count){	
		if (count==18) turn = 2;
		else if (count > 18) turn == 1;
		else turn = Math.floor(Math.random()*3)+1;	
		alert("cpu counts "+turn);		
		return turn;	
	}	
	
	// Define function cpuTrainer	
	function cpuTrainer(count){	
		if (count%4 != 0) turn=4-(count%4);	
		else if (count==20) turn = 1;	
		else turn = Math.floor(Math.random()*3)+1;	
		alert("cpu counts "+turn);		
		return turn;	
	}
}
