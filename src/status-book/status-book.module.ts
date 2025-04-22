import { Module } from '@nestjs/common';
import { StatusBookService } from './status-book.service';
import { StatusBookController } from './status-book.controller';

@Module({
  controllers: [StatusBookController],
  providers: [StatusBookService],
})
export class StatusBookModule {}
