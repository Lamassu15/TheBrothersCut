import Members from "../components/Members";
import { TEAM_H2, TEAM_PARAGRAPH } from "../constans";

function Team() {
  return (
    <>
      <section className="container mx-auto px-8" id="team">
        <h1 className="text-start heading-1 uppercase leading-10 tracking-widest mt-20 mb-20">
          team
        </h1>
        <div className="flex flex-col items-center text-center">
          <div className="w-full lg:w-3/4 mb-10">
            <h2 className="heading-2 mb-5">{TEAM_H2}</h2>
            <p className="paragraph">{TEAM_PARAGRAPH}</p>
          </div>
          <Members></Members>
        </div>
      </section>
    </>
  );
}

export default Team;
