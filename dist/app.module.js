"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const config_1 = require("@nestjs/config");
const connection_enum_1 = require("./common/const/connection.enum");
const nestjs_i18n_1 = require("nestjs-i18n");
const core_1 = require("@nestjs/core");
const messagebroker_module_1 = require("./messagebroker/messagebroker.module");
const Joi = require("joi");
const redisStore = require("cache-manager-redis-store");
const ifmcommon_1 = require("ifmcommon");
const trace_logger_module_1 = require("./trace_logger/trace.logger.module");
const opentelemetry_options_1 = require("./common/configs/opentelemetry.options");
const users_module_1 = require("./users/users.module");
const history_module_1 = require("./kiramenKatibin/history.module");
const i18n_options_1 = require("./common/configs/i18n.options");
const keycloak_module_1 = require("./common/keycloack/keycloak.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            opentelemetry_options_1.OpenTelemetryModuleConfig,
            trace_logger_module_1.LoggerModule,
            keycloak_module_1.KeycloakModule,
            common_1.CacheModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    ttl: configService.get('CACHE_TTL'),
                    store: redisStore,
                    host: configService.get('CACHE_HOST'),
                    port: +configService.get('CACHE_PORT'),
                    isGlobal: true,
                    max: +configService.get('CACHE_MAX'),
                }),
                inject: [config_1.ConfigService],
            }),
            nestjs_i18n_1.I18nModule.forRoot((0, i18n_options_1.i18nOptions)(__dirname)),
            mongoose_1.MongooseModule.forRootAsync({
                connectionName: connection_enum_1.ConnectionEnums.USER,
                useFactory: (config) => ({
                    uri: config.get('DATABASE_LINK'),
                    dbName: config.get('USER_DB_NAME'),
                    user: config.get('DB_USER'),
                    pass: config.get('DB_PASS'),
                }),
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                cache: true,
                validationSchema: Joi.object({
                    DATABASE_LINK: Joi.string().required(),
                    CACHE_HOST: Joi.string().required(),
                    CACHE_PORT: Joi.string().required(),
                }),
            }),
            messagebroker_module_1.MessagebrokerModule,
            users_module_1.UsersModule,
            history_module_1.HistoryModule,
        ],
        providers: [
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: ifmcommon_1.HttpCacheInterceptor,
            },
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map