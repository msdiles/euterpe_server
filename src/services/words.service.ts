import { CreateWord } from 'src/models/word'
import { Injectable } from '@nestjs/common'
import { Word } from 'src/models/word'
import { v4 as uuidv4 } from 'uuid'

@Injectable()
export class WordService {
  private words: Word[] = [
    { id: '112312313', meaning: 'TEST WORD', title: 'TEST' },
  ]

  find(id: string): Word | null {
    return this.words.find((w) => w.id === id) || null
  }

  findAll(): Word[] {
    return this.words
  }

  create(newWord: CreateWord): Word {
    const word = { id: uuidv4(), ...newWord }
    this.words = [...this.words, word]
    return  word
  }

  delete(id: string): string {
    this.words = this.words.filter((w) => w.id !== id)
    return id
  }

  change(id: string, newWord: CreateWord): Word {
    return { id, ...newWord }
  }
}
