"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDeltaMinutes = exports.Activity = void 0;
const moment = require("moment");
const pino_1 = require("pino");
const logger = pino_1.default({
    level: process.env.LOG_LEVEL,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        }
    }
});
exports.default = logger;
function Activity(peak, duration, hoursAgo, insulin) {
    const tau = peak * (1 - peak / duration) / (1 - 2 * peak / duration);
    const a = 2 * tau / duration;
    const S = 1 / (1 - a + (1 + a) * Math.exp(-duration / tau));
    const activity = (insulin * (S / Math.pow(tau, 2)) * hoursAgo * (1 - hoursAgo / duration) * Math.exp(-hoursAgo / tau)) / 60;
    return { S, tau, activity };
}
exports.Activity = Activity;
const getDeltaMinutes = (mills) => Math.round(moment().diff(moment(mills), 'seconds') / 60);
exports.getDeltaMinutes = getDeltaMinutes;
//# sourceMappingURL=utils.js.map