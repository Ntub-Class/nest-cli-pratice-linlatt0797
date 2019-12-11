import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { NewsModule } from './news/news.module';
import { StudentModule } from './student/student.module';

@Module({
  imports: [UserModule, NewsModule, StudentModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}