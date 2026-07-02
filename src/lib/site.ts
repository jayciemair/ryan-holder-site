export const site = {
  name: "Ryan Holder Championships Foundation",
  shortName: "Ryan Holder Foundation",
  domain: "ryanholdertennis.com",
  tournament: {
    name: "Ryan Holder Junior Championships",
    dates: "July 31 – August 2, 2026",
    location: "Lexington, KY",
    registrationUrl:
      "https://playtennis.usta.com/competitions/lexingtonchristianacademy/Tournaments/events/CE9554FA-9109-4C8C-8A34-BC33CC36F9F8",
  },
  ryan: {
    fullName: "Ryan C. Holder",
    birth: "April 6, 1978",
    death: "January 14, 1995",
    memorial:
      "The Ryan Holder Foundation was created in memory of Ryan C. Holder (April 6, 1978 – January 14, 1995), a gifted young tennis player whose passion, determination, and spirit left a lasting impact on everyone who knew him.",
  },
  julieDittyFoundationUrl: "https://juliedittyquallsfoundation.com/",
} as const;

export const sponsors = [
  {
    name: "Summer Wind Farm",
    image: "/images/sponsors/summer-wind-farm.png",
    alt: "Summer Wind Farm logo",
    url: "https://www.facebook.com/p/Summer-Wind-Farm-100064804116248/",
  },
  {
    name: "Mt. Brilliant Farm",
    image: "/images/sponsors/mt-brilliant.png",
    alt: "Mt. Brilliant Family Foundation logo",
    url: "https://www.mtbrilliant.com/",
  },
] as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Foundation Gifts" },
  { href: "/mission", label: "Mission" },
  { href: "/past-winners", label: "Past Winners" },
  { href: "/julie-ditty", label: "Julie Ditty" },
  { href: "/sponsors", label: "Sponsors" },
] as const;

export const homeSlides = [
  { src: "/images/slides/slide-1.png", alt: "Ryan Holder photos — slide 1" },
  { src: "/images/slides/slide-2.png", alt: "Ryan Holder photos — slide 2" },
  { src: "/images/slides/slide-3.png", alt: "Ryan Holder photos — slide 3" },
  { src: "/images/slides/slide-4.png", alt: "Ryan Holder photos — slide 4" },
] as const;

export const pastWinners = [
  {
    name: "Matthew Emery",
    image: "/images/winner-emery.png",
    bio: "One of the most accomplished players ever to emerge from Kentucky tennis, Matthew Emery rose to No. 1 in the United States in the Boys' 16s and reached No. 2 nationally in the Boys' 18s. Internationally, he climbed as high as No. 12 in the ITF Junior World Singles Rankings and No. 16 in doubles, competing in all four Junior Grand Slam tournaments and representing the United States on the U.S. National Team. Following his playing career, Emery became a successful collegiate coach and was inducted into the Kentucky Tennis Hall of Fame.",
  },
  {
    name: "Ashley Kroh",
    image: "/images/winner-kroh.png",
    bio: "Louisville native Ashley Kroh enjoyed one of the most successful collegiate careers in Marshall University history. Partnering with Jessica Johnson, she advanced to the 2004 NCAA Division I Doubles Championship Final and finished as the NCAA Doubles Runner-Up. Kroh concluded her career as Marshall's all-time leader in combined singles and doubles victories with 198 wins and was later inducted into the Marshall Athletics Hall of Fame.",
  },
  {
    name: "Colin Purcell",
    image: "/images/winner-purcell.png",
    bio: "Louisville's Colin Purcell developed into a standout collegiate player at the University of Georgia, one of the nation's premier tennis programs. Serving as a team captain, Purcell helped lead the Bulldogs during a period in which they consistently competed for national championships. He earned NCAA Tournament success in both singles and doubles, teamed with future ATP star John Isner during his Georgia career, and later competed professionally on the ITF circuit.",
  },
  {
    name: "Meritt Emery",
    image: "/images/winner-emery-m.png",
    bio: "Meritt Emery followed in her family's tennis tradition by becoming one of Kentucky's top junior players. She won three Kentucky high school state championships, achieved a Top-40 national ranking in the Girls' 16 division, and went on to compete for four years at the University of Alabama, where she represented one of the SEC's premier programs.",
  },
] as const;
