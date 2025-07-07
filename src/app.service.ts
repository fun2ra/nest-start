import { Injectable } from '@nestjs/common';
import { HelloWorldDto } from './dto/helloWord.dto';

@Injectable()
export class AppService {
  getHello(): HelloWorldDto {
    return { message: 'Hello World!' };
  }
}
