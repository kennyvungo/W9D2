class View {
  constructor(game, el) {
    this.game = game;
    this.el = el;
    this.setupBoard();
  }
  
  setupBoard() {
    const board = document.createElement('ul');
    board.className = 'board';

    for(let row = 0; row < 3; row ++){
      for(let col = 0; col < 3; col ++){
        const cell = document.createElement("li");
        cell.dataset.pos = [row,col];
        board.appendChild(cell);
      }
      this.el.appendChild(board);
    }


  }
  
  handleClick(e) {
  }

  makeMove(square) {
  }
  
  handleGameOver() {
  }
}

export default View;