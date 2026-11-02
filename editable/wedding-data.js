/**
 * wedding-data.js — Customer-facing editable data layer for rajmahal-palace
 * Edit this file to update couple names, parents, dates, venue, Sanskrit shloka, events, and photos.
 */

window.WEDDING_DATA = {
  // Groom's side invitation
  isGroomsSide: true,

  couple: {
    // Groom's side: Daksh appears first in gates, hero, countdown, and calendar
    bride: "Daksh",
    groom: "Bhavika",
    brideFull: "Daksh Arun Singh",
    groomFull: "Bhavika Salwan",
    brideParents: "Son of Sh. Arun Kumar & Late Dr. Amita Kumari Singh",
    groomParents: "Daughter of Smt. Rewa Salwan & Sh. Vijay Salwan",
    hashtag: "#DakshWedsBhavika",
  },

  wedding: {
    dateISO: "2026-12-19T19:00:00+05:30",
    dateLabel: "Saturday, 19th December 2026",
    timeLabel: "7:00 PM Onwards",
  },

  verse: {
    hindi: "॥ श्री गणेशाय नमः ॥",
    text: "Sh. Arun Kumar & Late Dr. Amita Kumari Singh request you to grace the wedding celebration of his loving son Daksh Arun Singh with Bhavika Salwan.",
  },

  venue: {
    name: "Holiday Inn Zirakpur",
    address: "Ambala - Chandigarh Expressway, Zirakpur, Punjab 140603",
    mapsQuery: "Holiday Inn Chandigarh Zirakpur",
  },

  events: [
    {
      name: "Reception",
      icon: "sparkles",
      date: "Saturday, 19th December 2026",
      time: "7:00 PM Onwards",
      venue: "Holiday Inn Zirakpur, Punjab",
      note: "With best compliments from All Relatives & Friends · Mob: +91 98119-55528",
    },
  ],

  footerText: "With best compliments from All Relatives & Friends (+91 98119-55528)",

  images: {
    couple: "./editable/assets/couple.png",
    heroBg: "./editable/assets/hero-bg.png",
    ganesha: "./editable/assets/ganesha.png",
    diya: "./editable/assets/diya.png",
    mandala: "./editable/assets/mandala.png",
    footerGarland: "./editable/assets/footer-garland.png",
  },
};
