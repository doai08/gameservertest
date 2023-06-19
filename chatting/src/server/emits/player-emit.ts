import PlayerData                   from '../Model/Player.model';
import EnemyData                    from '../Model/Enemy.model';
import GemData                      from '../Model/Gem.model';
import TowerData                    from '../Model/Tower.model';
import BossData                     from '../Model/Boss.model';
import SkillData                    from '../Model/Skill.model';
import PlayerBulletData             from '../Model/PlayerBullet.model';
import {EmitConst,EmitBroadConst}   from '../Common/Const';

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
    public AnotherSpawnedTower_BroadCast_Emit = (socket,towerData:TowerData) =>{
        socket.to(towerData.roomID).emit(EmitBroadConst.ANOTHER_PLAYER_SPAWNED_TOWER,towerData);
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
}
export default new PlayerEmit;