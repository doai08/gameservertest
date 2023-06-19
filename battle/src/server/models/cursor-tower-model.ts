import PositionData from './position-model';
class CursorTowerData{
    public playerName: string;
    public newDirection: PositionData;
    public roomID: number;
    constructor(_playerName, _newDirection: PositionData,_roomID: number){
        this.playerName = _playerName;
        this.newDirection = _newDirection;
        this.roomID           = _roomID;
    } 
}
export default CursorTowerData;