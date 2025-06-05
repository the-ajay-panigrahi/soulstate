// ================================================
// 📅 CALENDAR COMPONENT FLOW:
// This component renders a monthly calendar grid for a given month/year.
// It highlights current date and shows mood levels using colored backgrounds.
// - Uses demo mode or static mood data for colors.
// - Shows a full grid with leading/trailing empty cells.
// ================================================

import React from 'react'

// 🔄 Import mood color styles and base mood ratings
import { gradients, baseRating } from "@/utils/index.js"

// 📆 Map full month names to short 3-letter forms
const months = {
    'January': 'Jan', 'February': 'Feb', 'March': 'Mar', 'April': 'Apr',
    'May': 'May', 'June': 'Jun', 'July': 'Jul', 'August': 'Aug',
    'September': 'Sept', 'October': 'Oct', 'November': 'Nov', 'December': 'Dec'
}

// 📍 Get today's full date (used to highlight current day)
const now = new Date()

// 🗓️ List of weekdays used as column headers
const dayList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

// 📊 Mood data (for demo off mode) → day number mapped to mood rating (1 to 5)
const data = {
    "15": 2, "16": 4, "17": 1, "18": 3, "19": 5,
    "20": 2, "21": 4, "22": 1, "23": 3, "24": 5,
}

// 🧠 Main Calendar Component
export default function Calendar({ demo }) {

    const year = 2025        // ✅ Set the year (can be dynamic later)
    const month = "June"     // ✅ Set the month (as string)

    // 🕐 Create a Date object for the 1st of the selected month
    const monthNow = new Date(year, Object.keys(months).indexOf(month), 1)

    // 📍 Get the day of the week for the 1st of month (0 = Sunday, 6 = Saturday)
    const firstDayOfMonth = monthNow.getDay()

    // 🔢 Get the number of days in selected month (e.g., 30 for June)
    const daysInMonth = new Date(year, Object.keys(months).indexOf(month) + 1, 0).getDate()

    // 🧮 Total grid cells required (including blank cells before month starts)
    const daysToDisplay = firstDayOfMonth + daysInMonth

    // 🧱 Calculate total number of rows (weeks) required in the calendar grid
    const numRows = Math.floor(daysToDisplay / 7) + (daysToDisplay % 7 ? 1 : 0)

    return (
        <div className='flex flex-col overflow-hidden gap-1 py-4 sm:py-6 md:py-10'>
            {
                // 🔁 Loop through each row (week)
                [...Array(numRows).keys()].map((row, rowIndex) => {
                    return (
                        <div key={rowIndex} className='grid grid-cols-7 gap-1'>
                            {
                                // 🔁 Loop through 7 days in a week
                                dayList.map((dayOfWeek, dayOfWeekIndex) => {

                                    // 📆 Calculate which day number this cell represents
                                    let dayIndex = (rowIndex * 7) + dayOfWeekIndex - (firstDayOfMonth - 1)

                                    // ✅ Check if the day is valid (falls within current month)
                                    let dayDisplay = dayIndex > daysInMonth
                                        ? false                                       // More than max days? Hide
                                        : (row === 0 && dayOfWeekIndex < firstDayOfMonth)
                                            ? false                                     // Before first day? Hide
                                            : true                                      // Valid day? Show

                                    // 🌟 Check if this day is today (used to highlight border)
                                    let isToday = dayIndex === now.getDate()

                                    if (!dayDisplay) {
                                        // ⬜ Render blank box (filler before/after month)
                                        return <div className='bg-white' key={dayOfWeekIndex} />
                                    }

                                    // 🎨 Choose color:
                                    // - If demo mode, use baseRating
                                    // - Else, use actual mood data if available
                                    // - Else, white (empty mood)
                                    let color = demo
                                        ? gradients.indigo[baseRating[dayIndex]]       // Demo gradient
                                        : dayIndex in data
                                            ? gradients.indigo[data[dayIndex]]           // Mood gradient from data
                                            : 'white'                                    // Default white

                                    // 📦 Render the actual day cell
                                    return (
                                        <div
                                            key={dayOfWeekIndex}
                                            style={{ background: color }}
                                            className={
                                                'text-xs sm:text-sm border border-solid p-2 flex items-center gap-2 justify-between rounded-lg ' +
                                                (isToday ? ' border-indigo-400' : ' border-indigo-100') +     // Highlight today
                                                (color === 'white' ? ' text-indigo-400' : ' text-white')     // Adjust text color
                                            }
                                        >
                                            <p>{dayIndex}</p>  {/* Show date number */}
                                        </div>
                                    )
                                })
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}
