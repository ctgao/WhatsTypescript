import { useQuery } from "@tanstack/react-query";
import fetchDefinitions from "./fetchDefinitions";

const Definition = ({ word }: { word: string }) => {
  const displayWord = word ? word : "the word to be searched";
  const { data: wordResults, isLoading } = useQuery({
    queryKey: ["define", word],
    queryFn: fetchDefinitions,
  });

  if (isLoading) {
    return (
      <main className="container">
        <h1>Currently Loading</h1>
      </main>
    );
  }

  return (
    <main className="container">
      <div className="bg-light p-5 rounded">
        <h1>
          {displayWord.charAt(0).toUpperCase() +
            displayWord.substring(1).toLowerCase()}
        </h1>
        <p className="lead">
          {wordResults && wordResults[0]
            ? wordResults[0].sourceUrls
            : "Use this part of the page to present your results from the API call."}
        </p>
        <ul className="list-unstyled">
          <li>This is a list. Your word could go here.</li>
          <li>It appears completely un-styled.</li>
          <li>Maybe your multiple definitions of the word are here?</li>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <li>Structurally, it's still a list.</li>
          <li>However, this style only applies to immediate child elements.</li>
          <li>
            Nested lists: (maybe synonyms and antonyms?)
            <ul>
              <li>are unaffected by this style</li>
              <li>will still show a bullet</li>
              <li>and have appropriate left margin</li>
            </ul>
          </li>
          <li>This may still come in handy in some situations.</li>
        </ul>
      </div>
    </main>
  );
};

export default Definition;
