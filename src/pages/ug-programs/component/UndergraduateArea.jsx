import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa6";
import { IoBookOutline } from "react-icons/io5";


export default function UndergraduateArea() {
    const files = [
        {
            title: "Scheme of study - 5 years",
            file: "/assets/documents/Five_Year_Scheme_of_Study_First_Year.pdf"
        },
        {
            title: "Scheme of study - 3 years",
            file: "/assets/documents/Three_Year_Scheme_of_Study_First_Year.pdf"
        },
        {
            title: "Syllabus - 5 years",
            file: "/assets/documents/Five_Year_Syllabus_First_Year.pdf"

        },
        {
            title: "Syllabus - 3 years",
            file: "/assets/documents/Three_Year_Syllabus_First_Year.pdf"

        },
        {
            title: "Regulations - 3 years",
            file: "/assets/documents/Regulations_Three_Years.pdf"
        },
        {
            title: "Regulations - 5 years",
            file: "/assets/documents/Regulations_Final _Five_Years.pdf"
        }
    ]
    const university_classic_program_data = [
        {
            id: 1,
            img: "/assets/img/images/course-1.jpg",
            title: "B.A., LL.B Degree",
            description:
                "The Economics Major can be combined  with a Major in another subject in order Double Major Degree.",
            longDesc: "Legal education in India has undergone a dynamic transformation, adapting to the changing needs of society and the legal profession. In response to these evolving demands, SMVEC College of Law offers a comprehensive five-year integrated B.A., LL.B. degree program. This program is designed for students who wish to embark on their legal education immediately after completing higher secondary education, combining the study of law with a strong grounding in humanities.At SMVEC, the B.A., LL.B. program integrates subjects like Political Science, Economics, Sociology, and History with core areas of law such as Constitutional Law, Criminal Law, Civil Law, Corporate Law, and more. This interdisciplinary approach nurtures critical thinking, ethical reasoning, and a deep understanding of the relationship between society and the legal system.",
            category: "Economics",
            shortEligible: "HSC (10+2) CBSE/ISC or any other exam recognised as equivalent",
            years: "five",
            career: [
                "Judicial and civil services",
                "Corporate legal departments",
                "Law firms and consultancies",
                "Banking and financial institutions",
                "Legal academia and research",
                "Independent legal practice and litigation"
            ]
        },
        {
            id: 2,
            img: "/assets/img/images/course-2.jpg",
            title: "B.B.A., LL.B. Degree",
            description:
                "The Economics Major can be combined  with a Major in another subject in order Double Major Degree.",
            category: "Business & Administration",
            longDesc: "In today’s competitive and globalized world, the intersection of business and law has become more crucial than ever. Recognizing this growing demand, SMVEC College of Law offers a forward-thinking B.B.A., LL.B. integrated five-year program, designed to equip students with a strong foundation in both business administration and legal education.This full-time professional degree integrates management principles with core areas of law, providing students with a dual advantage in legal and corporate sectors. It is an ideal choice for those who aspire to build a career in corporate law, legal consultancy, or managerial roles that require legal expertise.",
            shortEligible: "HSC (10+2) CBSE/ISC or any other exam recognised as equivalent",
            years: "five",
            career: [
                "Judicial and civil services",
                "Legal roles in corporate firms and multinational companies",
                "Careers in law consultancy and compliance",
                "Positions in banks, insurance companies, and regulatory bodies",
                "Academics and legal research",
                "Independent legal practice and litigation"
            ]

        },
        {
            id: 3,
            img: "/assets/img/images/course-3.jpg",
            title: "B.Sc LL.B Degree",
            description:
                "The Economics Major can be combined with a Major in another subject in order Double Major Degree.",
            longDesc: "With the rise of science and technology across industries, the legal field increasingly intersects with scientific advancements, particularly in areas like environmental law, forensic science, intellectual property rights, biotechnology, medical law, and cyber law. To meet this emerging need, SMVEC College of Law offers a unique and progressive B.Sc., LL.B. integrated five-year program, tailored for students who wish to pursue legal education with a strong foundation in science.This program is ideal for students from a science background who are interested in blending scientific knowledge with legal expertise to address the complex legal issues of a rapidly advancing technological world.",
            category: "Sciences",
            shortEligible: "HSC (10+2) CBSE/ISC or any other exam recognised as equivalent",
            years: "five",
            career: [
                "Legal experts in environmental, medical, and cyber law",
                "Legal officers in scientific research organizations and tech companies",
                "Advisors in intellectual property rights and patent law",
                "Roles in forensic science, investigative agencies, and regulatory bodies",
                "Opportunities in judiciary, civil services, and academic research",
                "Independent legal practice with a science-focused specialization"
            ]
        },
        {
            id: 4,
            img: "/assets/img/images/course-4.jpg",
            title: "LL.B Degree",
            description:
                "The Economics Major can be combined with a Major in another subject in order Double Major Degree.",
            category: "Sciences",
            longDesc: "The LL.B. (Bachelor of Laws) is a prestigious and intensive three-year professional degree program designed for graduates from any discipline who wish to pursue a career in law. Offered by SMVEC College of Law, this program is ideal for individuals who have completed their undergraduate studies and now aim to enter the legal profession with strong academic and ethical grounding.Whether you come from a background in science, commerce, arts, or engineering, the LL.B. program equips you with comprehensive legal knowledge, practical skills, and courtroom experience necessary for a successful legal career.",
            shortEligible: "HSC (10+2) CBSE/ISC or any other exam recognised as equivalent",
            years: "three",
            career: [
                "District and High Courts",
                "Corporate legal departments",
                "Law firms and legal consultancies",
                "Public sector undertakings",
                "Judiciary and civil services",
                "Legal journalism, academia, and research institutions"
            ]
        },
    ];

    return (
        <section className="tp-undergraduate-area grey-bg pb-85">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="tp-undergraduate-program-box pb-85">
                            <div
                                className="tp-undergraduate-program-heading"
                                style={{ backgroundImage: "url(/assets/img/cta/heading-bg.png)" }}
                            >
                                <h4 className="tp-undergraduate-program-title">
                                    <span>
                                        <IoBookOutline />
                                    </span>{" "}
                                    Our Programs
                                </h4>
                            </div>
                            <div className="tp-undergraduate-program-content">
                                    {university_classic_program_data.map((p) => (
                                        <div key={p.id} >
                                            <Link href={`/program-details/${p.id}`}>
                                                <div className="tp-undergraduate-program-list">
                                                    <div className="divone">
                                                        <img src="https://i0.wp.com/arts.smvec.ac.in/wp-content/uploads/2022/06/B.com-professional-accounting-1.jpg" alt="" width={350}
                                                             />
                                                    </div>
                                                    <div className="divtwo">
                                                        <h4>{p.title}</h4>
                                                        <p>{p.years == 'five' ? "5" : "3"} Years</p>

                                                        <p>{p.description}</p>
                                                    </div>
                                                    <div className="right-btn">
                                                        <button>View More<FaChevronRight /></button>
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    ))}
                            </div>
                        </div>
                        <div className="tp-undergraduate-program-box pb-85">
                            <div
                                className="tp-undergraduate-program-heading"
                                style={{ backgroundImage: "url(/assets/img/history/undergraduate/heading-bg.png)" }}
                            >
                                <h4 className="tp-undergraduate-program-title">
                                    <span>
                                        <IoBookOutline />
                                    </span>{" "}
                                    Program Structure
                                </h4>
                            </div>
                            <div className="tp-undergraduate-program-content">
                                <div className="row">
                                    {files.map((p, index) => (
                                        <div key={index} >
                                            <Link target="_blank" href={`${p.file}`}>
                                                <div className="document-program">

                                                    <div className="divtwo">
                                                        <h4>{p.title}</h4>
                                                    </div>
                                                    <div className="right-btn">
                                                        <button><FaChevronRight /></button>
                                                    </div>
                                                </div>
                                            </Link>
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
