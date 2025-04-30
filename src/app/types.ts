export type TicketT = {
  type: string;
  name: string;
  description: string;
  cost: number; // in cents
};

export type BandT = {
  name: string;
  id: string;
  date: number; // Unix timestamp (ms)
  location: string;
  description_blurb: string; // sanitized/rendered as HTML
  imgUrl: string;
  ticketTypes: TicketT[];
};

export type TicketWithQuantityT = TicketT & {
  quantity: number;
};

export type PaymentDetailsT = {
  firstName: string;
  lastName: string;
  address: string;
  cardNumber: string;
  cardExpiration: string;
  cardCVV: string;
};
