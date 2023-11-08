import { QueryFunction } from "@tanstack/react-query";
import { DictionaryAPIResponse } from "./APIResponseTypes";

const fetchDefinitions: QueryFunction<DictionaryAPIResponse, ["define", number]> = async ({
  queryKey,
}) => {
  // const [queryType, defineWord] = queryKey;
  const [defineWord] = queryKey;

  return [];
  // if (!defineWord) return [];

  const res = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${defineWord}`,
  );

  // if (!res.ok) {
  //   // throw new Error(`${queryType}-${defineWord} not okay`);
  //   throw new Error(`define-${defineWord} not okay`);
  // }
  // return res.json();
};

export default fetchDefinitions;
