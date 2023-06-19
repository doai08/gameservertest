import PostionData from './Position.model';
import RotationData from './Rotation.model';
class EnemyData{
    public enemyID: number;
    public enemyName: string;
    public enemySpawnPosition: PostionData;
    public enemySpawnRotation: RotationData;
    public roomID: number;
    constructor( _enemyID: number, _enemyName:string,_enemySpawnPosition:PostionData,_enemySpawnRotation,_roomID: number){
        this.enemyID            = _enemyID;
        this.enemyName          = _enemyName;
        this.enemySpawnPosition = _enemySpawnPosition;
        this.enemySpawnRotation = _enemySpawnRotation;
        this.roomID             = _roomID;
    } 
}
export default EnemyData;