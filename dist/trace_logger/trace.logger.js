"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logger = exports.loggerOptions = void 0;
const pino_1 = require("pino");
const api_1 = require("@opentelemetry/api");
exports.loggerOptions = {
    formatters: {
        log(object) {
            var _a;
            const span = api_1.trace.getSpan(api_1.context.active());
            if (!span)
                return Object.assign({}, object);
            const { spanId, traceId } = (_a = api_1.trace.getSpan(api_1.context.active())) === null || _a === void 0 ? void 0 : _a.spanContext();
            return Object.assign(Object.assign({}, object), { spanId, traceId });
        },
    },
    prettyPrint: process.env.NODE_ENV === 'local'
        ? {
            colorize: true,
            levelFirst: true,
            translateTime: true,
        }
        : false,
};
exports.logger = (0, pino_1.default)(exports.loggerOptions);
//# sourceMappingURL=trace.logger.js.map