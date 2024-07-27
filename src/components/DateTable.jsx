import React from "react";

const DateTable = ({ dates }) => (
  <div className="overflow-x-auto">
    <table className="min-w-full bg-white border border-gray-200 rounded-lg">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Event</th>
          <th className="py-2 px-4 border-b">Tanggal Masehi</th>
          <th className="py-2 px-4 border-b">Tanggal Hijriyah</th>
          <th className="py-2 px-4 border-b">Tanggal Jawa</th>
        </tr>
      </thead>
      <tbody>
        {dates.map((date, index) => (
          <tr key={index}>
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
