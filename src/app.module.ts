import { Module } from '@nestjs/common';
import { WordController } from './controllers/words.controller';
import { WordService } from './services/words.service';

@Module({
  imports: [],
  controllers: [WordController],
  providers: [WordService],
})
export class AppModule {}
