import React, { useState } from "react";
import { calculateDates } from "../utils/dateUtils";
import DateTable from "./DateTable";

const DateCalculator = () => {
  const [deathDate, setDeathDate] = useState("");
  const [dates, setDates] = useState([]);

  const handleCalculate = () => {
    const calculatedDates = calculateDates(new Date(deathDate));
    setDates(calculatedDates);
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Tong Bitongan Salamettan</h1>
      <p>Se Ampon Atinghel Kaadek</p>
      <br />
      <input
        type="date"
        value={deathDate}
        onChange={(e) => setDeathDate(e.target.value)}
        className="w-full p-2 border rounded mb-4 text-sm"
      />
      <button
        onClick={handleCalculate}
        className="w-full p-2 bg-blue-500 text-white rounded"
      >
        Hitung
      </button>
      {dates.length > 0 && (
        <div className="mt-4">
          <DateTable dates={dates} />
        </div>
      )}
    </div>
  );
};

export default DateCalculator;
