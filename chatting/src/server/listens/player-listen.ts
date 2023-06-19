import {ListenConst, ColorLoggerConst, MessageConst}         from '../Common/Const';
import roomController                          from '../Controller/Room.controller';
import PositionData                            from '../Model/Position.model';
import PlayerData                              from '../Model/Player.model';
import EnemyData                               from '../Model/Enemy.model';
import GemData                                 from '../Model/Gem.model';
import TowerData                               from '../Model/Tower.model';
import BossData                                from '../Model/Boss.model';
import SkillData                               from '../Model/Skill.model';
import PlayerBulletData                        from '../Model/PlayerBullet.model';
import playerEmit                              from '../Emit/Player.emit';
import RotationData                            from '../Model/Rotation.model';
import loggerUtil                              from '../Utils/Logger.utils';

class PlayerListen{
    YouConnect_Listen = (socket) =>{
        socket.on(ListenConst.YOU_CONNECT,(data)=>{   
            loggerUtil.LoggerDetail(ColorLoggerConst.BLUE,MessageConst.PLAYER_CONNECT,data);
            let _playerSpawnPosition:PositionData = new PositionData(0,0,0);
            let _playerSpawnRotation: RotationData = new RotationData(0,0,0);
            let playerData: PlayerData = new PlayerData(
                data.playerName,
                _playerSpawnPosition,
                _playerSpawnRotation,
                data.roomID,
                data.playerHP
            );
            playerEmit.YouConnected_Emit(socket,playerData);
            playerEmit.AnotherConnected_BroadCast_Emit(socket,playerData);  
            
            roomController.CheckEmptyRoom(socket,playerData);
        });
    }
    YouEnterBattle_Listen = (socket) =>{                                   
        socket.on(ListenConst.YOU_ENTER_BATTLE,(data)=>{   //Player enter battle, nếu tất cả sẵn sàng, battle start    
            loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.PLAYER_ENTER_BATTLE,data);
            var countEnteredPlayerOfRoom = 0;
            let _playerSpawnPosition:PositionData = new PositionData( 
                data.playerSpawnPosition.x,
                data.playerSpawnPosition.y,
                data.playerSpawnPosition.z,
            );
            let _playerSpawnRotation: RotationData = new RotationData(
                data.playerSpawnRotation.x,
                data.playerSpawnRotation.y,
                data.playerSpawnRotation.z,
            );
            let playerData: PlayerData = new PlayerData(
                data.playerName,
                _playerSpawnPosition,
                _playerSpawnRotation,
                data.roomID,
                data.playerHP
            );

            roomController.enteredBattlePlayers.push(playerData);        
            roomController.enteredBattlePlayers.forEach(player =>{
                if(player.roomID == data.roomID){
                    countEnteredPlayerOfRoom++;
                }
                if(countEnteredPlayerOfRoom==roomController.maxPlayerInRoom){
                    roomController.runningRooms.forEach(runningRoom => {
                        if(runningRoom.roomID == data.roomID){
                            runningRoom.players.forEach(player =>{
                                playerEmit.BattleStart_Emit(socket, player); 
                                playerEmit.BattleStart_BroadCast_Emit(socket,player); 
                            });
                            loggerUtil.LoggerDetail(ColorLoggerConst.CYAN,MessageConst.SERVER_PLAYER,runningRoom.players[0].playerName);
                            playerEmit.YouRequestedSpawnEnemy_Emit(socket,runningRoom.players[0]); // Trả về người chơi sẽ được chọn spawn quái 
                        }
                    });   
                }
            });
        });
    }
    YouMove_Listen = (socket) =>{
        socket.on(ListenConst.YOU_MOVE,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.PLAYER_MOVE,data);
            var playerData: PlayerData = {
                playerName: data.playerName,
                playerSpawnPosition: data.playerSpawnPosition,
                playerSpawnRotation: data.playerSpawnRotation,
                roomID: data.roomID,
                playerHP: data.playerHP
            }
            playerEmit.AnotherMoved_BroadCast_Emit(socket,playerData);
        })
    }
    YouRotate_Listen = (socket) =>{
        socket.on(ListenConst.YOU_ROTATE,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.PLAYER_ROTATE,data);
            var playerData: PlayerData = {
                playerName: data.playerName,
                playerSpawnPosition: data.playerSpawnPosition,
                playerSpawnRotation: data.playerSpawnRotation,
                roomID: data.roomID,
                playerHP: data.playerHP
            }
            playerEmit.AnotherRotated_BroadCast_Emit(socket,playerData);
        })
    }

    YouSpawnEnemy_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_ENEMY,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.MONSTER_SPAWN,data);
            var enemyData: EnemyData = {
                enemyID: data.enemyID,
                enemyName: data.enemyName,
                enemySpawnPosition: data.enemySpawnPosition,
                enemySpawnRotation: data.enemySpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedEnemy_BroadCast_Emit(socket,enemyData);
        })
    }
    YouSpawnGem_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_GEM,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.GEM_SPAWN,data);
            var gemData: GemData = {
                gemName: data.gemName,
                gemSpawnPosition: data.gemSpawnPosition,
                gemSpawnRotation: data.gemSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedGem_BroadCast_Emit(socket,gemData);
        })
    }
    YouSpawnTower_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_TOWER,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.TOWER_SPAWN,data);
            var towerData: TowerData = {
                towerName: data.towerName,
                towerSpawnPosition: data.towerSpawnPosition,
                towerSpawnRotation: data.towerSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedTower_BroadCast_Emit(socket,towerData);
        })
    }
    YouSpawnBoss_Listen = (socket) =>{
        socket.on(ListenConst.YOU_SPAWN_BOSS,(data)=>{
            // loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.BOSS_SPAWN,data);
            var bossData: BossData = {
                bossName: data.bossName,
                bossSpawnPosition: data.bossSpawnPosition,
                bossSpawnRotation: data.bossSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedBoss_BroadCast_Emit(socket,bossData);
        })
    }
    YouSpawnSkill_Listen = (socket) =>{
        socket.on(ListenConst.YOU_SPAWN_SKILL,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.SKILL_SPAWN,data);
            var skillData: SkillData = {
                skillName: data.skillName,
                skillSpawnPosition: data.skillSpawnPosition,
                skillSpawnRotation: data.skillSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedSkill_BroadCast_Emit(socket,skillData);
        })
    }
    YouSpawnBullet_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_BULLET,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.RED,MessageConst.PLAYER_BULLET_SPAWN,data);
            var playerBulletData: PlayerBulletData = {
                playerBulletName: data.bulletName,
                playerBulletSpawnPosition: data.bulletSpawnPosition,
                playerBulletSpawnRotation: data.bulletSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedBullet_BroadCast_Emit(socket,playerBulletData);
        })
    }

    YouUpdateHP_Listen = (socket) =>{
        socket.on(ListenConst.YOU_UPDATE_HP,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.UPDATE_HP,data);
            var playerData: PlayerData = {
                playerName: data.playerName,
                playerSpawnPosition: data.playerSpawnPosition,
                playerSpawnRotation: data.playerSpawnRotation,
                roomID: data.roomID,
                playerHP: data.playerHP
            }
            playerEmit.AnotherUpdatedHP_BroadCast_Emit(socket,playerData);
        });
    }
}

export default new PlayerListen;