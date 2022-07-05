"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const ifmcommon_1 = require("ifmcommon");
const ifmcommon_2 = require("ifmcommon");
const message_broker_options_1 = require("./common/configs/message.broker.options");
const tracing_1 = require("./tracing");
const nestjs_i18n_1 = require("nestjs-i18n");
const ifmcommon_3 = require("ifmcommon");
const ifmcommon_4 = require("ifmcommon");
const kafka_conf_1 = require("./common/const/kafka.conf");
const kafta_topic_enum_1 = require("./common/const/kafta.topic.enum");
async function bootstrap() {
    try {
        await tracing_1.default.start();
        const app = await core_1.NestFactory.create(app_module_1.AppModule, { abortOnError: false });
        const i18NService = app.get(nestjs_i18n_1.I18nService);
        app.connectMicroservice(message_broker_options_1.kafkaOptions);
        const config = new swagger_1.DocumentBuilder()
            .setTitle('User Microservice Endpoints')
            .setDescription('User Transactions')
            .setVersion('1.0')
            .addTag('user')
            .addBearerAuth({
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
            name: 'JWT',
            description: 'Enter JWT token',
            in: 'header',
        }, 'JWT-auth')
            .build();
        const document = swagger_1.SwaggerModule.createDocument(app, config);
        swagger_1.SwaggerModule.setup('api', app, document);
        app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, exceptionFactory: nestjs_i18n_1.i18nValidationErrorFactory }));
        app.useGlobalInterceptors(new ifmcommon_1.LoggingInterceptor(kafka_conf_1.kafkaConf, kafta_topic_enum_1.UserTopics.USER_LOGGER, kafta_topic_enum_1.UserTopics.USER_OPERATION), new ifmcommon_4.TimeoutInterceptor());
        app.useGlobalFilters(new ifmcommon_2.MongoExceptionFilter(i18NService, kafka_conf_1.kafkaConf, kafta_topic_enum_1.UserTopics.USER_EXCEPTIONS), new ifmcommon_3.HttpExceptionFilter(i18NService, kafka_conf_1.kafkaConf, kafta_topic_enum_1.UserTopics.USER_EXCEPTIONS), new nestjs_i18n_1.I18nValidationExceptionFilter());
        app.enableCors();
        await app.startAllMicroservices();
        await app.listen(3012);
    }
    catch (error) {
        console.log(error);
    }
}
bootstrap();
//# sourceMappingURL=main.js.map