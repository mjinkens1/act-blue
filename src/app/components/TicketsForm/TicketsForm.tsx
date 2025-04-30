import { useState } from "react";

import "./tickets-form.css";

import { Price, Tickets, Payment } from "./components";

import { BandT, TicketWithQuantityT } from "../../types";

const stripCardValue = (value: string) => {
  return value.replace(/\s/g, "");
};

type PropsT = {
  band: BandT;
};

function TicketsForm(props: PropsT) {
  const { band } = props;

  const [tickets, setTickets] = useState<TicketWithQuantityT[]>(
    band.ticketTypes.map((ticket) => ({ ...ticket, quantity: 0 }))
  );

  const [payment, setPayment] = useState({
    firstName: "",
    lastName: "",
    address: "",
    cardNumber: "",
    cardExpiration: "",
    cardCVV: "",
  });

  const total = tickets.reduce(
    (acc, ticket) => acc + ticket.cost * ticket.quantity,
    0
  );

  const hasSelectedTickets = tickets.some((ticket) => ticket.quantity > 0);

  // For the purposes of the take home, validateion is limited. Full form validation
  // (e.g., card number checksum, expiration date validation) would be added before
  // accepting real user input in a production system.
  const hasValidPayment =
    payment.firstName.length > 0 &&
    payment.lastName.length > 0 &&
    payment.address.length > 0 &&
    stripCardValue(payment.cardNumber).length === 16 &&
    stripCardValue(payment.cardExpiration).length === 5 &&
    payment.cardCVV.length === 3;

  const isFormValid = hasSelectedTickets && hasValidPayment;

  const handleQuantityChange = (ticketType: string, quantity: number) => {
    setTickets((prevTickets) =>
      prevTickets.map((ticket) =>
        ticket.type === ticketType ? { ...ticket, quantity } : ticket
      )
    );
  };

  const handlePaymentChange = (field: string, value: string) => {
    setPayment((prevPayment) => ({ ...prevPayment, [field]: value }));
  };

  // In a production system, sensitive payment information (e.g., credit card numbers, expiration dates)
  // would not be handled directly by the application. Instead, a secure third-party provider (such as Stripe)
  // would be used to collect and tokenize payment data through embedded secure fields (e.g., Stripe Elements),
  // ensuring PCI compliance and end-to-end encryption."
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.warn(
      "⚠️ Note: Payment data would be securely tokenized and processed in production."
    );
    console.log({
      tickets,
      payment: {
        ...payment,
        cardNumber: stripCardValue(payment.cardNumber).length,
        cardExpiration: stripCardValue(payment.cardExpiration).length,
      },
    });
  };

  return (
    <section className="tickets-form">
      <h2 className="tickets-form__title">Select Tickets</h2>

      <form
        data-testid="tickets-form"
        className="tickets-form__form"
        onSubmit={handleSubmit}
      >
        <Tickets tickets={tickets} onQuantityChange={handleQuantityChange} />

        <div className="tickets-form__total">
          <h3 className="tickets-form__total-title">TOTAL</h3>

          <Price amount={total} />
        </div>

        <Payment
          isFormValid={isFormValid}
          payment={payment}
          onChange={handlePaymentChange}
        />
      </form>
    </section>
  );
}

export default TicketsForm;
