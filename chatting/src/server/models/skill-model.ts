import PostionData from './Position.model';
import RotationData from './Rotation.model';
class N_SkillData{
    public skillName: string;
    public skillSpawnPosition: PostionData;
    public skillSpawnRotation: RotationData;
    public roomID: number;
    constructor(_skillName:string,_skillSpawnPosition:PostionData,_skillSpawnRotation,_roomID: number){
        this.skillName = _skillName;
        this.skillSpawnPosition = _skillSpawnPosition;
        this.skillSpawnRotation = _skillSpawnRotation;
        this.roomID            = _roomID;
    } 
}
export default N_SkillData;