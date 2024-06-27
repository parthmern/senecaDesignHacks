import { cn } from "../../utils/cn";
import moment from "moment";

export function EventCardDemo({ event }) {
  console.log(event?.img);
  return (
    <div className="max-w-xs w-full group/card">
      <div
        style={{ backgroundImage: `url(${event?.img})` }}
        className={
          "cursor-pointer overflow-hidden relative card h-96 rounded-md shadow-xl max-w-sm mx-auto flex flex-col justify-between p-4 bg-cover"
        }
      >
        <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
        <div className="flex flex-row items-center space-x-4 z-10">
          <img
            height="100"
            width="100"
            alt="Avatar"
            src={event?.img}
            className="h-10 w-10 rounded-full border-2 object-cover"
          />
          <div className="flex flex-col">
            <p className="font-normal textShadow text-base text-gray-50 relative z-10">
              SDC
            </p>
            <p className="text-sm productFont text-black px-2  bg-white rounded">{moment(event?.createdAt).format('MMMM D, YYYY')}</p>
          </div>
        </div>
        <div className="text content">
          <h1 className="font-bold productFont capitalize textShadow text-xl md:text-2xl text-gray-50 relative z-10">
            {event?.name}
          </h1>
          <div
          data-orientation="horizontal"
          role="none"
          className="mb-8 bg-white shrink-0 bg-border h-[2px] w-full  "
        ></div>
          <p className="font-normal productFont capitalize textShadow text-sm text-gray-50 relative z-10 my-4">
            {event?.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
