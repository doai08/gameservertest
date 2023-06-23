import {ListenConst, ColorLoggerConst,MessageConst}         from '../../utils/const';
import loggerUtil                                           from '../../utils/logger';
import EnemyData                                            from '../models/enemy-model';
import GunTowerData                                         from '../models/gun-tower-model';
import enemyEmit                                            from '../emits/enemy-emit';
import TowerData from 'server/models/tower-model';
import ItemInMapData from 'server/models/item-in-map-model';
class EnemyListen{ 
    EnemyMoveAndRotate_Listen = (socket) =>{
        socket.on(ListenConst.ENEMY_MOVE_AND_ROTATE,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.MONSTER_MOVE_AND_ROTATE, data);
            var enemyData: EnemyData = {
                enemyID: data.enemyID,
                enemyName: data.enemyName,
                def: data.def,
                maxHP: data.maxHP,
                enemySpawnPosition: data.enemySpawnPosition,
                enemySpawnRotation: data.enemySpawnRotation,
                roomID: data.roomID
            }
            enemyEmit.EnemyMovedAndRotated_BroadCast_Emit(socket,enemyData);
        })
    }
   
    EnemyDie_Listen = (socket) =>{
        socket.on(ListenConst.ENEMY_DIE,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.RED,MessageConst.MONSTER_DIE, data);
            var enemyData: EnemyData = {
                enemyID: data.enemyID,
                enemyName: data.enemyName,
                def: data.def,
                maxHP: data.maxHP,
                enemySpawnPosition: data.enemySpawnPosition,
                enemySpawnRotation: data.enemySpawnRotation,
                roomID: data.roomID
            }
            enemyEmit.EnemyDie_BroadCast_Emit(socket,enemyData);
        })
    }
    GunTower_Rotate_Listen = (socket) =>{
        socket.on(ListenConst.GUN_TOWER_ROTATE,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.RED,MessageConst.GUN_TOWER_ROTATE, data);
            var gunTowerData: GunTowerData = {
                towerID: data.towerID,
                eulerAngle: data.eulerAngle,
                roomID: data.roomID
            }
            enemyEmit.GunTowerRotate_BroadCast_Emit(socket,gunTowerData);
        })
    }
    TowerDestroy_Listen = (socket) =>{
        socket.on(ListenConst.TOWER_DESTROY,(data)=>{
            //loggerUtil.LoggerDetail(ColorLoggerConst.RED,MessageConst.TOWER_DESTROY, data);
            var towerData: TowerData = {
                towerID: data.towerID,
                towerName: data.towerName,
                towerSpawnPosition: data.towerSpawnPosition,
                towerSpawnRotation: data.towerSpawnRotation,
                towerRange: data.towerRange,
                roomID: data.roomID
            }
            enemyEmit.TowerDestroy_BroadCast_Emit(socket,towerData);
        })
    }
    ItemInMapDestroy_Listen = (socket) =>{
        socket.on(ListenConst.ITEM_IN_MAP_DESTROY,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.RED,MessageConst.ITEM_IN_MAP_DESTROY, data);
            var itemInMapData: ItemInMapData = {
                itemInMapID: data.itemInMapID,
                itemInMapName: data.itemInMapName,
                itemInMapSpawnPosition: data.itemInMapSpawnPosition,
                itemInMapSpawnRotation: data.itemInMapSpawnRotation,
                itemInMapRange: data.itemInMapRange,
                timeExistence: data.timeExistence,
                amountEffect: data.amountEffect,
                roomID: data.roomID,
            }
            enemyEmit.ItemInMapDestroy_BroadCast_Emit(socket,itemInMapData);
        })
    }

}

export default new EnemyListen;