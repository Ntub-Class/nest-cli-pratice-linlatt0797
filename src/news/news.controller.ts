import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { NewsService } from './news.service';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService:NewsService) {}

    @Get()
    getNewsAll(){
        return this.newsService.getNewsAll();
    }

    @Get(':id')
    getNews(@Param('id') id){
        return this.newsService.getNews(id);
    }

    @Post()
    postNews(@Body() body){
        return this.newsService.postNews(body);
    }

    @Put(':id')
    putNews(@Body() body, @Param('id') id){
        return this.newsService.putNews(body, id);
    }

    @Delete(':id')
    delNews(@Param('id') id){
        return this.newsService.delNews(id);
    }
}