/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose/types/aggregate" />
/// <reference types="mongoose/types/connection" />
/// <reference types="mongoose/types/cursor" />
/// <reference types="mongoose/types/document" />
/// <reference types="mongoose/types/error" />
/// <reference types="mongoose/types/mongooseoptions" />
/// <reference types="mongoose/types/schemaoptions" />
import { Document, Schema as MongooseSchema } from 'mongoose';
import { BasePersistantDocumentObject } from 'ifmcommon';
import { Languages } from 'src/common/const/language.enum';
export declare type UserDocument = User & Document;
export declare class User extends BasePersistantDocumentObject {
    userId: string;
    phone_number: string;
    business_code: string;
    business_name: string;
    language: Languages;
    class_name: string;
    landing_page: string;
    LoginAt: Date;
    LogoutAt: Date;
}
export declare const UserSchema: MongooseSchema<User, import("mongoose").Model<User, any, any, any>, {}, {}>;
