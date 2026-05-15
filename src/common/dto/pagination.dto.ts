import { Type } from 'class-transformer';
import { IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Min(1)
  @Type(() => Number)
  limit?: number = 10;
}
