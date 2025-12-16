import { useState } from "react";

function TimelineControls() {
  // TODO: add years for other, non-album events
  const YEARS = [
    1978, 
    1979, 
    1987, // album
    1989, // album
    1990, // album
    1992, // album
    1993,
    1994,
    1998, // album
    2002, // album
    2004, // album
  ]
  const [yearQuery, setYearQuery] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setYearQuery(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      jumpToYear(yearQuery);
    }
  }

  const jumpToYear = (queryString: string) => {
    const query = Number(queryString);
    if (isNaN(query)) {
      return;
    }
    let target: number | undefined = YEARS.find((year) => query <= year);
    if (!target) {
      // set target to most recent year in timeline
      target = YEARS[YEARS.length - 1];
    }
    const targetId = document.getElementById(target.toString());
    if (targetId) {
      targetId.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <>
      <h2 className="text-tan-300 text-2xl py-2 pr-3 inline bg-tan-300 border-tan-600 border-solid border-2">
        <div className="text-forest-400 hover:text-forest-600 hover:bg-tan-500 cursor-pointer inline bg-tan-600 py-2 px-4">Skip to:</div>
        <input 
          className="bg-tan-300 text-carbon w-25 ml-4 text-center" 
          type="text"
          id="goto-input" 
          value={yearQuery} 
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          maxLength={4}
          minLength={4}
          placeholder="YYYY"/>
      </h2>
    </>
  );
}

export default TimelineControls;