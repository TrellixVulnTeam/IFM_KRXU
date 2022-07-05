import { UserHistoryService } from 'src/kiramenKatibin/user.history.service';
export declare class MessagebrokerController {
    private userHistoryService;
    constructor(userHistoryService: UserHistoryService);
    exceptionListener(message: any): any;
    loggerListener(message: any): any;
    operationListener(message: any): Promise<any>;
}
