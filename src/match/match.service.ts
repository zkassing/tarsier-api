import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { HTTP_ERROR, HTTP_SUCCESS } from 'src/common/config/response.status';
import { HttpError } from 'src/common/http.exception';
import { Match } from 'src/match/entities/match.entity';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Injectable()
export class MatchService {
  constructor(
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>,
  ) {}

  async find() {
    return await this.matchRepository.find();
  }

  async create(createMatchDto: CreateMatchDto) {
    const match = new CreateMatchDto();
    match.name = createMatchDto.name;
    match.description = createMatchDto.description;
    return await this.matchRepository.save(match);
  }

  async update(id: string, updateMatchDto: UpdateMatchDto) {
    const { affected } = await this.matchRepository.update(id, updateMatchDto);
    if (!affected) throw new HttpError(HTTP_ERROR.UPDATE_FAIL);
    return HTTP_SUCCESS.UPDATE;
  }

  async remove(id: string) {
    const { affected } = await this.matchRepository.delete(id);
    if (!affected) throw new HttpError(HTTP_ERROR.REMOVE_FAIL);
    return HTTP_SUCCESS.REMOVE;
  }
}
