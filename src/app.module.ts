import { WordsModule } from './words/words.module';
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'

@Module({
  imports: [
    WordsModule,
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
      playground:true
    }),
  ],
})
export class AppModule {}
