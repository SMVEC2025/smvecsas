import { GoArrowRight } from "react-icons/go";
import { GiOpenBook } from "react-icons/gi";
import { PiBooksBold } from "react-icons/pi";
import { Link } from "react-router-dom";
const undergraduatePrograms = [
  {
    id: 1,
    programs: [
      "Accounting",
      "Advertising",
      "Environmental Studies",
      "Art History",
      "Design",
      "Chemistry",
      "International Business",
      "Economics",
    ],
  },
  {
    id: 2,
    programs: [
      "Engineering",
      "English",
      "Computer Science",
      "Finance",
      "Architecture",
      "Fine Arts",
      "Biology",
      "Management",
    ],
  },
  {
    id: 3,
    programs: [
      "Marketing",
      "Environmental Science",
      "Politics",
      "Psychology",
      "Minors",
      "Comparative Literature",
      "Philosophy",
    ],
  },
];

export default function Programs() {
  return (
    <section className="tp-undergraduate-area grey-bg pb-85">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-undergraduate-program-box pb-85">
              <div
                className="tp-undergraduate-program-heading"
                style={{ backgroundImage: "url(/assets/img/history/undergraduate/heading-bg.png)" }}
              >
                <h4 className="tp-undergraduate-program-title">
                  <span>
                    <PiBooksBold />
                  </span>{" "}
                  Major Programs
                </h4>
              </div>
              <div className="tp-undergraduate-program-content">
                <div className="row">
                  {undergraduatePrograms.map((p) => (
                    <div key={p.id} className="col-lg-4 col-md-6">
                      <div className="tp-undergraduate-program-list">
                        <ul>
                          {p.programs.map((pm) => (
                            <li key={pm}>
                              <Link href="/university-about">
                                {pm}{" "}
                                <span>
                                  <GoArrowRight />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="tp-undergraduate-program-box">
              <div
                className="tp-undergraduate-program-heading"
                style={{ backgroundImage: "url(/assets/img/cta/heading-bg.png)" }}
              >
                <h4 className="tp-undergraduate-program-title">
                  <span>
                    <GiOpenBook />
                  </span>{" "}
                  Minors Programs
                </h4>
              </div>
              <div className="tp-undergraduate-program-content">
                <div className="row">
                  {undergraduatePrograms.map((p) => (
                    <div key={p.id} className="col-lg-4 col-md-6">
                      <div className="tp-undergraduate-program-list">
                        <ul>
                          {p.programs.map((pm) => (
                            <li key={pm}>
                              <Link href="/university-about">
                                {pm}{" "}
                                <span>
                                  <GoArrowRight />
                                </span>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
