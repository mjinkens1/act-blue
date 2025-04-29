import { CalendarDays, MapPin } from "lucide-react";

import "./event-info.css";

function EventInfo(props) {
  const { band } = props;

  const formattedDate = new Date(band.date).toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <section className="event-info">
      <h1 className="event-info__title">{band.name}</h1>

      <div className="event-info__items">
        <div className="event-info__item">
          <CalendarDays size={18} />
          <p> {formattedDate}</p>
        </div>

        <div className="event-info__item">
          <MapPin size={18} />
          <p>{band.location}</p>
        </div>
      </div>
    </section>
  );
}

export default EventInfo;
