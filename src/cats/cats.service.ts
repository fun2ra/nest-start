import { Injectable } from '@nestjs/common';
import { CatDto } from 'src/cats/dto/cats.dto';
import { CreateCatDto } from './dto/create-cat.dto';

@Injectable()
export class CatsService {
  private cats: CatDto[];
  constructor() {
    this.cats = [
      { id: 1, name: 'Whiskers', age: 3, breed: 'Siamese', color: 'Cream' },
      { id: 2, name: 'Mittens', age: 2, breed: 'Persian', color: 'White' },
    ];
  }

  getAllCats(): CatDto[] {
    return this.cats;
  }

  getCatById(id: number): CatDto | undefined {
    return this.cats.find((cat) => cat.id === id);
  }

  addCat(cat: CreateCatDto): void {
    const newId = this.cats.length
      ? Math.max(...this.cats.map((c) => c.id)) + 1
      : 1;
    this.cats.push({ ...cat, id: newId });
  }
}
