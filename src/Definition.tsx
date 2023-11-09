import { useQuery } from "@tanstack/react-query";
import fetchDefinitions from "./fetchDefinitions";
import MeaningCards from "./MeaningCards";

const Definition = ({ word }: { word: string }) => {
  const displayWord = word ? word : "the word to define";
  const { data: wordResults, isLoading } = useQuery({
    queryKey: ["define", word],
    queryFn: fetchDefinitions,
  });

  let phoneticText = "";
  if (wordResults && wordResults[0]) {
    if (wordResults[0].phonetic) {
      phoneticText = wordResults[0].phonetic;
    } else if (wordResults[0].phonetics) {
      for (let i = 0; i < wordResults[0].phonetics.length; i++) {
        phoneticText = wordResults[0].phonetics[i].text ?? "";
      }
    } else {
      phoneticText = "No Phonetics found";
    }
  }

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
        <p className="lead">{word ? phoneticText : "Phonetic text here"}</p>
        <h5>Definitions:</h5>
        {wordResults && wordResults[0] ? (
          <MeaningCards meanings={wordResults[0].meanings} />
        ) : (
          <p>Definition Info goes here</p>
        )}
      </div>
    </main>
  );
};

export default Definition;
