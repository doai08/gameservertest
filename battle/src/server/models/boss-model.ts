import PositionData from './position-model';
import RotationData from './rotation-model';
class BossData{
    public bossName: string;
    public bossSpawnPosition: PositionData;
    public bossSpawnRotation: RotationData;
    public roomID: number;
    constructor(_bossName:string,_bossSpawnPosition:PositionData,_bossSpawnRotation,_roomID: number){
        this.bossName = _bossName;
        this.bossSpawnPosition = _bossSpawnPosition;
        this.bossSpawnRotation = _bossSpawnRotation;
        this.roomID            = _roomID;
    } 
}
export default BossData;