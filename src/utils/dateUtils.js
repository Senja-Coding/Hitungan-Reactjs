import { addDays, format } from "date-fns";
import moment from "moment-hijri";

const EVENTS = [
  { event: "Meninggal", days: 0 },
  { event: "3 Hari", days: 2 },
  { event: "7 Hari", days: 6 },
  { event: "40 Hari", days: 39 },
  { event: "100 Hari", days: 99 },
  { event: "Pendhak 1", days: 354 },
  { event: "Pendhak 2", days: 707 },
  { event: "1000 Hari", days: 999 },
];

const JAVANESE_DAYS = ["Legi", "Pahing", "Pon", "Wage", "Kliwon"];
const JAVANESE_MONTHS = [
  "Sura",
  "Sapar",
  "Mulud",
  "Bakda Mulud",
  "Jumadil Awal",
  "Jumadil Akhir",
  "Rejeb",
  "Ruwah",
  "Pasa",
  "Sawal",
  "Dulkaidah",
  "Besar",
];

const getJavaneseDayIndex = (date) => {
  // Menghitung hari Jawa sebagai angka berdasarkan siklus 5 hari
  return date.getDay() % 5;
};

const toJavaneseCalendar = (date) => {
  const day = JAVANESE_DAYS[getJavaneseDayIndex(date)];
  const month = JAVANESE_MONTHS[date.getMonth() % 12];
  const year = date.getFullYear();
  const dayIndex = getJavaneseDayIndex(date) + 1; // Menambahkan 1 agar sesuai dengan indeks manusia
  return `${dayIndex}, ${month} ${year}`;
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
