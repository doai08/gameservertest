import {ListenConst, ColorLoggerConst,MessageConst}        from '../Common/Const';
import loggerUtil  from '../Utils/Logger.utils';
import EnemyData                    from '../Model/Enemy.model';
import enemyEmit           from '../Emit/Enemy.emit';
class EnemyListen{ 
    EnemyMoveAndRotate_Listen = (socket) =>{
        socket.on(ListenConst.ENEMY_MOVE_AND_ROTATE,(data)=>{
            loggerUtil.LoggerDetail(ColorLoggerConst.GREEN,MessageConst.MONSTER_MOVE_AND_ROTATE, data);
            var enemyData: EnemyData = {
                enemyID: data.enemyID,
                enemyName: data.enemyName,
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
                enemySpawnPosition: data.enemySpawnPosition,
                enemySpawnRotation: data.enemySpawnRotation,
                roomID: data.roomID
            }
            enemyEmit.EnemyDie_BroadCast_Emit(socket,enemyData);
        })
    }

}

export default new EnemyListen;