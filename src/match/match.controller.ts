import {
  Controller,
  Delete,
  Get,
  Param,
  Body,
  Post,
  Patch,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { Match } from 'src/match/entities/match.entity';
import { CreateMatchDto } from './dto/create-match.dto';
import { UpdateMatchDto } from './dto/update-match.dto';

@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/')
  async find(): Promise<Match[]> {
    return await this.matchService.find();
  }

  @Post('/')
  async create(@Body() createMatchDto: CreateMatchDto) {
    return await this.matchService.create(createMatchDto);
  }

  @Patch('/:id')
  async update(@Param('id') id, @Body() updateMatchDto: UpdateMatchDto) {
    return await this.matchService.update(id, updateMatchDto);
  }

  @Delete('/:id')
  async remove(@Param('id') id: string) {
    return await this.matchService.remove(id);
  }
}
