"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.i18nOptions = void 0;
const path = require("path");
function i18nOptions(directory) {
    return {
        fallbackLanguage: 'tr',
        fallbacks: {
            en: 'en',
            tr: 'tr',
        },
        loaderOptions: {
            path: path.join(directory, '/i18n/'),
            watch: true,
        },
    };
}
exports.i18nOptions = i18nOptions;
//# sourceMappingURL=i18n.options.js.map