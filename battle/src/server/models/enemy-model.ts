import PostionData from './position-model';
import RotationData from './rotation-model';
class EnemyData{
    public enemyID: number;
    public enemyName: string;
    public def: number;
    public maxHP: number;
    public enemySpawnPosition: PostionData;
    public enemySpawnRotation: RotationData;
    public roomID: number;
    constructor( _enemyID: number, _enemyName:string,_def: number, _maxHP: number, _enemySpawnPosition:PostionData,_enemySpawnRotation,_roomID: number){
        this.enemyID            = _enemyID;
        this.enemyName          = _enemyName;
        this.def                 = _def;
        this.maxHP               = _maxHP;
        this.enemySpawnPosition = _enemySpawnPosition;
        this.enemySpawnRotation = _enemySpawnRotation;
        this.roomID             = _roomID;
    } 
}
export default EnemyData;