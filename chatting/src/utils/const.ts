class EmitConst{
    public static YOU_CONNECTED: string                         = "YOU_CONNECTED";
    public static GAME_START: string                            = "GAME_START";
    public static BATTLE_START: string                          = "BATTLE_START";
    public static YOU_REQUESTED_SPAWN_ENEMY: string             = "YOU_REQUESTED_SPAWN_ENEMY";
    public static ENEMY_SPAWN: string                           = "ENEMY_SPAWN";
    public static PLAYER_SPAWN: string                          = "PLAYER_SPAWN";
}
class EmitBroadConst{
    public static GAME_START: string                            = "GAME_START";
    public static BATTLE_START:string                           = "BATTLE_START";
    public static ANOTHER_PLAYER_CONNECTED: string              = "ANOTHER_PLAYER_CONNECTED";
    public static ANOTHER_PLAYER_MOVED: string                  = "ANOTHER_PLAYER_MOVED";
    public static ANOTHER_PLAYER_ROTATED: string                = "ANOTHER_PLAYER_ROTATED";
    public static ANOTHER_PLAYER_SPAWNED_ENEMY: string          = "ANOTHER_PLAYER_SPAWNED_ENEMY";
    public static ANOTHER_PLAYER_SPAWNED_GEM: string            = "ANOTHER_PLAYER_SPAWNED_GEM";
    public static ANOTHER_PLAYER_SPAWNED_TOWER: string          = "ANOTHER_PLAYER_SPAWNED_TOWER";
    public static ANOTHER_PLAYER_SPAWNED_BOSS: string           = "ANOTHER_PLAYER_SPAWNED_BOSS";
    public static ANOTHER_PLAYER_SPAWNED_SKILL: string          = "ANOTHER_PLAYER_SPAWNED_SKILL";
    public static ANOTHER_PLAYER_SPAWNED_BULLET: string         = "ANOTHER_PLAYER_SPAWNED_BULLET";
    
    public static ENEMY_MOVED_AND_ROTATED: string               = "ENEMY_MOVED_AND_ROTATED";
    public static ENEMY_DIED: string                            = "ENEMY_DIED";
    

    public static ANOTHER_PLAYER_UPDATED_HP: string             = "ANOTHER_PLAYER_UPDATED_HP";
}
class ListenConst{
    public static SERVER_CONNECT:string                         = "connection";
    public static SERVER_DISCONNECT: string                     = "disconnect";
    public static YOU_CONNECT: string                           = "YOU_CONNECT";
    public static YOU_ENTER_BATTLE: string                      = "YOU_ENTER_BATTLE";
    public static YOU_MOVE: string                              = "YOU_MOVE";
    public static YOU_ROTATE: string                            = "YOU_ROTATE";
    public static YOU_REQUEST_RESPAWN_ENEMY: string             = "YOU_REQUEST_RESPAWN_ENEMY";
    public static YOU_SPAWN_ENEMY: string                       = "YOU_SPAWN_ENEMY";
    public static YOU_SPAWN_GEM: string                         = "YOU_SPAWN_GEM";
    public static YOU_SPAWN_TOWER: string                       = "YOU_SPAWN_TOWER";
    public static YOU_SPAWN_BOSS: string                        = "YOU_SPAWN_BOSS";
    public static YOU_SPAWN_SKILL: string                       = "YOU_SPAWN_SKILL";
    public static YOU_SPAWN_BULLET: string                      = "YOU_SPAWN_BULLET";
    public static YOU_UPDATE_HP: string                         = "YOU_UPDATE_HP";
    public static ENEMY_MOVE_AND_ROTATE: string                 = "ENEMY_MOVE_AND_ROTATE";
    public static ENEMY_DIE: string                             = "ENEMY_DIE";
    public static YOU_TEST: string                              = "YOU_TEST";
}
class ColorLoggerConst{
    public static RED: number       = 31;
    public static GREEN: number     = 32;
    public static YELLOW: number    = 33;
    public static BLUE: number      = 34;
    public static PURPLE: number    = 35;
    public static CYAN: number      = 36;
}

class MessageConst{
    public static SERVER_PLAYER: string            = "SERVER_PLAYER";

    public static PLAYER_CONNECT: string            = "PLAYER_CONNECT";
    public static PLAYER_ENTER_BATTLE: string       = "PLAYER_ENTER_BATTLE";

    public static PLAYER_MOVE: string               = "PLAYER_MOVE";
    public static PLAYER_ROTATE: string             = "PLAYER_ROTATE";

    public static MONSTER_MOVE_AND_ROTATE: string   = "MONSTER_MOVE_AND_ROTATE";
    public static MONSTER_DIE: string               = "MONSTER_DIE";

    public static MONSTER_SPAWN: string             = "MONSTER_SPAWN";
    public static GEM_SPAWN: string                 = "GEM_SPAWN";
    public static BOSS_SPAWN: string                = "BOSS_SPAWN";
    public static TOWER_SPAWN: string               = "TOWER_SPAWN";
    public static SKILL_SPAWN: string               = "SKILL_SPAWN";
    public static PLAYER_BULLET_SPAWN: string       = "PLAYER_BULLET_SPAWN";
    public static UPDATE_HP: string                 = "UPDATE_HP";
    public static DB_ADD_BATTLE_REPORT: string      = "DB_ADD_BATTLE_REPORT";
}

export {
    EmitConst,
    EmitBroadConst,
    ListenConst,
    ColorLoggerConst,
    MessageConst
}
