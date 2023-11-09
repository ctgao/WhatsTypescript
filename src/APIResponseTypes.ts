export type DictionaryAPIResponse = WordDefined[];

// putting this in now, but won't actually implement usage of it until later bc it's kinda complex
export type FailedDictionarySearch = {
  title: "No Definitions Found";
  message: string;
  resolution: string;
};

export interface WordDefined {
  word: string; // specifically a lowercase word
  phonetic: string;
  phonetics: Phoneme[];
  meanings: WordMeaning[];
  sourceUrls: string;
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
