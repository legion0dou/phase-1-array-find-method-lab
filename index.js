// code your solution here
// index.js
const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    // ...
  ];
  
  function superbowlWin(record) {
    // Use the find() method to search for a record with a "W" (win) result
    const winningRecord = record.find(entry => entry.result === "W");
  
    // Check if a winning record was found, and return the year if found, or undefined if not
    if (winningRecord) {
      return winningRecord.year;
    } else {
      return undefined;
    }
  }
  
  // Call the superbowlWin function to find the year of the Superbowl win
  const superBowlYear = superbowlWin(record);
  
  // Log the result to the console
  console.log(`The Denver Broncos won the Superbowl in the year ${superBowlYear}`);
  