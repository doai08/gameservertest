
import EnemyData from './Enemy.model';
class EnemyDetailData{
    public playerName: string;
    public enemyClosestData: EnemyData;
    constructor(_playerName:string,_enemyClosestData){
        this.playerName = _playerName,
        this.enemyClosestData = _enemyClosestData
    }
}
export default EnemyDetailData;