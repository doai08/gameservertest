import PostionData from './Position.model';
import RotationData from './Rotation.model';
class TowerData{
    public towerName: string;
    public towerSpawnPosition: PostionData;
    public towerSpawnRotation: RotationData;
    public roomID: number;
    constructor(_towerName:string,_towerSpawnPosition:PostionData,_towerSpawnRotation,_roomID:number){
        this.towerName = _towerName;
        this.towerSpawnPosition = _towerSpawnPosition;
        this.towerSpawnRotation = _towerSpawnRotation;
        this.roomID             = _roomID;
    } 
}
export default TowerData;