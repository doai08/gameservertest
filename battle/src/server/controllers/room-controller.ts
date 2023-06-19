import PlayerData       from '../models/player-model';
import RoomData         from '../models/room-model';
import * as SocketIO    from 'socket.io';
import playerEmit       from '../emits/player-emit';
import playerController from './player-controller';
import randomUtil       from '../../utils/random';

class RoomController{
    private tempRooms: RoomData[]       = []; 
    public maxPlayerInRoom: number      =  2;
    public runningRooms: RoomData[]     = [];
    public enteredBattlePlayers: PlayerData[] = []; 

    CheckEmptyRoom = (socket: SocketIO,playerData: PlayerData) =>{
        if(this.tempRooms.length == 0){//Nếu không có phòng nào cần ghép, thì tạo phòng mới
            var roomID = randomUtil.GetRandomBetween(1,9999);
            this.JoinRoom(socket,roomID);
            playerData.roomID = roomID;
            var tempRoom: RoomData = new RoomData(
                roomID,
                playerData
            );
            this.tempRooms.push(tempRoom);
        }else if(this.tempRooms.length > 0){//Nếu có phòng đang cần ghép và có slot
            this.tempRooms.forEach(tempRoom =>{
                if(tempRoom.players.length>= 0 && tempRoom.players.length < this.maxPlayerInRoom){
                    playerData.roomID = tempRoom.roomID;
                    this.JoinRoom(socket,tempRoom.roomID);
                    tempRoom.players.push(playerData);
                    if(tempRoom.players.length == this.maxPlayerInRoom){
                        playerEmit.GameStart_Emit(socket,playerData);
                        this.runningRooms.push(tempRoom);
                        this.tempRooms.splice(this.tempRooms.length-1);                 
                    }
                }
            });
        }
    }
    JoinRoom(socket: SocketIO,roomID: number){
        socket.join(roomID,()=>{
            console.log("Room:"+ roomID);
        });
    }
    
}

export default new RoomController;