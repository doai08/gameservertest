import EnemyData                    from '../models/enemy-model';
import GunTowerData                 from '../models/gun-tower-model';
import TowerData                 from '../models/tower-model';
import {EmitConst,EmitBroadConst}   from '../../utils/const';

class EnemyEmit{
    public EnemyMovedAndRotated_BroadCast_Emit = (socket,enemyData:EnemyData) =>{
        socket.to(enemyData.roomID).emit(EmitBroadConst.ENEMY_MOVED_AND_ROTATED,enemyData);
    }
    public EnemyDie_BroadCast_Emit = (socket,enemyData: EnemyData) =>{
        socket.to(enemyData.roomID).emit(EmitBroadConst.ENEMY_DIED,enemyData);
    }
    public GunTowerRotate_BroadCast_Emit = (socket, gunTowerData: GunTowerData) =>{
        socket.to(gunTowerData.roomID).emit(EmitBroadConst.GUN_TOWER_ROTATED,gunTowerData);
    }
    public TowerDestroy_BroadCast_Emit = (socket, towerData: TowerData) =>{
        socket.to(towerData.roomID).emit(EmitBroadConst.TOWER_DESTROYED,towerData);
    }
}
export default new EnemyEmit;