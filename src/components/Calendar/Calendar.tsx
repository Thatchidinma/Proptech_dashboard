import {
  Calendar as ReactBigCalendar,
  momentLocalizer,
  Navigate,
  NavigateAction
} from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./calendar.css";
import { ArrowLeft2, ArrowRight2 } from "iconsax-reactjs";

function CalendarToolbar({ date, onNavigate }: {
  date: Date
  onNavigate: (action: NavigateAction, newDate?: Date) => void
}) {
  return (
    <div className="flex items-center justify-center gap-7.25 mb-[25.67px]">
      {/* Prev */}
      <button
        type="button"
        onClick={() => onNavigate(Navigate.PREVIOUS)}
        className=" rounded-md hover:bg-gray-100 transition cursor-pointer"
      >
        <ArrowLeft2 color="#98a2b3" variant="Bold" />
      </button>

      {/* Month + Year */}
      <div className="text-base font-semibold text-white">
        {moment(date).format("MMMM YYYY")}
      </div>

      {/* Next */}
      <button
        type="button"
        onClick={() => onNavigate(Navigate.NEXT)}
        className=" rounded-md hover:bg-gray-100 transition cursor-pointer"
      >
        <ArrowRight2 color="#98a2b3" variant="Bold" />
      </button>
    </div>
  )
}


const localizer = momentLocalizer(moment);

const Calendar = () => {

  return (
    <div className='py-4.25 px-6.25 h-full'>
      <ReactBigCalendar
        className=''
        localizer={localizer}
        views={["month"]}
        showMultiDayTimes
        components={{
          toolbar: CalendarToolbar,
          header: ({ date }) => (
            <span className="">
              {moment(date).format("ddd").toUpperCase()}
            </span>
          ),
        }}
        style={{ cursor: "pointer" }}
        showAllEvents
      />
    </div>
  )
}

export default Calendar