import { ObjectType, Field } from '@nestjs/graphql'

@ObjectType()
export class Word {
  @Field()
  id: string

  @Field()
  title: string

  @Field()
  meaning: string
}

@ObjectType()
export class CreateWord {
  @Field()
  title: string

  @Field()
  meaning: string
}
