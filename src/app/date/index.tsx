export function Date() {
  return (
    <section className="flex h-screen flex-col items-center justify-center bg-[#020204] text-zinc-50">
      <h1 className="text-[14rem]">1994</h1>

      <div className="my-14 grid grid-cols-3 gap-x-10 text-center">
        <div>
          <h3 className="text-sm font-semibold">Lançamento no Japão</h3>
          <h2 className="text-2xl">3 de dezembro de 1994</h2>
        </div>

        <div>
          <h3 className="text-sm font-semibold">
            Lançamento na América do Norte
          </h3>
          <h2 className="text-2xl">9 de setembro de 1995</h2>
        </div>

        <div>
          <h3 className="text-sm font-semibold">Lançamento na Europa</h3>
          <h2 className="text-2xl">29 de setembro de 1995</h2>
        </div>
      </div>

      <p className="mx-96 text-center">
        Nossa jornada começa há 30 anos com o console PlayStation®. Lançado no
        Japão em 3 de dezembro de 1994, o primeiro console PlayStation virou um
        sucesso imediato e acabou se tornando a novidade da E3 1995, sendo
        lançado mais tarde naquele ano na América do Norte e na Europa.
      </p>
    </section>
  );
}
