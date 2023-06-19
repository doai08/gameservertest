
 class LoggerUtil{
    Logger(color: number,message: string) {  
        console.log('\u001b[' + color + 'm' + message + '\u001b[0m');
    }
    LoggerDetail(color: number,message, data){
        console.log('\u001b[' + color + 'm' + message +":" +JSON.stringify(data) + '\u001b[0m');
    }
}
export default new LoggerUtil;