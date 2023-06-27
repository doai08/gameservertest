import PlayerData                   from '../models/player-model';
import EnemyData                    from '../models/enemy-model';
import GemData                      from '../models/gem-model';
import TowerData                    from '../models/tower-model';
import BossData                     from '../models/boss-model';
import SkillData                    from '../models/skill-model';
import DroneData                    from '../models/drone-model';
import ItemInMapData                from '../models/item-in-map-model';
import PlayerBulletData             from '../models/player-bullet-model';
import CursorTowerData              from '../models/cursor-tower-model';
import {EmitConst,EmitBroadConst}   from '../../utils/const';

class PlayerEmit{
    public YouConnected_Emit = (socket,playerData:PlayerData)=>{
        socket.emit(EmitConst.YOU_CONNECTED,playerData);
    } 
    public AnotherConnected_BroadCast_Emit = (socket,playerData:PlayerData) =>{
        socket.broadcast.emit(EmitBroadConst.ANOTHER_PLAYER_CONNECTED, playerData);
    }
    public GameStart_Emit = (socket, playerData: PlayerData)=>{
        socket.emit(EmitConst.GAME_START,playerData);
        socket.to(playerData.roomID).emit(EmitBroadConst.GAME_START,playerData);
    }
    public BattleStart_Emit = (socket,playerData: PlayerData) =>{
        socket.emit(EmitConst.BATTLE_START,playerData);    
    }
    public BattleStart_BroadCast_Emit = (socket,playerData: PlayerData) =>{
        socket.to(playerData.roomID).emit(EmitConst.BATTLE_START,playerData); 
    }
    public AnotherMoved_BroadCast_Emit = (socket,playerData:PlayerData) =>{
        socket.to(playerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_MOVED,playerData);
    }
    public AnotherRotated_BroadCast_Emit = (socket,playerData:PlayerData) =>{
        socket.to(playerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_ROTATED,playerData);
    }
    public AnotherMoveRotated_BroadCast_Emit = (socket,playerData:PlayerData) =>{
        socket.to(playerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_MOVE_ROTATED,playerData);
        const now = new Date();
        console.log("Server gửi đi:" + now.getMinutes() +";"+ now.getSeconds() +";" +now.getMilliseconds());
    }
    public YouRequestedSpawnEnemy_Emit = (socket,playerData: PlayerData) =>{
        socket.emit(EmitConst.YOU_REQUESTED_SPAWN_ENEMY,playerData);
        socket.to(playerData.roomID).emit(EmitConst.YOU_REQUESTED_SPAWN_ENEMY,playerData);
    }
    public AnotherSpawnedEnemy_BroadCast_Emit = (socket,enemyData:EnemyData) =>{
        socket.to(enemyData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_ENEMY,enemyData);
    }
    public AnotherSpawnedGem_BroadCast_Emit = (socket,gemData:GemData) =>{
        socket.to(gemData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_GEM,gemData);
    }
    public AnotherSpawnedDrone_BroadCast_Emit = (socket,droneData:DroneData) =>{
        socket.emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_DRONE,droneData);
    }
    
    public AnotherSpawnedTower_BroadCast_Emit = (socket,towerData:TowerData) =>{
        socket.to(towerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_TOWER,towerData);
    }
    public AnotherSpawnedItemMap_BroadCast_Emit = (socket,itemMapData:ItemInMapData) =>{
        socket.to(itemMapData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_ITEM_MAP,itemMapData);
    }
    public AnotherSpawnedBoss_BroadCast_Emit = (socket,bossData:BossData) =>{
        socket.to(bossData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_BOSS,bossData);
    }
    public AnotherSpawnedSkill_BroadCast_Emit = (socket,skillData:SkillData) =>{
        socket.to(skillData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_SKILL,skillData);
    }
    public AnotherSpawnedBullet_BroadCast_Emit = (socket,playerBulletData:PlayerBulletData) =>{
        socket.to(playerBulletData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_BULLET,playerBulletData);
    }
    public AnotherUpdatedHP_BroadCast_Emit = (socket,playerData:PlayerData) =>{
        socket.to(playerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_UPDATED_HP,playerData);
    }
    public AnotherRotateCursorTower_BroadCast_Emit = (socket, cursorTowerData: CursorTowerData) =>{
        socket.to(cursorTowerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_ROTATED_CURSOR_TOWER,cursorTowerData);
    }
}
export default new PlayerEmit;