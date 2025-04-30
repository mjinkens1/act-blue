import "./ticket.css";

import { Price } from "..";

import { TicketWithQuantityT } from "../../../../types";

type PropsT = {
  ticket: TicketWithQuantityT;
  onQuantityChange: (ticketType: string, quantity: number) => void;
};

function Ticket(props: PropsT) {
  const { ticket, onQuantityChange } = props;

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onQuantityChange(ticket.type, parseInt(event.target.value));
  };

  return (
    <div className="ticket">
      <div className="ticket__info">
        <h3 className="ticket__name">{ticket.name}</h3>
        <p className="ticket__description">{ticket.description}</p>

        <Price className="ticket__cost" amount={ticket.cost} />
      </div>

      <input
        aria-label={`Quantity of ${ticket.name}`}
        type="number"
        name={ticket.type}
        className="ticket__quantity"
        min={0}
        value={ticket.quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
}

export default Ticket;
