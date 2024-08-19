const useDate = () => {
  const currendate = new Date();

  const days = ["ahad", "senin", "selasa", "rabu", "kamis", "jum'at", "sabtu"];

  const month = [
    "januari",
    "febuari",
    "maret",
    "april",
    "mei",
    "juni",
    "juli",
    "agustus",
    "september",
    "oktober",
    "november",
    "desember",
  ];

  const dayName = days[currendate.getDate()];
  const date = currendate.getDate();
  const monthName = month[currendate.getMonth()];
  const year = currendate.getFullYear();
  return { dayName, date, monthName, year };
};

export default useDate;