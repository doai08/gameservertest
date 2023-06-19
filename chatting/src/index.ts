import * as Express     from 'express';     //framework hỗ trợ API    
import * as SocketIO    from 'socket.io';       
import * as http        from 'http';    
import * as dotenv      from 'dotenv';      //Enviroment
import * as BodyParser  from 'body-parser'; //BodyJson
import playerController from '../REALTIME_MANAGER/Controller/Player.controller';
import enemyController  from '../REALTIME_MANAGER/Controller/Enemy.controller';
import {ListenConst}    from '../REALTIME_MANAGER/Common/Const';
//import mongoConn             from '../DATABASE_MONGO_MANAGER/Config/Connect.config';
//import battleMongoDatabaseController from '../DATABASE_MONGO_MANAGER/DataBaseController/Battle.database_controller';

import sequelizeConnection        from '../DATABASE_MYSQL_MANAGER/Config/Connect.config';
import battleMysqlDatabaseController from '../DATABASE_MYSQL_MANAGER/DataBaseController/Battle.database_controller';

class GameServer{
    private _PORT : number;
    private _app: Express.Application;
    private _httpServer :http.Server;
    private _io;

    constructor(){
        dotenv.config();
        this._PORT = Number(process.env.PORT);
        this._app = Express();
        this._httpServer = http.createServer(this._app);
        this._io = new SocketIO(this._httpServer);
        this.SocketConnect();
        this.Config(this._app);
        this.ServerListening(this._PORT);   
        // this.ConnectDB();
    }

    private Config = (app:Express.Application): void => {  //Cấu hình cho app đọc json body
        app.use(BodyParser.urlencoded({extended:false}));
        app.use(BodyParser.json());
        app.use(Express.json());
    }
    private ServerListening = (port) =>{ //Server lắng nghe ở cổng
        this._httpServer.listen(port,()=>{
            console.log(`server is listening at port ${(port)}`);
        })
    }
    private ConnectDB(){
        this.Mysql_SequelizeConnectDB() //kết nối đến database (mysql)
        // mongoConn.Connect();//Kết nối đến Database (MongoDB)    
    }

    private Mysql_SequelizeConnectDB(){
        sequelizeConnection.authenticate().then(() => {
            console.log('Connection has been established successfully.');
        }).catch((error) => {
            console.error('Unable to connect to the database: ', error);
        });
    }

    //CONNECTION - SERVER HANDLING
    private SocketConnect = () =>{  //Mở kết nối socketio
        this._io.on(ListenConst.SERVER_CONNECT,(socket) =>{
            //== REAL_TIME_PLAYER_CONTROLLER
            playerController.socket = socket;
            playerController.YouConnect_Listen_Controller();
            playerController.YouEnterBattle_Listen_Controller();
            playerController.YouMove_Listen_Controller();
            playerController.YouRotate_Listen_Controller();
            playerController.YouSpawnEnemy_Listen_Controller();
            playerController.YouSpawnGem_Listen_Controller();    
            playerController.YouUpdateHP_Listen_Controller();
            // playerController.YouSpawnTower_Listen_Controller();
            playerController.YouSpawnBoss_Listen_Controller();
            // playerController.YouSpawnSkill_Listen_Controller();
            playerController.YouSpawnBullet_Listen_Controller();
            //== REAL_TIME_ENEMY_CONTROLLER
            enemyController.socket = socket;
            enemyController.EnemyMoveAndRotate_Listen_Controller();
            enemyController.EnemyDie_Listen_Controller();
            //== DATA_BASE_CONTROLLER
            //Mongodb
            // battleDatabaseController.socket = socket;
            //battleMongoDatabaseController.DataBase_AddBattleReport_Listen_Controller();
            //Mysql
            // battleMysqlDatabaseController.socket = socket;
            // battleMysqlDatabaseController.DataBase_AddBattleReport_Listen_Controller();
        })    
    }
}
export default new GameServer();

// 1.Player Find other player and monster [Shoot]
// 2.Enemy find closest player [Moving]
// 3.Enemy move in map [Sync]
// Enemy Shoot closest player
// 3.Player Bullet multiple player sync
// 4. Skill spawn sync
// 5. hang tower spawn
// 6. Drone spawn sync
// 7.Drone shoot
// 8.Spawn item map [Trap]
