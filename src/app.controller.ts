import { Controller, Get, BadRequestException } from '@nestjs/common';
import { AppService } from './app.service';
import { HelloWorldDto } from './dto/helloWord.dto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): HelloWorldDto {
    throw new BadRequestException();
    return this.appService.getHello();
  }
}
