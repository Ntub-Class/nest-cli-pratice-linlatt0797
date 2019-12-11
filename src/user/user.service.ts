import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {

    getUserAll() {
        return "getUserAll";
    }

    getUser(id: string) {
        return "getUser:" + id;
    }

    postUser(body: any) {
        return "PostUser";
    }

    putUser(body: any, id: string) {
        return "PutUser " + id;
    }

    delUser(id: string) {
        return "delete User:" + id;
    }
}