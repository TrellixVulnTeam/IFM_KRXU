/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document } from 'mongoose';
import { BasePersistantDocumentObject } from 'ifmcommon';
export declare type UserDocument = UserHistory & Document;
export declare class UserHistory extends BasePersistantDocumentObject {
    user: object;
    keycloack_user: object;
    requestInformation: object;
}
export declare const UserHistorySchema: import("mongoose").Schema<UserHistory, import("mongoose").Model<UserHistory, any, any, any>, {}, {}>;
