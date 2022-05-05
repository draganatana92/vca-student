import React from "react";
import { FooterBottomData, FooterWidgets } from "@/data";
import FooterShape from "@/images/shape/footer-shape.png";
import Img from "@/components/img";

const Footer = () => {
  return (
    <footer className="footer_area">
      <div className="footer_content section_padding">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <div className="footer_textwidget textwidget">
                <h2>
                  {FooterWidgets.about.title}
                </h2>
                <p>{FooterWidgets.about.text}</p>
                <h4>{FooterWidgets.about.tagLine}</h4>
                <span className="number">{FooterWidgets.about.phone}</span>
              </div>
            </div>
            <div className="col-md-3 col-sm-3">
              <h2>{FooterWidgets.linkOne.title}</h2>
              <ul className="footer_link">
                {FooterWidgets.linkOne.menu.map(({ lable, url }, index) => (
                  <li key={`footer-link-one-${index}`}>
                    <a href={url}>{lable}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-3 col-sm-3">
              <ul className="footer_link extra_mt">
                {FooterWidgets.linkTwo.menu.map(({ lable, url }, index) => (
                  <li key={`footer-link-two-${index}`}>
                    <a href={url}>{lable}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="copyright_area">
            <div className="row">
              <div className="col-md-8 col-sm-6 copyright_text">
                <p>
                  &copy; copyright {new Date().getFullYear()} by VCA Hospitals
                </p>
              </div>
              <div className="col-md-4 col-sm-6 copyright_social text-end">
                <ul>
                  {FooterBottomData.social.map(({ icon, url }, index) => (
                    <li key={`footer-social-link-${index}`}>
                      <a href={url}>
                        <i className={`fa ${icon}`}></i>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
