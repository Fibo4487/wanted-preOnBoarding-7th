const dateToKorean = (date: Date | string) => {
  if (typeof date === "string") {
    date = new Date(date);
  }
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}년 ${month}월 ${day}일`;
};

export default dateToKorean;
