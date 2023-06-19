import PostionData from './position-model';
import RotationData from './rotation-model';
class GemData{
    public gemName: string;
    public gemSpawnPosition: PostionData;
    public gemSpawnRotation: RotationData;
    public roomID: number;
    constructor(_gemName:string,_gemSpawnPosition:PostionData,_gemSpawnRotation,_roomID: number){
        this.gemName = _gemName;
        this.gemSpawnPosition = _gemSpawnPosition;
        this.gemSpawnRotation = _gemSpawnRotation;
        this.roomID           = _roomID;
    } 
}
export default GemData;