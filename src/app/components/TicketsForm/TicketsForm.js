import { useState } from "react";

import "./tickets-form.css";

import { Price, Tickets } from "./components";

function TicketsForm(props) {
  const { band } = props;

  const [tickets, setTickets] = useState(
    band.ticketTypes.map((ticket) => ({
      ...ticket,
      quantity: 0,
    }))
  );

  const total = tickets.reduce(
    (acc, ticket) => acc + ticket.cost * ticket.quantity,
    0
  );

  const handleQuantityChange = (ticketType, quantity) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.type === ticketType ? { ...ticket, quantity } : ticket
      )
    );
  };

  return (
    <section className="tickets-form">
      <h2 className="tickets-form__title">Select Tickets</h2>

      <form className="tickets-form__form">
        <Tickets tickets={tickets} onQuantityChange={handleQuantityChange} />

        <div className="tickets-form__total">
          <h3>Total</h3>

          <Price amount={total} />
        </div>
      </form>
    </section>
  );
}

export default TicketsForm;
