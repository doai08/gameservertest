import * as Express     from 'express';     //framework hỗ trợ API    
import * as SocketIO    from 'socket.io';       
import * as http        from 'http';    
import * as dotenv      from 'dotenv';      //Enviroment
import * as BodyParser  from 'body-parser'; //BodyJson
import playerController from './server/controllers/player-controller';
import enemyController  from './server/controllers/enemy-controller';
import {ListenConst}    from './utils/const';
//import mongoConn             from '../DATABASE_MONGO_MANAGER/Config/Connect.config';
//import battleMongoDatabaseController from '../DATABASE_MONGO_MANAGER/DataBaseController/Battle.database_controller';

//import sequelizeConnection        from '../DATABASE_MYSQL_MANAGER/Config/Connect.config';
//import battleMysqlDatabaseController from '../DATABASE_MYSQL_MANAGER/DataBaseController/Battle.database_controller';

class GameServer{
    private _PORT : number;
    private _httpServer :http.Server;
    private _io: SocketIO;

    constructor(){
        dotenv.config();
        this._PORT = Number(process.env.PORT);
        this._httpServer = http.createServer().listen(this._PORT,()=>{
            console.log(`server is listening at port ${(this._PORT)}`);
        });
        this._io = new SocketIO(this._httpServer);
        this.SocketConnect();
    }
    //CONNECTION - SERVER HANDLING
    private SocketConnect = () =>{  //Mở kết nối socketio
        
        this._io.on(ListenConst.SERVER_CONNECT,(socket) =>{
            console.log("CONNECTION");
            //== REAL_TIME_PLAYER_CONTROLLER
            playerController.socket = socket;
            playerController.YouConnect_Listen_Controller();
            playerController.YouEnterBattle_Listen_Controller();
            playerController.YouMove_Listen_Controller();
            playerController.YouRotate_Listen_Controller();
            playerController.YouSpawnEnemy_Listen_Controller();
            playerController.YouSpawnGem_Listen_Controller();
            playerController.YouSpawnTower_Listen_Controller();
            playerController.YouSpawnBoss_Listen_Controller();
            playerController.YouSpawnSkill_Listen_Controller();    
            playerController.YouSpawnItemMap_Listen_Controller();
            //== REAL_TIME_ENEMY_CONTROLLER
            enemyController.socket = socket;       
            enemyController.EnemyDie_Listen_Controller();
            enemyController.TowerDestroy_Listen_Controller();
            enemyController.ItemInMapDestroy_Listen_Controller();
            playerController.YouMoveAndRotate_Listen_Controller(); 
            //OFFLOAD FOR SERVER:
            //playerController.YouSpawnBullet_Listen_Controller(); //x
            //playerController.YouRotateCursorTower_Controller(); //x
            //playerController.YouSpawnDrone_Listen_Controller(); //x
            //playerController.YouUpdateHP_Listen_Controller(); //x
            //enemyController.EnemyMoveAndRotate_Listen_Controller(); //x
            //enemyController.GunTower_Rotate_Listen_Controller(); //x
        })    
    }
}
export default new GameServer();
