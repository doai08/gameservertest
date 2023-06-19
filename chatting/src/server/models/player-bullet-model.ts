import PostionData from './Position.model';
import RotationData from './Rotation.model';
class PlayerBulletData{
    public playerBulletName: string;
    public playerBulletSpawnPosition: PostionData;
    public playerBulletSpawnRotation: RotationData;
    public roomID: number;
    constructor(_playerBulletName:string,_playerBulletSpawnPosition:PostionData,_playerBulletSpawnRotation,_roomID:number){
        this.playerBulletName = _playerBulletName;
        this.playerBulletSpawnPosition = _playerBulletSpawnPosition;
        this.playerBulletSpawnRotation = _playerBulletSpawnRotation;
        this.roomID             = _roomID;
    } 
}
export default PlayerBulletData;