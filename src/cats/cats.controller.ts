import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  ParseIntPipe,
  UsePipes,
} from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatDto } from './dto/cats.dto';
import { CreateCatDto, createCatSchema } from './dto/create-cat.dto';
import { ZodValidationPipe } from '../pipes/zod-validation.pipes';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getAllCats(): CatDto[] {
    return this.catsService.getAllCats();
  }

  @Get(':id')
  getCatById(@Param('id', ParseIntPipe) id: number): CatDto | undefined {
    return this.catsService.getCatById(id);
  }

  @Post()
  @UsePipes(new ZodValidationPipe(createCatSchema))
  addCat(@Body() cat: CreateCatDto): void {
    return this.catsService.addCat(cat);
  }
}
