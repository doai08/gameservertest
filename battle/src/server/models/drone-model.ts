import PostionData from './position-model';
import RotationData from './rotation-model';
class DroneData{
    public playerName: string;
    public droneName: string;
    public droneIndex: number;
    public droneSpawnPosition: PostionData;
    public droneSpawnRotation: RotationData;
    public roomID: number;
    constructor( _playerName,_droneName:string, _droneIndex, _droneSpawnPosition:PostionData,_droneSpawnRotation: RotationData,_roomID: number){
        this.playerName         = _playerName;
        this.droneName          = _droneName;
        this.droneIndex         = _droneIndex;
        this.droneSpawnPosition = _droneSpawnPosition;
        this.droneSpawnRotation = _droneSpawnRotation;
        this.roomID             = _roomID;
    } 
}
export default DroneData;