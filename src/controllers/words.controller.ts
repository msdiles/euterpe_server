import { CreateWord } from './../models/word';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Word } from 'src/models/word';
import { WordService } from 'src/services/words.service';

@Controller('words')
export class WordController {
  constructor(private readonly wordService: WordService) {}

  @Get()
  async findAll(): Promise<Word[]> {
    return await this.wordService.findAll();
  }

  @Get('/:id')
  async find(@Param() id: string): Promise<Word> {
    return await this.wordService.find(id);
  }

  @Post()
  async create(@Body() newWord: CreateWord): Promise<Word> {
    return await this.wordService.create(newWord);
  }

  @Delete()
  async delete(@Body() id: string): Promise<string> {
    return await this.wordService.delete(id);
  }

  @Put()
  async change(@Body() id: string, newWord: CreateWord): Promise<string> {
    return this.change(id, newWord);
  }
}
