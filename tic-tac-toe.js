console.log("hello");
function startGame() {
	for(var i = 1; i <= 9; i++) {
		clearBox(i);
	}


	document.turn ="X" ;
	document.winner = null;
	setMessage(document.turn + " Start Please ");
}


function setMessage(msg) {
	/* setting the meassage */ 
	document.getElementById("message").innerText = msg;
}


function nextMove(square) {
	if (document.winner != null){
		setMessage(document.turn + " already won hit the Start Game Button ");
	}else if (square.innerText == '') {
		square.innerText = document.turn;
		square.className += " " + document.turn;
		switchTurn();
	} else {
		setMessage("Pick another square");
	}
	
}

function switchTurn() {
	if(checkForWinner(document.turn)) {
		setMessage(" Congrats " + document.turn + " You Won Duuuh ! ");
		document.winner = document.turn;
	}
	else
		if(CheckforTie())
            {
                setMessage("Its a TIE Sucker.!! Play again...!!!");
            }

	else if (document.turn == "X") {
		document.turn = "O";
		setMessage(" It's " + document.turn + " turn !!");
	} else {
		document.turn = "X";
		setMessage(" It's " + document.turn + " turn !!");
	}
	/* to take the turn mesaage */
	
}

 /* setting the winner */

 function checkForWinner(move) {
 	var result = false;
 	if (checkRow(1, 2, 3, move) ||
 		checkRow(4, 5, 6, move) ||
 		checkRow(7, 8, 9, move) ||
 		checkRow(1, 4, 7, move) ||
 		checkRow(2, 5, 8, move) ||
 		checkRow(3, 6, 9, move) ||
 		checkRow(1, 5, 9, move) ||
 		checkRow(3, 5, 7, move)) {
 		result = true;
 	}
 	return result;
 }

function checkRow (a, b, c, move) {
	var result = false;
	if(getBox(a) == move && getBox(b) == move && getBox(c) == move) {
		result = true;
	}
	return result;
}

  function CheckforTie()
        {
            for(var i=1;i<10;i++)
            {

              if(getBox(i)=="")
               return false;
            }
            return true;
        }


function getBox (number) {
	return document.getElementById("s" + number).innerText;

}

function clearBox(number) {
	document.getElementById("s" + number).innerText = "";
}

function myFunction() {
    var element = document.getElementByClass("Square");
    element.classList.add("X");
}

