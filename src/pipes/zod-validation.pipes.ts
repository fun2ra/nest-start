import { PipeTransform, BadRequestException } from '@nestjs/common';
import { ZodSchema } from 'zod';

export class ZodValidationPipe implements PipeTransform {
  constructor(private schema: ZodSchema) {}

  transform(value: unknown) {
    try {
      console.log('ZodValidationPipe: Validating value:', value);

      const parsedValue: unknown = this.schema.parse(value);
      console.log('ZodValidationPipe: parsedValue', parsedValue);
      return parsedValue;
    } catch (error) {
      console.error('ZodValidationPipe: Validation error:', error);
      throw new BadRequestException('Validation failed');
    }
  }
}
