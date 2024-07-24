import { Controller, Get, Query, Post, Body, Render } from '@nestjs/common';
import fetch from 'node-fetch';

@Controller()
export class GreenApiController {
    @Get()
    @Render('index')
    root() {
        return {};
    }

    @Get('getSettings')
    async getSettings(@Query('idInstance') idInstance: string, @Query('apiTokenInstance') apiTokenInstance: string) {
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/getSettings/${apiTokenInstance}`);
        const data = await response;
        if(data.status === 200) {
            return data.json();
        }
        return {
            status: data.status,
            statusText: data.statusText
        };
    }

    @Get('getStateInstance')
    async getStateInstance(@Query('idInstance') idInstance: string, @Query('apiTokenInstance') apiTokenInstance: string) {
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/getStateInstance/${apiTokenInstance}`);
        const data = await response;
        if(data.status === 200) {
            return data.json();
        }
        return {
            status: data.status,
            statusText: data.statusText
        };
    }

    @Post('sendMessage')
    async sendMessage(@Body() body: any) {
        const { idInstance, apiTokenInstance, chatId, message } = body;
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatId: `${chatId}@c.us`, message }),
        });
        const data = await response;
        if(data.status === 200) {
            return data.json();
        }
        return {
            status: data.status,
            statusText: data.statusText
        };
    }

    @Post('sendFileByUrl')
    async sendFileByUrl(@Body() body: any) {
        const { idInstance, apiTokenInstance, chatId, urlFile, fileName } = body;
        const response = await fetch(`https://api.green-api.com/waInstance${idInstance}/sendFileByUrl/${apiTokenInstance}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ chatId: `${chatId}@c.us`, urlFile, fileName }),
        });
        const data = await response;
        if(data.status === 200) {
            return data.json();
        }
        return {
            status: data.status,
            statusText: data.statusText
        };
    }
}
