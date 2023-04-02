import React, { useState } from "react";

const About = () => {
  const aboutContent = `Sure, here's a sample "About Us" section for a school website: Welcome
        to Pratibhansh Play School, where we believe that every student has the
        potential to succeed. Our school is committed to providing a nurturing
        and challenging environment that encourages students to become
        confident, creative, and independent thinkers. We offer a diverse range
        of academic programs that cater to the needs of all students, from
        kindergarten to grade 12. Our experienced teachers are dedicated to
        inspiring and guiding students to achieve their full potential in a safe
        and supportive learning environment. At Pratibhansh Play School, we
        believe that education is not just about academic excellence, but also
        about character development. We instill in our students the values of
        respect, responsibility, empathy, and resilience, which will help them
        become responsible citizens and future leaders. Our school is equipped
        with state-of-the-art facilities and resources, including well-equipped
        classrooms, libraries, science labs, music and art rooms, and sports
        facilities. We also offer a wide range of extracurricular activities,
        including sports teams, clubs, and community service opportunities, to
        provide our students with a well-rounded education. We are proud of our
        school community, which comprises of dedicated teachers, supportive
        parents, and motivated students. We believe that by working together, we
        can create a positive and inclusive learning environment that fosters
        academic excellence and personal growth. Thank you for considering
        Pratibhansh Play School for your child's education. If you have any
        questions or would like to schedule a visit, please do not hesitate to
        contact us.`;
  const dataIncomplete = `Sure, here's a sample "About Us" section for a school website: Welcome
        to Pratibhansh Play School, where we believe that every student has the
        potential to succeed. Our school is committed to providing a nurturing
        and challenging environment that encourages students to become
        confident, creative, and independent thinkers. We offer a diverse range
        of academic programs that cater to the needs of all students, from
        kindergarten to grade 12. Our experienced teachers are dedicated to
        inspiring and guiding students to achieve their full potential in a safe
        and supportive learning environment. At Pratibhansh Play School, we
        believe that education is not just about academic excellence, but also
        about character development. We instill in our students the values of
        respect, responsibility, empathy, and resilience, which will help them
        become responsible citizens and future leaders.`;
  const [hide, setHide] = useState(true);
  return (
    <div className="about" id="about">
      <h1>Why Choose Us</h1>
      <p>{hide ? dataIncomplete : aboutContent}</p>
      <button
        onClick={() => {
          setHide(!hide);
        }}
      >
        {hide ? "See More" : "See Less"}
      </button>
    </div>
  );
};

export default About;
// Sure, here's a sample "About Us" section for a school website:

// Welcome to [School Name], where we believe that every student has the potential to succeed. Our school is committed to providing a nurturing and challenging environment that encourages students to become confident, creative, and independent thinkers.

// We offer a diverse range of academic programs that cater to the needs of all students, from kindergarten to grade 12. Our experienced teachers are dedicated to inspiring and guiding students to achieve their full potential in a safe and supportive learning environment.

// At [School Name], we believe that education is not just about academic excellence, but also about character development. We instill in our students the values of respect, responsibility, empathy, and resilience, which will help them become responsible citizens and future leaders.

// Our school is equipped with state-of-the-art facilities and resources, including well-equipped classrooms, libraries, science labs, music and art rooms, and sports facilities. We also offer a wide range of extracurricular activities, including sports teams, clubs, and community service opportunities, to provide our students with a well-rounded education.

// We are proud of our school community, which comprises of dedicated teachers, supportive parents, and motivated students. We believe that by working together, we can create a positive and inclusive learning environment that fosters academic excellence and personal growth.

// Thank you for considering [School Name] for your child's education. If you have any questions or would like to schedule a visit, please do not hesitate to contact us.
