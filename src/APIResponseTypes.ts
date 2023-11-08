export type DictionaryAPIResponse = WordDefined[];

export interface WordDefined {
  word: string; // specifically a lowercase word
  phonetics: Phoneme[];
  meanings: WordMeaning[];
  sourceUrl: string;
}

export interface Phoneme {
  text?: string;
  audio: string;
  sourceURL?: string;
}

export interface WordMeaning {
  partOfSpeech: string;
  definitions: SingularDefinition[];
  synonyms: string[];
  antonyms: string[];
}

export interface SingularDefinition {
  definition: string;
  synonyms: string[];
  antonyms: string[];
  example?: string;
}
