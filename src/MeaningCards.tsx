import { WordMeaning } from "./APIResponseTypes";
import { useState } from "react";
import SingleMeaning from "./SingleMeaning";

const MeaningCards = ({
  meanings: listOfMeanings,
}: {
  meanings: WordMeaning[];
}) => {
  const [pageNum, setPageNum] = useState(0);

  return (
    <div
      style={{
        justifyContent: "space-evenly",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <button
        style={{
          display: "inline-block",
          marginRight: "15px",
          border: "none",
          background: "none",
          fontSize: "50px",
        }}
        onClick={() => {
          if (pageNum > 0) setPageNum(pageNum - 1);
        }}
      >
        ◀
      </button>
      <SingleMeaning theMeaning={listOfMeanings[pageNum]} />
      <button
        style={{ display: "inline-block", marginLeft: "15px" }}
        onClick={() => {
          if (pageNum < listOfMeanings.length - 1) setPageNum(pageNum + 1);
        }}
      >
        ▶
      </button>
    </div>
  );
};

export default MeaningCards;
