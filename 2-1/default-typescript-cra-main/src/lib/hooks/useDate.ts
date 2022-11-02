const useDate = (date: string) => {
  const WEEKDAY = ["일", "월", "화", "수", "목", "금", "토"];
  const dateObj = new Date(date);
  const month = dateObj.getMonth() + 1;
  const day = dateObj.getDate();
  const weekDay = dateObj.getDay();

  return `${month}월 ${day}일 (${WEEKDAY[weekDay]}) 부터`;
};

export default useDate;
