import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Bishop extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves = new Array<Square>();
        let currentPosition = board.findPiece(this);
        let oldRow = currentPosition.row;
        let oldCol = currentPosition.col;
        for (let newRow = 0; newRow < Piece.boardSize; newRow++) {
            for (let newCol = 0; newCol < Piece.boardSize; newCol++) {
                if (newRow-newCol == oldRow-oldCol || newRow+newCol == oldRow+oldCol) {   
                    this.addAvailableMove(availableMoves, newRow, newCol, currentPosition);
                }
            }
        }
        
        return availableMoves;
    }
}
