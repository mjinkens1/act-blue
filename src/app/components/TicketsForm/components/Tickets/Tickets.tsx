import { TicketWithQuantityT } from "../../../../types";

import Ticket from "../Ticket/Ticket";

type PropsT = {
  tickets: TicketWithQuantityT[];
  onQuantityChange: (ticketType: string, quantity: number) => void;
};

function Tickets(props: PropsT) {
  const { tickets, onQuantityChange } = props;

  return (
    <>
      {tickets.map((ticket) => (
        <Ticket
          key={ticket.type}
          ticket={ticket}
          onQuantityChange={onQuantityChange}
        />
      ))}
    </>
  );
}

export default Tickets;
