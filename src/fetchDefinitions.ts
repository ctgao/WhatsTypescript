// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { QueryFunction } from "@tanstack/react-query";
import { DictionaryAPIResponse } from "./APIResponseTypes";

const fetchDefinitions: QueryFunction<
  DictionaryAPIResponse,
  ["define", string]
> = async ({ queryKey }) => {
  const [queryType, word] = queryKey;

  if (!word) return [];

  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`,
  );

  if (!res.ok) console.error(`${queryType}-${word} is not okay`);

  return res.json();
};

export default fetchDefinitions;
