import PostionData from './Position.model';
import RotationData from './Rotation.model';
class PlayerData{
    public playerName: string;
    public playerSpawnPosition: PostionData;
    public playerSpawnRotation: RotationData;
    public roomID: number;
    public playerHP: number;
    public constructor(_playerName:string,_playerSpawnPosition:PostionData,_playerSpawnRotation:RotationData, _roomID: number,_playerHP:number){
        this.playerName = _playerName;
        this.playerSpawnPosition = _playerSpawnPosition;
        this.playerSpawnRotation = _playerSpawnRotation;
        this.roomID              = _roomID;
        this.playerHP            = _playerHP;
    } 
}
export default PlayerData;