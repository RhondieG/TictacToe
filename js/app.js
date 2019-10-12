

var boardElement = document.getElementById("board");

var boardData = [];

var currentPlayer = "player1";

var makeBoard = function(){

    for(var row =0; row<3; row++) {

        var rowElement = document.createElement("div");
        rowElement.className= "row"

        boardData[row] = [];

        for(var columns=0; columns<3; columns++){

            var columnElement = document.createElement("div");
            columnElement.className ="col border board-piece";
            columnElement.innerHTML = "Row " + row + " Column " + columns;

            columnElement.onclick = function() {

                var idString = this.id;
                var idArray = idString.split("-");
                
                if(this.innerHTML == getXPiece() || this.innerHTML == getOPiece()){
                    alert("You cannot change this piece");
                } else if(currentPlayer == "player1") {
                    this.innerHTML = getXPiece();
                    currentPlayer = "player2";
                    checkWinVertical(idArray[0], idArray[1], getXPiece());
                } else if(currentPlayer == "player2"){
                    this.innerHTML = getOPiece();
                    currentPlayer = "player1";
                    checkWinVertical(idArray[0], idArray[1], getXPiece());
                }

            }

            boardData[row][columns] = columnElement;

            rowElement.appendChild(columnElement);

        }

        boardElement.appendChild(rowElement);

    }
}

var getXPiece = function(){
    return "X";
}

var getOPiece = function(){
    return "O";
}

var checkWinVertical = function(row, column, piece){

    // console.log(row);
    // console.log(solumn);
    // console.log(peice);

        var points = 0;

        if(  boardData[row-1] && boardData[row-1][column] && boardData[row-1][column].innerHTML == piece  ) {
            points++;
        }
        if(boardData[row+1] && boardData[row+1][column] && boardData[row+1][column].innerHTML == piece) {
            points++;
        }
        if(points >= 2){
            alert("You have won");
        }
}

    makeBoard();
    console.log(boardData);
    boardData[1][1].innerHTML="Superman";
      


