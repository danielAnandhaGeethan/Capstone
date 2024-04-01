const Transactions = ({ walletAddress, transactions }) => {
  return (
    <div className="shadow-2xl px-20 py-10 border border-white/20 rounded-xl">
      <div className="flex flex-col gap-9">
        <h1 className="text-center text-2xl font-semibold">
          Accessible Doctors
        </h1>
        <div className="flex flex-col gap-5 w-full">
          {transactions.map((transaction, index) => (
            <div className="text-gray-900 -ml-8" key={index}>
              {transaction}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
