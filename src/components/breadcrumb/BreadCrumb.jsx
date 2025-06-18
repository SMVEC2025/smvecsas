
import { Link } from "react-router-dom";

export default function BreadcrumbTwo({ title, subtitle,admission }) {
  return (
    <section className="tp-breadcrumb__area pt-160 pb-150 p-relative z-index-1 fix">
      <div
        className="tp-breadcrumb__bg overlay"
        style={{backgroundImage:"url(/assets/img/breadcrumb/campus-breadcrumb.jpg)" }}
      ></div>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-sm-12">
            <div className="tp-breadcrumb__content">
              <div className="tp-breadcrumb__list inner-after">
                <span className="white">
                  <Link href="/">
 <svg
      width="17"
      height="14"
      viewBox="0 0 17 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.07207 0C8.19331 0 8.31107 0.0404348 8.40664 0.114882L16.1539 6.14233L15.4847 6.98713L14.5385 6.25079V12.8994C14.538 13.1843 14.4243 13.4574 14.2225 13.6589C14.0206 13.8604 13.747 13.9738 13.4616 13.9743H2.69231C2.40688 13.9737 2.13329 13.8603 1.93146 13.6588C1.72962 13.4573 1.61597 13.1843 1.61539 12.8994V6.2459L0.669148 6.98235L0 6.1376L7.7375 0.114882C7.83308 0.0404348 7.95083 0 8.07207 0ZM8.07694 1.22084L2.69231 5.40777V12.8994H13.4616V5.41341L8.07694 1.22084Z"
        fill="currentColor"
      />
    </svg>                  </Link>
                </span>
                {admission && <span className="white">Admission</span>}
                <span className="white">{subtitle}</span>
              </div>
              <h3 className="tp-breadcrumb__title color">
                {title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
