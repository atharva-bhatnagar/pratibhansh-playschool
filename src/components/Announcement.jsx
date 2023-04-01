import React from "react";

const Announcement = () => {
  const announcements = [
    {
      date: "MARCH 19",
      heading: "Announcement 1",
      content: `this is the first announcement Dear Parents and Guardians,

We are excited to inform you that our school will be organizing a trip to the local zoo on [insert date]. This trip is a great opportunity for our students to learn about different animals and their habitats, and to appreciate the beauty and diversity of nature.`,
    },
    {
      date: "MARCH 20",
      heading: "Announcement 2",
      content: `"this is the second announcement" Dear Parents and Guardians,

We are excited to inform you that our school will be organizing a trip to the local zoo on [insert date]. This trip is a great opportunity for our students to learn about different animals and their habitats, and to appreciate the beauty and diversity of nature.`,
    },
    {
      date: "MARCH 21",
      heading: "Announcement 3",
      content: `"this is the third announcement Dear Parents and Guardians,

We are excited to inform you that our school will be organizing a trip to the local zoo on [insert date]. This trip is a great opportunity for our students to learn about different animals and their habitats, and to appreciate the beauty and diversity of nature."`,
    },
    //     {
    //       date: "MARCH 22",
    //       heading: "Announcement 4",
    //       content: `"this is the fourth announcement" Dear Parents and Guardians,

    // We are excited to inform you that our school will be organizing a trip to the local zoo on [insert date]. This trip is a great opportunity for our students to learn about different animals and their habitats, and to appreciate the beauty and diversity of nature.`,
    //     },
  ];
  return (
    <div className="announcement">
      <h1>Announcements/Notice</h1>
      {announcements.map((a) => {
        return (
          <div className="announcement-card">
            <div className="announcement-head">
              <h3>{a.heading}</h3>
              <h4>{a.date}</h4>
            </div>
            <p>{a.content}</p>
          </div>
        );
      })}
      <button>View All Announcements</button>
    </div>
  );
};
export default Announcement;
