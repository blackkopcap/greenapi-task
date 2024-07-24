import { Module } from '@nestjs/common';
import { GreenApiModule } from './modules/greenapi/GreenApiModule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from "path";

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: join(__dirname, '..', 'public'),
            serveRoot: '/public/',
        }),
        GreenApiModule
    ],
})
export class AppModule {}
