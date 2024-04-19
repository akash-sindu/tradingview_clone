function UsStocks({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="usStocks"
      className="h-[100vh] shrink-0 flex flex-col items-center justify-center bg-[#FFFFFF]  dark:bg-[#000000]"
    >
      <p className="text-inherit dark:text-slate-50">US stocks</p>
    </section>
  );
}

export default UsStocks;
