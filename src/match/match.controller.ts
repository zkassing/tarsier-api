import { Controller, Get } from '@nestjs/common';
import { MatchService } from './match.service';
import { Match } from 'src/entities/match.entity';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/')
  async getPlayers(): Promise<Match[]> {
    return await this.matchService.getMatches();
  }
}
