import "./band-form.css";

import { BandInfo, EventInfo, TicketForm } from "./components";

function BandForm({ band }) {
  return (
    <div className="band-form">
      <EventInfo band={band} />

      <section className="band-form__content">
        <BandInfo band={band} />

        <TicketForm band={band} />
      </section>
    </div>
  );
}

export default BandForm;
