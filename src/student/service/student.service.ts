import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
    getAllStudent() {
        return "getStudentAll";
    }

    getOneStudent(id: string) {
        return "getStudent:" + id;
    }

    postStudent(body: any) {
        return "PostStudent";
    }

    putStudent(body: any, id: string) {
        return "PutStudent " + id;
    }

    delStudent(id: string) {
        return "delete Student:" + id;
    }
}