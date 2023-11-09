import { WordMeaning } from "./APIResponseTypes";

const SingleMeaning = ({ theMeaning }: { theMeaning: WordMeaning }) => {
  return (
    <div
      className="card border-secondary"
      style={{ maxWidth: "75%", display: "inline-block" }}
    >
      <div className="card-header">{theMeaning.partOfSpeech}</div>
      <div className="card-body">
        <h6 className="card-title">{theMeaning.definitions[0].definition}</h6>
        <p>
          Antonyms:{" "}
          <ul>
            {theMeaning.definitions[0].antonyms.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </p>
        <p>
          Synonyms:{" "}
          <ul>
            {theMeaning.definitions[0].synonyms.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </p>
      </div>
    </div>
  );
};

export default SingleMeaning;
