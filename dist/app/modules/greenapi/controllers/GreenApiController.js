"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GreenApiController = void 0;
const common_1 = require("@nestjs/common");
const node_fetch_1 = require("node-fetch");
let GreenApiController = class GreenApiController {
    root() {
        return {};
    }
    getSettings(idInstance, apiTokenInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
            const data = yield response;
            if (data.status === 200) {
                return data.json();
            }
            return {
                status: data.status,
                statusText: data.statusText
            };
        });
    }
    getStateInstance(idInstance, apiTokenInstance) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield (0, node_fetch_1.default)(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
            const data = yield response;
            if (data.status === 200) {
                return data.json();
            }
            return {
                status: data.status,
                statusText: data.statusText
            };
        });
    }
    sendMessage(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInstance, apiTokenInstance, chatId, message } = body;
            const response = yield (0, node_fetch_1.default)(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chatId: `${chatId}@c.us`, message }),
            });
            const data = yield response;
            if (data.status === 200) {
                return data.json();
            }
            return {
                status: data.status,
                statusText: data.statusText
            };
        });
    }
    sendFileByUrl(body) {
        return __awaiter(this, void 0, void 0, function* () {
            const { idInstance, apiTokenInstance, chatId, urlFile, fileName } = body;
            const response = yield (0, node_fetch_1.default)(`https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ chatId: `${chatId}@c.us`, urlFile, fileName }),
            });
            const data = yield response;
            if (data.status === 200) {
                return data.json();
            }
            return {
                status: data.status,
                statusText: data.statusText
            };
        });
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, common_1.Render)('index'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GreenApiController.prototype, "root", null);
__decorate([
    (0, common_1.Get)('getSettings'),
    __param(0, (0, common_1.Query)('idInstance')),
    __param(1, (0, common_1.Query)('apiTokenInstance')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GreenApiController.prototype, "getSettings", null);
__decorate([
    (0, common_1.Get)('getStateInstance'),
    __param(0, (0, common_1.Query)('idInstance')),
    __param(1, (0, common_1.Query)('apiTokenInstance')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], GreenApiController.prototype, "getStateInstance", null);
__decorate([
    (0, common_1.Post)('sendMessage'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GreenApiController.prototype, "sendMessage", null);
__decorate([
    (0, common_1.Post)('sendFileByUrl'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GreenApiController.prototype, "sendFileByUrl", null);
GreenApiController = __decorate([
    (0, common_1.Controller)()
], GreenApiController);
exports.GreenApiController = GreenApiController;
//# sourceMappingURL=GreenApiController.js.map