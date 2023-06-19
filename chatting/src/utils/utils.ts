class Utils{
    GetRandomBetween(min, max) {  
        return Math.floor(
            Math.random() * (max - min) + min
        )
    }
}
export default new Utils;