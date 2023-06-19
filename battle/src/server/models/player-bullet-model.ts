import PositionData from './position-model';

class PlayerBulletData{
    public playerName: string;
    public playerBulletName: string;
    public atk: number;
    public toe: number;
    public fromPosition: PositionData;
    public targetPosition: PositionData;
    public force: number;
    public roomID: number;
    constructor(_playerName:string, _playerBulletName:string,_atk: number, _toe:number, _fromPosition: PositionData, _targetPosition: PositionData,_force: number,_roomID:number){
        this.playerName = _playerName;
        this.playerBulletName = _playerBulletName;
        this.atk = _atk;
        this.toe = _toe;
        this.fromPosition = _fromPosition;
        this.targetPosition = _targetPosition;
        this.force = _force;
        this.roomID = _roomID;
    } 
}
export default PlayerBulletData;