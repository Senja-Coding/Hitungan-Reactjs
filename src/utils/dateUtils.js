import { addDays, format } from "date-fns";
import moment from "moment-hijri";

const EVENTS = [
  { event: "Meninggal", days: 0 },
  { event: "3 Hari", days: 2 },
  { event: "7 Hari", days: 6 },
  { event: "40 Hari", days: 39 },
  { event: "100 Hari", days: 99 },
  { event: "Pendhak 1", days: 353 },
  { event: "Pendhak 2", days: 707 },
  { event: "1000 Hari", days: 999 },
];

// const JAVANESE_DAYS = [
//   "Radite",
//   "Soma",
//   "Hanggara",
//   "Buda",
//   "Respati",
//   "Sukra ",
//   "Tumpak",
// ];

// const convertToJavaneseYear = (gregorianYear) => {
//   // Kalender Jawa dimulai pada 1633 Masehi
//   const jawaEpoch = 1633;
//   return gregorianYear - jawaEpoch + 1000;
// };

const JAVANESE_MONTHS = [
  "Sura",
  "Safar",
  "Maulid",
  "Bakda Maulid",
  "Jumadil Awal",
  "Jumadil Akhir",
  "Rejeb",
  "Ruwah",
  "Pasa",
  "Sawal",
  "Sela",
  "Besar",
];

// const getJavaneseDayIndex = (date) => {
//   // Menghitung hari Jawa sebagai angka berdasarkan siklus 5 hari
//   return date.getDay() % 5;
// };

const toJavaneseCalendar = (date) => {
  // const day = JAVANESE_DAYS[getJavaneseDayIndex(date)];
  // const cariDate = addDays(deathDate, days);
  const day = moment(date).format("iD");
  const month = moment(date).format("iMMM");
  // const month = JAVANESE_MONTHS[date.getMonth()];
  const year = date.getFullYear() - 67;
  // const dayIndex = getJavaneseDayIndex(date) + 1; // Menambahkan 1 agar sesuai dengan indeks manusia
  return `${day}, ${month} ${year}`;
};

export const calculateDates = (deathDate) => {
  return EVENTS.map(({ event, days }) => {
    const targetDate = addDays(deathDate, days);
    const hijriDate = moment(targetDate).format("iD iMMMM iYYYY") + " H";

    return {
      event,
      gregorian: format(targetDate, "dd/MMMM/yyyy"),
      hijri: hijriDate,
      javanese: toJavaneseCalendar(targetDate),
    };
  });
};
