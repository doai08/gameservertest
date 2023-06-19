import EnemyData                    from '../Model/Enemy.model';
import {EmitConst,EmitBroadConst}   from '../Common/Const';

class EnemyEmit{
    public EnemyMovedAndRotated_BroadCast_Emit = (socket,enemyData:EnemyData) =>{
        socket.to(enemyData.roomID).emit(EmitBroadConst.ENEMY_MOVED_AND_ROTATED,enemyData);
    }
    public EnemyDie_BroadCast_Emit = (socket,enemyData: EnemyData) =>{
        socket.to(enemyData.roomID).emit(EmitBroadConst.ENEMY_DIED,enemyData);
    }
}
export default new EnemyEmit;