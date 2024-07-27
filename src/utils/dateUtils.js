import { addDays, format } from "date-fns";
import moment from "moment-hijri";

const EVENTS = [
  { event: "Athinghel", days: 0 },
  { event: "Lok Tellok", days: 2 },
  { event: "Tok Pettok", days: 6 },
  { event: "Pak Polo", days: 39 },
  { event: "Nyatos", days: 99 },
  { event: "Naon", days: 353 },
  { event: "Du Taon", days: 707 },
  { event: "Nyaebu", days: 999 },
];

// // const JAVANESE_DAYS = [
// //   "Radite",
// //   "Soma",
// //   "Hanggara",
// //   "Buda",
// //   "Respati",
// //   "Sukra ",
// //   "Tumpak",
// // ];

// // const convertToJavaneseYear = (gregorianYear) => {
// //   // Kalender Jawa dimulai pada 1633 Masehi
// //   const jawaEpoch = 1633;
// //   return gregorianYear - jawaEpoch + 1000;
// // };

// const JAVANESE_MONTHS = [
//   "Sura",
//   "Safar",
//   "Maulid",
//   "Bakda Maulid",
//   "Jumadil Awal",
//   "Jumadil Akhir",
//   "Rejeb",
//   "Ruwah",
//   "Pasa",
//   "Sawal",
//   "Sela",
//   "Besar",
// ];

// // const getJavaneseDayIndex = (date) => {
// //   // Menghitung hari Jawa sebagai angka berdasarkan siklus 5 hari
// //   return date.getDay() % 5;
// // };

// const toJavaneseCalendar = (date) => {
//   // const day = JAVANESE_DAYS[getJavaneseDayIndex(date)];
//   // const cariDate = addDays(deathDate, days);
//   const day = moment(date).format("iD");
//   const month = moment(date).format("iMMM");
//   // const month = JAVANESE_MONTHS[moment(date).format("iMMM")];
//   const year = date.getFullYear() - 67;
//   // const dayIndex = getJavaneseDayIndex(date) + 1; // Menambahkan 1 agar sesuai dengan indeks manusia
//   return `${day}, ${month} ${year}`;
// };

const JAVANESE_MONTHS = [
  "Sora",
  "Sappar",
  "Molod",
  "Rasol",
  "Dilawel",
  "Dilaher",
  "Rejjeb",
  "Rebbeh",
  "Pasah",
  "Sabel",
  "Takepek'",
  "Reaje",
];

const HIJRI_MONTHS = [
  "Muharom",
  "Safar",
  "Rabiul Awal",
  "Rabiul Akhir",
  "Jumadil Awal",
  "Jumadil Akhir",
  "Rajab",
  "Sya’ban",
  "Ramadhan",
  "Syawal",
  "Dzulqa’dah",
  "Dzulhijjah",
];

const formatHijriDate = (date) => {
  const hijriYear = moment(date).format("iYYYY");
  const hijriMonthIndex = moment(date).format("iM") - 1; // iM menghasilkan 1-based index, jadi kurangi 1
  const hijriDay = moment(date).format("iD");

  return `${hijriDay} ${HIJRI_MONTHS[hijriMonthIndex]} ${hijriYear} H`;
};

const formatJavaneseDate = (date) => {
  const javaneseYear = moment(date).format("iYYYY");
  const javaneseMonthIndex = moment(date).format("iM") - 1; // iM menghasilkan 1-based index, jadi kurangi 1
  const javaneseDay = moment(date).format("iD");
  // const javaneseYear = date.getFullYear() - 66;

  return `${javaneseDay} ${JAVANESE_MONTHS[javaneseMonthIndex]} ${javaneseYear} Madhure`;
};

export const calculateDates = (deathDate) => {
  return EVENTS.map(({ event, days }) => {
    const targetDate = addDays(deathDate, days);
    // const hijriDate = moment(targetDate).format("iYYYY iMMMM iDD") + " H";
    const hijriDate = formatHijriDate(targetDate);
    const javaneseDate = formatJavaneseDate(targetDate);

    return {
      event,
      gregorian: format(targetDate, "dd - MMMM - yyyy"),
      hijri: hijriDate,
      javanese: javaneseDate,
    };
  });
};
