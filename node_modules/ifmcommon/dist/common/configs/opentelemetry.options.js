"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OpenTelemetryModuleConfig = void 0;
const nestjs_otel_1 = require("nestjs-otel");
exports.OpenTelemetryModuleConfig = nestjs_otel_1.OpenTelemetryModule.forRoot({
    metrics: {
        hostMetrics: true,
        defaultMetrics: true,
        apiMetrics: {
            enable: true,
        },
    },
});
//# sourceMappingURL=opentelemetry.options.js.map