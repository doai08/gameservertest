import enemyListen    from '../Listen/Enemy.listen';
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
   
}

export default new EnemyController;