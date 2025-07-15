import React from "react";

export default function Calendar() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const day = today.getDate();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  const weeks = [];
  let currentDay = 1 - firstDayOfWeek;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if (currentDay > 0 && currentDay <= daysInMonth) {
        week.push(currentDay);
      } else {
        week.push(null);
      }
      currentDay++;
    }
    weeks.push(week);
  }

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  return (
    <div className="w-full max-w-md mt-10 ml-[12.5%] p-4 rounded-xl border border-blue-100 bg-white shadow-inner">
      <h2 className="text-center text-xl font-semibold mb-4">
        {today.toLocaleString("default", { month: "long" }).toUpperCase()} {year}
      </h2>
      <div className="grid grid-cols-7 gap-1 text-center text-sm font-medium text-gray-600">
        {weekDays.map((day) => (
          <div key={day}>{day}</div>
        ))}
        {weeks.flat().map((dayValue, index) => (
          <div
            key={index}
            className={`aspect-square flex items-center justify-center rounded-full ${
              dayValue === day ? "bg-blue-600 text-white font-bold" : "text-gray-800"
            }`}
          >
            {dayValue || ""}
          </div>
        ))}
      </div>
    </div>
  );
}
