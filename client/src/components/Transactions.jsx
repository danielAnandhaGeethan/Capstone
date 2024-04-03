const Transactions = ({ transacts }) => {
  return (
    <div className="shadow-2xl px-20 py-10 border border-gray-300 bg-white/40 rounded-xl">
      <div className="flex flex-col gap-9">
        <h1 className="text-center text-2xl font-semibold">
          Accessible Doctors
        </h1>
        <div className="flex flex-col gap-8 w-full">
          {transacts.map((transact, index) => (
            <div className="text-black -ml-8" key={index}>
              ⫸ {transact}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
