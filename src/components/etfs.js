function ETFs({ innerRef }) {
  return (
    <section
      ref={innerRef}
      id="etfsSection"
      className="h-[100vh] shrink-0 flex flex-col items-center justify-center dark:bg-[#020617]"
    >
      <p className="text-inherit dark:text-slate-50">ETFs</p>
    </section>
  );
}

export default ETFs;
