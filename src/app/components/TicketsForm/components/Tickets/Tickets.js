import Ticket from "../Ticket/Ticket";

function Tickets(props) {
  const { tickets, onQuantityChange } = props;

  return tickets.map((ticket) => (
    <Ticket
      key={ticket.type}
      ticket={ticket}
      onQuantityChange={onQuantityChange}
    />
  ));
}

export default Tickets;
