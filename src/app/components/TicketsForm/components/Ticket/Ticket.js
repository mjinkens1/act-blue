import "./ticket.css";

import { Price } from "../";

function Ticket(props) {
  const { ticket, onQuantityChange } = props;

  const handleQuantityChange = (event) => {
    onQuantityChange(ticket.type, event.target.value);
  };

  return (
    <div key={ticket.type} className="ticket">
      <div className="ticket__info">
        <h3 className="ticket__name">{ticket.name}</h3>
        <p className="ticket__description">{ticket.description}</p>

        <Price amount={ticket.cost} />
      </div>

      <input
        type="number"
        className="ticket__quantity"
        min={0}
        value={ticket.quantity}
        onChange={handleQuantityChange}
      />
    </div>
  );
}

export default Ticket;
