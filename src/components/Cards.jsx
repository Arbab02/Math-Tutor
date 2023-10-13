import calc from "../assets/Calculator.jpg";
import mean from "../assets/Mean.jpg";
import uc from "../assets/UnitConvertor.jpg";
import hypotenus from "../assets/Hypotenus.jpg";


const Cards = () => {
  return (
    <>
      <h1 className="border-t-1 border-b-2 text-center text-white bg-black py-3 text-[3rem]">
        Our Tools
      </h1>
      <section className="text-gray-400 body-font bg-black">
        <div className="container px-5 py-10 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={calc}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Chichen Itza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={mean}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Colosseum Roma
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={uc}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  Great Pyramid of Giza
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={hypotenus}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={hypotenus}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={hypotenus}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={hypotenus}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" bg-gray-900 p-6 rounded-lg">
                <img
                  className="h-40 rounded w-full object-cover object-center mb-6"
                  src={hypotenus}
                  alt="content"
                />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                  SUBTITLE
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-4">
                  San Francisco
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waistcoat.
                  Distillery hexagon disrupt edison bulbche.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
