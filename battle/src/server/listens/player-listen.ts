import {ListenConst, ColorLoggerConst, MessageConst}            from '../../utils/const';
import roomController                                           from '../controllers/room-controller';
import PositionData                                             from '../models/position-model';
import PlayerData                                               from '../models/player-model';
import EnemyData                                                from '../models/enemy-model';
import GemData                                                  from '../models/gem-model';
import TowerData                                                from '../models/tower-model';
import BossData                                                 from '../models/boss-model';
import SkillData                                                from '../models/skill-model';
import DroneData                                                from '../models/drone-model';
import ItemInMapData                                            from '../models/item-in-map-model';
import PlayerBulletData                                         from '../models/player-bullet-model';
import CursorTowerData                                          from '../models/cursor-tower-model';
import playerEmit                                               from '../emits/player-emit';
import RotationData                                             from '../models/rotation-model';
import loggerUtil                                               from '../../utils/logger';

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
            loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.PLAYER_MOVE,data);
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
    YouMoveRotate_Listen = (socket) =>{
        socket.on(ListenConst.YOU_MOVE_ROTATE,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.PLAYER_MOVE_ROTATE,data);
            var playerData: PlayerData = {
                playerName: data.playerName,
                playerSpawnPosition: data.playerSpawnPosition,
                playerSpawnRotation: data.playerSpawnRotation,
                roomID: data.roomID,
                playerHP: data.playerHP
            }
            playerEmit.AnotherMoveRotated_BroadCast_Emit(socket,playerData);
        })
    }

    YouSpawnEnemy_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_ENEMY,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.MONSTER_SPAWN,data);
            var enemyData: EnemyData = {
                enemyID: data.enemyID,
                enemyName: data.enemyName,
                def: data.def,
                maxHP: data.maxHP,
                enemySpawnPosition: data.enemySpawnPosition,
                enemySpawnRotation: data.enemySpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedEnemy_BroadCast_Emit(socket,enemyData);
        })
    }
    YouSpawnGem_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_GEM,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.GEM_SPAWN,data);
            var gemData: GemData = {
                gemName: data.gemName,
                gemSpawnPosition: data.gemSpawnPosition,
                gemSpawnRotation: data.gemSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedGem_BroadCast_Emit(socket,gemData);
        })
    }
    YouSpawnDrone_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_DRONE,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.DRONE_SPAWN,data);
            var droneData: DroneData = {
                playerName: data.playerName,
                droneName: data.droneName,
                droneIndex: data.droneIndex,
                droneSpawnPosition: data.droneSpawnPosition,
                droneSpawnRotation: data.droneSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedDrone_BroadCast_Emit(socket,droneData);
        })
    }
    
    YouSpawnTower_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_TOWER,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.TOWER_SPAWN,data);
            var towerData: TowerData = {
                towerID: data.towerID,
                towerName: data.towerName,
                towerSpawnPosition: data.towerSpawnPosition,
                towerSpawnRotation: data.towerSpawnRotation,
                towerRange: data.towerRange,
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
            loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.SKILL_SPAWN,data);
            var skillData: SkillData = {
                playerName: data.playerName,
                skillName: data.skillName,
                timeExistence: data.timeExistence,
                countDownBurn: data.countDownBurn,
                countDown: data.countDown,
                skillRange: data.skillRange,
                quantity: data.quantity,
                atkSpeed: data.atkSpeed,
                skillSpawnPosition: data.skillSpawnPosition,
                skillSpawnRotation: data.skillSpawnRotation,
                roomID: data.roomID
            }
            playerEmit.AnotherSpawnedSkill_BroadCast_Emit(socket,skillData);
        })
    }
    YouSpawnBullet_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_BULLET,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.RED,MessageConst.PLAYER_BULLET_SPAWN,data);
            var playerBulletData: PlayerBulletData = {
                playerName: data.playerName,
                playerBulletName : data.playerBulletName,
                atk : data.atk,
                toe : data.toe,
                fromPosition : data.fromPosition,
                targetPosition : data.targetPosition,
                force : data.force,
                roomID : data.roomID
            }
            playerEmit.AnotherSpawnedBullet_BroadCast_Emit(socket,playerBulletData);
        })
    }
    YouSpawnItemMap_Listen = (socket) => {
        socket.on(ListenConst.YOU_SPAWN_ITEM_MAP,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.CYAN,MessageConst.ITEM_MAP_SPAWN,data);
            var itemMapData: ItemInMapData = {
                itemInMapName: data.itemInMapName,
                itemInMapSpawnPosition: data.itemInMapSpawnPosition,
                itemInMapSpawnRotation: data.itemInMapSpawnRotation,
                itemInMapRange: data.itemInMapRange,
                timeExistence: data.timeExistence,
                amountEffect: data.amountEffect,
                roomID: data.roomID,
            }
            playerEmit.AnotherSpawnedItemMap_BroadCast_Emit(socket,itemMapData);
        })
    }

    YouUpdateHP_Listen = (socket) =>{
        socket.on(ListenConst.YOU_UPDATE_HP,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.YELLOW,MessageConst.UPDATE_HP,data);
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
    YouRotateCursorTower_Listen = (socket) =>{
        socket.on(ListenConst.YOU_ROTATE_CURSOR_TOWER,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.CYAN,MessageConst.CURSOR_TOWER_ROTATE,data);
            var cusorTowerData: CursorTowerData = {
                playerName: data.playerName,
                newDirection: data.newDirection,
                roomID: data.roomID
            }
            playerEmit.AnotherRotateCursorTower_BroadCast_Emit(socket,cusorTowerData);
        });
    }
}

export default new PlayerListen;