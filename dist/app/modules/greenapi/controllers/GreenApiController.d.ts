export declare class GreenApiController {
    root(): {};
    getSettings(idInstance: string, apiTokenInstance: string): Promise<any>;
    getStateInstance(idInstance: string, apiTokenInstance: string): Promise<any>;
    sendMessage(body: any): Promise<any>;
    sendFileByUrl(body: any): Promise<any>;
}
