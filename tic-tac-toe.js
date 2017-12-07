console.log("hello");
function startGame() {
	document.turn ="X";
	setMessage(document.turn + " Start Please ");
}

function setMessage(msg) {
	document.getElementById("message").innerText = msg;
}

function nextMove(square) {
	if (square.innerText == '') {
		square.innerText = document.turn;
		switchTurn();
	} else {
		setMessage("Pick another square");
	}
	
}

function switchTurn() {
	if (document.turn == "X") {
		document.turn = "O";
	} else {
		document.turn = "X";
	}
	setMessage(" It's " + document.turn + " turn !!");
}


	// body...