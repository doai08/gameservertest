import PostionData from './position-model';
import RotationData from './rotation-model';
class N_SkillData{
    public playerName:string;
    public skillName: string;
    public timeExistence: number;
    public countDownBurn: number;
    public countDown: number;
    public skillRange: number;
    public quantity: number;
    public atkSpeed: number;
    public skillSpawnPosition: PostionData;
    public skillSpawnRotation: RotationData;
    public roomID: number;
    constructor(_playerName: string, _skillName:string,_timeExistence: number,_countDownBurn: number, _countDown: number,_skillRange: number,_quantity: number, _atkSpeed: number, _skillSpawnPosition:PostionData,_skillSpawnRotation:RotationData,_roomID: number){
        this.playerName = _playerName; 
        this.skillName = _skillName;
        this.timeExistence = _timeExistence;
        this.countDownBurn = _countDownBurn;
        this.countDown = _countDown;
        this.skillRange = _skillRange;
        this.quantity = _quantity;
        this.atkSpeed = _atkSpeed;
        this.skillSpawnPosition = _skillSpawnPosition;
        this.skillSpawnRotation = _skillSpawnRotation;
        this.roomID            = _roomID;
    } 
}
export default N_SkillData;