import { Controller, Get, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { StudentService } from './service/student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService:StudentService) {}

    @Get()
    getAllStudent(){
        // return "getAllStudent";
        return this.studentService.getAllStudent();
    }

    @Get(':id')
    getOneStudent(@Param('id') id){
        // return "getOneStudent:" + id;
        return this.studentService.getOneStudent(id);
    }

    @Post()
    postStudent(@Body() body){
        // return "PostStudent";
        return this.studentService.postStudent(body);
    }

    @Put(':id')
    putStudent(@Body() body, @Param('id') id){
        // return "PutStudent " + id;
        return this.studentService.putStudent(body, id);
    }

    @Delete(':id')
    delStudent(@Param('id') id){
        // return "delete Student:" + id;
        return this.studentService.delStudent(id);
    }
}