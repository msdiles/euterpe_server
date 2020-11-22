import { Resolver, Args, Query, Mutation } from '@nestjs/graphql'
import { WordService } from './words.service'
import { Word } from './models/word'

@Resolver(of => Word)
export class WordResolver {
  constructor(private readonly wordService: WordService) {}

  @Query(() => [Word])
  async words(): Promise<Word[]> {
    return await this.wordService.findAll()
  }

  @Query(() => Word)
  async word(@Args('id') id: string): Promise<Word> {
    return await this.wordService.find(id)
  }

  @Mutation(() => String)
  async deleteWord(@Args('id') id: string): Promise<string> {
    return await this.wordService.delete(id)
  }

  @Mutation(() => Word)
  async changeWord(
    @Args('id') id: string,
    @Args('title') title: string,
    @Args('meaning') meaning: string,
  ): Promise<Word> {
    return await this.wordService.change(id, { id, title, meaning })
  }

  @Mutation(() => Word)
  async createWord(
    @Args('title') title: string,
    @Args('meaning') meaning: string,
  ): Promise<Word> {
    return await this.wordService.create({ title, meaning })
  }
}
