"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.translate = void 0;
var axios_1 = __importDefault(require("axios"));
function translate(text, config) {
    if (config === void 0) { config = {}; }
    return __awaiter(this, void 0, void 0, function () {
        var from, to, params, url, resp, data, result, targetText, romanization, error_1, errMessage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    from = config.from || "auto";
                    to = config.to || "id";
                    params = new URLSearchParams();
                    params.append("async", "translate,sl:" + from + ",tl:" + to + ",st:" + encodeURIComponent(text) + ",id:1622684736837,qc:true,ac:false,_id:tw-async-translate,_pms:s,_fmt:pc");
                    url = "https://www.google.com/async/translate";
                    return [4 /*yield*/, axios_1.default.post(url, params, {
                            headers: {
                                "user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.77 Safari/537.36",
                            },
                        })];
                case 1:
                    resp = _a.sent();
                    data = resp.data;
                    result = {
                        targetText: undefined,
                        romanization: undefined,
                    };
                    targetText = getTextBetween(data, '<span id="tw-answ-target-text">', "</span>");
                    romanization = getTextBetween(data, '<span id="tw-answ-romanization">', "</span>");
                    if (targetText)
                        result.targetText = targetText;
                    if (romanization)
                        result.romanization = romanization;
                    return [2 /*return*/, result];
                case 2:
                    error_1 = _a.sent();
                    errMessage = error_1.message;
                    if (error_1.response && error_1.response.data) {
                        errMessage = error_1.response.data;
                    }
                    throw new Error(errMessage);
                case 3: return [2 /*return*/];
            }
        });
    });
}
exports.translate = translate;
function getTextBetween(text, a, b) {
    var arr = (text || "").split(a);
    if (arr && arr.length > 1) {
        var arr2 = arr[1].split(b);
        return arr2[0];
    }
    return null;
}
translate("Selamat Siang", { to: "ko" }).then(console.log);
