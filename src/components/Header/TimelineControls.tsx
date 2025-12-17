import { useState } from "react";
import { items } from "../../items";

function TimelineControls() {
  // TODO: add years for other, non-album events
  const YEARS = items.filter((i) => !!i.id).map((i) => Number(i.id));

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
    console.log(YEARS);
    let target: number | undefined = YEARS.find((year) => query <= year);
    if (!target) {
      // set target to most recent year in timeline
      target = YEARS[YEARS.length - 1];
    }
    const targetId = document.getElementById(target.toString());
    if (targetId) {
      console.log(`${queryString} --> ${target}`);
      targetId.scrollIntoView({ behavior: "smooth"});
    }
  };

  return (
    <>
      <h2 className=" text-3xl py-2 pr-3 inline">
        <input 
          className="bg-transparent text-tan-300 placeholder:text-tan-300 field-sizing-fixed border w-80 rounded-2xl border-solid pl-5 inline" 
          type="text"
          id="goto-input" 
          value={yearQuery} 
          onChange={handleSearchChange}
          onKeyDown={handleKeyDown}
          maxLength={4}
          minLength={4}
          placeholder="enter year"
          autoFocus/>
        <p className="inline ml-5 text-lg text-tan-300 italic">(click on the album covers for more info!)</p>
      </h2>
    </>
  );
}

export default TimelineControls;