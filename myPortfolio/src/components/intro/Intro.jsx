import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import img from '../../assets/myPhoto.jpg'


const Intro = () => {
  return (
    <section id="about">
      <h5><i>Software Engineer</i></h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="Danladi Etu" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>1 year</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Completed Projects</small>
            </article>
          </div>
          <p>
            I attended Federal University of Technolgy, Minna
            as an undergraduate where
            I  obtained a B.Tech in Biochemistry. Thereafter,I
            completed  my National
            Youth Service  Corps(NYSC) between May, 2017 -
            April, 2018. During and after my NYSC,
            I owe a huge part of my growth and developmet to
            being a tutor. It was amazing  to impact
            people's life  positively and at  the sametime,
            growing and devloping yourself.
            Prior to my scholarship offer to study Software
            Engineering at ALX,
            I had developed a strong passion for programming.
            I started my transition with self learning when I Studied a
            little bit of HTML, CSS, MySQL and Javascript.
            ALX gave me the full opportunity to actualize my
            dream. I was admitted into ALX Software Engineering
            program where I completed the nine-month computer
            science, programming and full-stack web development curriculum. 
            Thereafter, I decided to major in backend as a
            devloper for another three months, bringing it to total
            of one year.
          </p>
          <a href="#contact" className="btn btn-primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
