import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WidgetsService } from './widgets.service';
import { Widget } from '@fem/api-interfaces';

@Controller('widgets')
export class WidgetsController {
  constructor(private readonly widgetsService: WidgetsService) {}

  @Post()
  create(@Body() widget: Widget) {
    return this.widgetsService.create(widget);
  }

  @Get()
  findAll() {
    return this.widgetsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.widgetsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() widget: Widget) {
    return this.widgetsService.update(id, widget);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.widgetsService.remove(id);
  }
}
