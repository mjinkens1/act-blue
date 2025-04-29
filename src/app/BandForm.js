import "./band-form.css";

import { BandInfo, EventInfo, TicketsForm } from "./components";

function BandForm(props) {
  const { band } = props;

  return (
    <div className="band-form">
      <EventInfo band={band} />

      <section className="band-form__content">
        <BandInfo band={band} />

        <TicketsForm band={band} />
      </section>
    </div>
  );
}

export default BandForm;
