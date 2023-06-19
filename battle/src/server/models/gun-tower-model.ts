import PostionData from './position-model';
import RotationData from './rotation-model';
class GunTowerData{
    public towerID: number;
    public eulerAngle: RotationData;
    public roomID: number;
    constructor(_towerID: number,_eulerAngle: RotationData,_roomID:number){
        this.towerID = _towerID;
        this.eulerAngle = _eulerAngle;
        this.roomID  = _roomID;
    } 
}
export default GunTowerData;
