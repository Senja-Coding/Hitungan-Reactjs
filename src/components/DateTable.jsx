import React from "react";

const DateTable = ({ dates }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead>
        <tr className="text-sm">
          <th className="py-2 px-4 border-b">Areh</th>
          <th className="py-2 px-4 border-b">Umum</th>
          <th className="py-2 px-4 border-b">Islam</th>
          <th className="py-2 px-4 border-b">Madhure</th>
        </tr>
      </thead>
      <tbody>
        {dates.map((date, index) => (
          <tr key={index} className="text-sm">
            <td className="py-2 px-4 border-b">{date.event}</td>
            <td className="py-2 px-4 border-b">{date.gregorian}</td>
            <td className="py-2 px-4 border-b">{date.hijri}</td>
            <td className="py-2 px-4 border-b">{date.javanese}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default DateTable;
