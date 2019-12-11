import { Injectable } from '@nestjs/common';

@Injectable()
export class NewsService {
    getNewsAll() {
        return "getNewsAll";
    }

    getNews(id: string) {
        return "getNews:" + id;
    }

    postNews(body: any) {
        return "PostNews";
    }

    putNews(body: any, id: string) {
        return "PutNews " + id;
    }

    delNews(id: string) {
        return "delete News:" + id;
    }
}