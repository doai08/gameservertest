import PostionData from './position-model';
import RotationData from './rotation-model';
class TowerData{
    public towerID: number;
    public towerName: string;
    public towerSpawnPosition: PostionData;
    public towerSpawnRotation: RotationData;
    public towerRange: number;
    public roomID: number;
    constructor(_towerID:number, _towerName:string,_towerSpawnPosition:PostionData,_towerSpawnRotation: RotationData,_towerRange:number,_roomID:number){
        this.towerID = _towerID; 
        this.towerName = _towerName;
        this.towerSpawnPosition = _towerSpawnPosition;
        this.towerSpawnRotation = _towerSpawnRotation;
        this.towerRange = _towerRange;
        this.roomID             = _roomID;
    } 
}
export default TowerData;