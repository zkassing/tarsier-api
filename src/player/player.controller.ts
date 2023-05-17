import { Controller } from '@nestjs/common';
import { PlayerService } from './player.service';
import { Get } from '@nestjs/common';

@Controller('player')
export class PlayerController {
  constructor(private readonly playService: PlayerService) {}

  @Get('/')
  async getPlayers() {
    return this.playService.getPlayers();
  }
}
