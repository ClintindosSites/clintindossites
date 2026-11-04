const HeroHosts = () => {
  return (
    <section className="hero relative mx-auto min-h-screen p-10 bg-[linear-gradient(90deg,rgba(0,0,0,0.22)_0%,rgba(0,0,0,0.78)_40%,rgba(0,0,0,0.35)_100%),linear-gradient(0deg,rgba(0,0,0,0.65)_0%,transparent_45%,rgba(0,0,0,0.2)_100%),url('/hero.webp')] bg-no-repeat bg-cover bg-center flex items-center justify-center">
      {" "}
      <div className="container max-w-300 flex gap-8 justify-center items-center">
        <div className="heroText flex flex-col text-center gap-8 flex-1 justify-between my-0 mx-0 p-0 ">
          <h1 className="title-purple text-4xl font-title">
            Encontre a hospedagem ideal para seu site, sistema ou negócio
            digital.
          </h1>

          <p className="text-lg text-gray-300">
            Compare soluções de hospedagem, VPS e e-mail profissional para
            colocar seu projeto no ar com mais segurança, desempenho e o melhor
            custo-benefício para sua necessidade.
          </p>

          <div className="heroList text-center justify-center items-center flex flex-col gap-6 text-sm text-gray-300">
            <span>
              <div className="badgeHeroList">✔</div>
              Para quem está começando ou já tem um negócio online.
            </span>

            <span>
              <div className="badgeHeroList">✔</div>Opções para sites,
              aplicações e projetos profissionais.
            </span>
            <span>
              <div className="badgeHeroList">✔</div> Indicações para diferentes
              necessidades e orçamentos.
            </span>
          </div>
        </div>

        {/*<div className="flex-1">
          <Image src="" />
        </div>*/}
      </div>
    </section>
  );
};

export default HeroHosts;
