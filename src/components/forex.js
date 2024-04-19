function Forex({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="foxeCurrencies"
      className="h-[100vh] shrink-0 flex flex-col items-center justify-center dark:bg-[#020617]"
    >
      <p className="text-inherit dark:text-slate-50">Forex and currencies</p>
    </section>
  );
}

export default Forex;
