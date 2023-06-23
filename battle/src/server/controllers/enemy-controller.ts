import enemyListen    from '../listens/enemy-listen';
import * as SocketIO   from 'socket.io';
class EnemyController{

    public socket: SocketIO;
    constructor(){
        
    }
    EnemyMoveAndRotate_Listen_Controller(){
        enemyListen.EnemyMoveAndRotate_Listen(this.socket);  
    }
    EnemyDie_Listen_Controller(){
        enemyListen.EnemyDie_Listen(this.socket);
    }
    GunTower_Rotate_Listen_Controller(){
        enemyListen.GunTower_Rotate_Listen(this.socket);
    }
    TowerDestroy_Listen_Controller(){
        enemyListen.TowerDestroy_Listen(this.socket);
    }
    ItemInMapDestroy_Listen_Controller(){
        enemyListen.ItemInMapDestroy_Listen(this.socket);
    }
}

export default new EnemyController;