const formatUsd = (cents: number) => {
  const dollars = cents / 100;

  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(dollars);
};

type PropsT = {
  amount: number;
  className?: string;
};

function Price(props: PropsT) {
  const { className, amount } = props;

  return <span className={className}>{formatUsd(amount)}</span>;
}

export default Price;
