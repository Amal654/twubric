import React, { useState } from "react";
import { MoveDown, MoveUp } from "lucide-react";

const Sorting = ({ onSort }) => {
  const [sortingCriteria, setSortingCriteria] = useState(null);
  const [isAscending, setIsAscending] = useState(true);

  // Sort fucntionality
  const handleSortToggle = (criteria) => {
    if (sortingCriteria === criteria) {
      setIsAscending((prevState) => !prevState);
      onSort(criteria, !isAscending);
    } else {
      setIsAscending(true);
      setSortingCriteria(criteria);
      onSort(criteria, true); 
    }
  };
  
  // Sort icon
  const renderSortIcon = (criteria) => {
    if (sortingCriteria === criteria) {
      return isAscending ? <MoveDown size={14} /> : <MoveUp size={14} />;
    }
    return <MoveDown size={14} />;
  };

  return (
    <div className=" py-8">
      <div className="flex gap-8 flex-wrap">
        <button onClick={() => handleSortToggle("twubricScore")} className="flex gap-1 items-center">
          Twubric Score {renderSortIcon("twubricScore")}
        </button>
        <button onClick={() => handleSortToggle("friends")} className="flex gap-1 items-center">
          Friends {renderSortIcon("friends")}
        </button>
        <button onClick={() => handleSortToggle("influence")} className="flex gap-1 items-center">
          Influence {renderSortIcon("influence")}
        </button>
        <button onClick={() => handleSortToggle("chirpiness")} className="flex gap-1 items-center">
          Chirpiness {renderSortIcon("chirpiness")}
        </button>
      </div>
    </div>
  );
};

export default Sorting;
