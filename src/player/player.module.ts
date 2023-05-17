import { Module } from '@nestjs/common';
import { PlayerController } from './player.controller';
import { PlayerService } from './player.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/entities/player.entity';
import { Match } from 'src/entities/match.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Player, Match])],
  controllers: [PlayerController],
  providers: [PlayerService],
})
export class PlayerModule {}
