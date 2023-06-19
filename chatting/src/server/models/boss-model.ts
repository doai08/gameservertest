import PostionData from './Position.model';
import RotationData from './Rotation.model';
class BossData{
    public bossName: string;
    public bossSpawnPosition: PostionData;
    public bossSpawnRotation: RotationData;
    public roomID: number;
    constructor(_bossName:string,_bossSpawnPosition:PostionData,_bossSpawnRotation,_roomID: number){
        this.bossName = _bossName;
        this.bossSpawnPosition = _bossSpawnPosition;
        this.bossSpawnRotation = _bossSpawnRotation;
        this.roomID            = _roomID;
    } 
}
export default BossData;