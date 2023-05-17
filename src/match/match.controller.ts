import { Controller, Delete, Get, Query } from '@nestjs/common';
import { MatchService } from './match.service';
import { Match } from 'src/entities/match.entity';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/')
  async find(): Promise<Match[]> {
    return await this.matchService.find();
  }

  @Delete('/')
  async remove(@Query('id') id: string) {
    return await this.matchService.remove(id);
  }
}
