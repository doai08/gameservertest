import playerListen    from '../listens/player-listen';
import * as SocketIO   from 'socket.io';
class PlayerController{

    public socket: SocketIO;
    constructor(){
        
    }
    YouConnect_Listen_Controller(){
        playerListen.YouConnect_Listen(this.socket);
    }
   
    YouEnterBattle_Listen_Controller(){
        playerListen.YouEnterBattle_Listen(this.socket);
    }
    YouMove_Listen_Controller(){
        playerListen.YouMove_Listen(this.socket);
        
    }
    YouRotate_Listen_Controller(){
        playerListen.YouRotate_Listen(this.socket);
    }
    YouMoveAndRotate_Listen_Controller(){
        playerListen.YouMoveRotate_Listen(this.socket);
    }
    
    YouSpawnEnemy_Listen_Controller(){
        playerListen.YouSpawnEnemy_Listen(this.socket);
    }
    YouSpawnGem_Listen_Controller(){
        playerListen.YouSpawnGem_Listen(this.socket);
    }
    YouSpawnDrone_Listen_Controller(){
        playerListen.YouSpawnDrone_Listen(this.socket);
    }
    YouSpawnTower_Listen_Controller(){
        playerListen.YouSpawnTower_Listen(this.socket);
    }
    YouSpawnBoss_Listen_Controller(){
        playerListen.YouSpawnBoss_Listen(this.socket);
    }
    YouSpawnSkill_Listen_Controller(){
        playerListen.YouSpawnSkill_Listen(this.socket);
    }
    YouSpawnBullet_Listen_Controller(){
        playerListen.YouSpawnBullet_Listen(this.socket);
    }
    YouSpawnItemMap_Listen_Controller(){
        playerListen.YouSpawnItemMap_Listen(this.socket);
    }
    YouUpdateHP_Listen_Controller(){
        playerListen.YouUpdateHP_Listen(this.socket);
    }
    YouRotateCursorTower_Controller(){
        playerListen.YouRotateCursorTower_Listen(this.socket);
    }

}

export default new PlayerController;