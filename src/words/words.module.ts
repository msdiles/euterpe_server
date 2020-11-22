import { Module } from '@nestjs/common'
import { WordResolver } from './words.resolver'
import { WordService } from './words.service'

@Module({
  imports:[],
  providers: [ WordResolver ,WordService],
})
export class WordsModule {}
