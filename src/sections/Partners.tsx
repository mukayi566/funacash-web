import Ecocash from "../assets/logo-wall/ecocash.png";
import Mtn from "../assets/logo-wall/mtn.png";
import Airtel from "../assets/logo-wall/airtel.png";
import LogoWall from "../common/LogoWall";
import Orangepill from "../assets/logo-wall/orange-pill.png"

function Partners() {
  return (
    <section id="partners" className="mt-20 flex flex-col bg-gray-50 py-20">
      <article className="mb-10 w-full px-8 text-center lg:px-12">
        <h2 className="mb-4 text-4xl font-semibold text-gray-800">
          Transact seamlessly with...
        </h2>
        <p>
          Connect your other accounts to FunaCash seamlessly. FunaCash supports
          vast
          <br />
          integrations with other payment platforms like Airtel, Paynow,
          payoneer and others
        </p>
      </article>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Ecocash}
          alt1="Ecocash logo"
        />
        <LogoWall
          src1={Mtn}
          alt1 ="Mtn logo"
        />
      </div>
      <div className="xl:flex xl:justify-center">
        <LogoWall
          src1={Orangepill}
          alt1="Orange-pill logo"
        />
        <LogoWall
        src1={Airtel}
        alt1="Airtel logo"
        />
      </div>
    </section>
  );
}

export default Partners;
