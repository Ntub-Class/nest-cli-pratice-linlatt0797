import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private readonly userService:UserService) {}

    @Get()
    getUserAll(){
        return this.userService.getUserAll();
    }

    @Get(':id')
    getUser(@Param('id') id){
        return this.userService.getUser(id);
    }

    @Post()
    postUser(@Body() body){
        return this.userService.postUser(body);
    }

    @Put(':id')
    putUser(@Body() body, @Param('id') id){
        return this.userService.putUser(body, id);
    }

    @Delete(':id')
    delUser(@Param('id') id){
        return this.userService.delUser(id);
    }
}