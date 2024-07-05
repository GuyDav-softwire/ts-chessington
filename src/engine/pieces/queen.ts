import Piece from './piece';
import Player from '../player';
import Board from '../board';
import Square from '../square';

export default class Queen extends Piece {
    public constructor(player: Player) {
        super(player);
    }

    public getAvailableMoves(board: Board) {
        let availableMoves = new Array<Square>();
        let currentPosition = board.findPiece(this);
        
        this.pathCheck(-1,0,availableMoves,currentPosition,board);
        this.pathCheck(1,0,availableMoves,currentPosition,board);
        this.pathCheck(0,1,availableMoves,currentPosition,board);
        this.pathCheck(0,-1,availableMoves,currentPosition,board);

        this.pathCheck(-1,-1,availableMoves,currentPosition,board);
        this.pathCheck(-1,1,availableMoves,currentPosition,board);
        this.pathCheck(1,-1,availableMoves,currentPosition,board);
        this.pathCheck(1,1,availableMoves,currentPosition,board);

        return availableMoves;
    }
}
