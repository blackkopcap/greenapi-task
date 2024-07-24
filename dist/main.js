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
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const AppModule_1 = require("./app/AppModule");
const hbs = require("hbs");
function bootstrap() {
    return __awaiter(this, void 0, void 0, function* () {
        const app = yield core_1.NestFactory.create(AppModule_1.AppModule);
        app.useStaticAssets((0, path_1.join)(__dirname, '..', 'public'));
        app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
        app.setViewEngine('hbs');
        hbs.registerPartials((0, path_1.join)(__dirname, '..', 'views/partials'));
        app.enableCors();
        yield app.listen(3000);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map