import PositionData from './position-model';
import RotationData from './rotation-model';
class ItemInMapData{
    public itemInMapID: number;
    public itemInMapName: string;
    public itemInMapSpawnPosition: PositionData;
    public itemInMapSpawnRotation: RotationData;
    public itemInMapRange: number;
    public timeExistence: number;
    public amountEffect: number;
    public roomID: number;
    constructor( _itemInMapID: number, _itemInMapName:string,_itemInMapSpawnPosition:PositionData,_itemInMapSpawnRotation: RotationData,_itemInMapRange:number,_timeExistence: number, _amountEffect: number, _roomID:number){
        this.itemInMapID = _itemInMapID;
        this.itemInMapName = _itemInMapName;
        this.itemInMapSpawnPosition = _itemInMapSpawnPosition;
        this.itemInMapSpawnRotation = _itemInMapSpawnRotation;
        this.itemInMapRange = _itemInMapRange;
        this.timeExistence = _timeExistence;    
        this.amountEffect = _amountEffect;
        this.roomID             = _roomID;
    } 
}
export default ItemInMapData;