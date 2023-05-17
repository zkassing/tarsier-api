import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import HTTP_ERROR from 'src/common/config/error.config';
import { HttpError } from 'src/common/http.exception';
import { Match } from 'src/entities/match.entity';
import { Repository } from 'typeorm';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
  ) {}

  async find() {
    return await this.matchRepository.find();
  }

  async remove(id: string) {
    const { affected } = await this.matchRepository.delete(id);
    if (!affected) throw new HttpError(HTTP_ERROR.REMOVE_NOT_FOUND);
    return '删除成功';
  }
}
