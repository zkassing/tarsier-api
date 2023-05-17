import { Controller, Get, HttpException } from '@nestjs/common';
import { MatchService } from './match.service';
import { Match } from 'src/entities/match.entity';
import { HttpError } from 'src/common/http.exception';
import { NOT_FOUND } from 'src/common/config/error.config';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/')
  async getPlayers(): Promise<Match[]> {
    return await this.matchService.getMatches();
  }

  @Get('/error')
  async testError() {
    throw new HttpError(NOT_FOUND);
  }
}
