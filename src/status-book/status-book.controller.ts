import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { StatusBookService } from './status-book.service';
import { CreateStatusBookDto } from './dto/create-status-book.dto';
import { UpdateStatusBookDto } from './dto/update-status-book.dto';

@Controller('status-book')
export class StatusBookController {
  constructor(private readonly statusBookService: StatusBookService) {}

  @Post()
  create(@Body() createStatusBookDto: CreateStatusBookDto) {
    return this.statusBookService.create(createStatusBookDto);
  }

  @Get()
  findAll() {
    return this.statusBookService.findAll();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.statusBookService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateStatusBookDto: UpdateStatusBookDto) {
  //   return this.statusBookService.update(+id, updateStatusBookDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.statusBookService.remove(id);
  }
}
