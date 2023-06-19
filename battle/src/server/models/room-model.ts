import PlayerData from "./player-model";
class RoomData{
    public roomID: number;
    public players: PlayerData[] = [];
    constructor(_roomID: number,_players: PlayerData){
        this.roomID  = _roomID;
        this.players.push(_players);
    } 
}
export default RoomData;