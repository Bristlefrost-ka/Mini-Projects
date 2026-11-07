function getWeekday(dateString) {

  const [year, month, day] = dateString.split('-').map(Number);
  
  const date = new Date(Date.UTC(year, month - 1, day));
  
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  
  return daysOfWeek[date.getUTCDay()];
}
console.log(getWeekday("3000-03-15"));
