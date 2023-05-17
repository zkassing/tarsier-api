import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Match } from 'src/entities/match.entity';
import { Player } from 'src/entities/player.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PlayerService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>,
  ) {}

  async getPlayers() {
    const players = await this.playerRepository
      .createQueryBuilder('player')
      .leftJoin('Match', 'match', 'player.matchId=match.id')
      .select(
        `
          player.id as id,
          player.name as name,
          match.name as matchName
        `,
      )
      /* .select('player.id', 'id')
      .addSelect('match.name', 'matchName') */
      .getRawMany();
    // const players = await this.playerRepository.find();

    return players;
  }
}
