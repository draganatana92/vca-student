import logoDark from "@/images/logo.svg";
import slideOneImage1 from "@/images/slider/slider-1.jpg";
import slideOneImage2 from "@/images/slider/slider-2.jpg";
import slideOneImage3 from "@/images/slider/slider-3.jpg";
import slideOneImage4 from "@/images/slider/slider-4.jpg";
import slideOneImage5 from "@/images/slider/slider-5.jpg";
import videoImage1 from "@/images/slider/vca-video1.jpg";
import videoImage2 from "@/images/slider/vca-video2.jpg";
import videoImage3 from "@/images/slider/vca-video3.jpg";
import serviceImage1 from "@/images/services/service-1.jpg";
import serviceImage2 from "@/images/services/service-2.jpg";
import serviceImage3 from "@/images/services/service-3.jpg";
import funfactShape from "@/images/shape/about-shape.png";
import galleryOne1 from "@/images/gallery/gallery-1.jpg";
import galleryOne2 from "@/images/gallery/gallery-2.jpg";
import galleryOne3 from "@/images/gallery/gallery-3.jpg";
import galleryOne4 from "@/images/gallery/gallery-4.jpg";
import galleryOne5 from "@/images/gallery/gallery-5.jpg";
import galleryOne6 from "@/images/gallery/gallery-6.jpg";
import testimonial1 from "@/images/testimonial/testimonial-1.jpg";
import testimonial2 from "@/images/testimonial/testimonial-2.jpg";
import testimonial3 from "@/images/testimonial/testimonial-3.jpg";
import blog1 from "@/images/blog/blog-1.jpg";
import blog2 from "@/images/blog/blog-2.jpg";
import blog3 from "@/images/blog/blog-3.jpg";
import blog4 from "@/images/blog/blog-4.jpg";
import blog5 from "@/images/blog/blog-5.jpg";
import blog6 from "@/images/blog/blog-6.jpg";
import team1 from "@/images/team/team-1.jpg";
import team2 from "@/images/team/team-2.jpg";
import team3 from "@/images/team/team-3.jpg";
import team4 from "@/images/team/team-4.jpg";
import comment1 from "@/images/comment-1.jpg";
import comment2 from "@/images/comment-2.jpg";

import service1Icon from '@/images/icons/VCA_IconographyKIT-04.png'
import service2Icon from '@/images/icons/VCA_IconographyKIT-09.png'
import service3Icon from '@/images/icons/VCA_IconographyKIT-05.png'
import service4Icon from '@/images/icons/VCA_IconographyKIT-06.png'
import service5Icon from '@/images/icons/VCA_IconographyKIT-04.png'
import service6Icon from '@/images/icons/VCA_IconographyKIT-03.png'

export const Logo = {
  dark: logoDark
};

export const NavLinksData = [
  {
    name: "Student Resources",
    url: "/",
    subItems: [
      {
        name: "Veterinarian Students",
        url: "/"
      },
      {
        name: "Technician Students",
        url: "/technician-students"
      }
    ]
  },
  {
    name: "Health & Wellbeing at VCA",
    url: "/",
    subItems: [
      {
        name: "Equity, Inclusion, & Diversity",
        url: "/equity-inclusion-diversity"
      },
      {
        name: "Total Rewards",
        url: "/total-rewards"
      },
      {
        name: "Social Responsibility",
        url: "/social-responsibility"
      }
    ]
  },
  {
    name: "VCA Opportunities Near You",
    url: "/",
    subItems: [
      {
        name: "Intern/Extern/Summer Programs",
        url: "/programs"
      },
      {
        name: "VCA Careers",
        url: "/vca-careers"
      },
      {
        name: "Get to know hospitals near you",
        url: "/hospitals"
      }
    ]
  }
];

export const TopbarInfos = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "66 Broklyn Street, New York",
    url: "#"
  },
  {
    icon: "icon-phone-call",
    tagLine: "Call Now",
    text: "666 888 000",
    url: "tel:666-888-000"
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

export const SlideOneData = [
  {
    backgroundImage: slideOneImage1,
    title: "WOOF U Vet Student Portal",
    text: "Intern VCA Student Program",
    button: "LEARN MORE INTERN PROGRAM",
    url: "/"
  },
  {
    backgroundImage: slideOneImage2,
    title: "WOOF U Vet Student Portal",
    text: "Extern VCA Student Program",
    button: "LEARN MORE EXTERN PROGRAM",
    url: "/"
  },
  {
    backgroundImage: slideOneImage3,
    title: "WOOF U Vet Student Portal",
    text: "Summer VCA Student Program",
    button: "LEARN MORE SUMMER PROGRAM",
    url: "/"
  }
];

export const SlideOneVideoData = [
  {
    url: 'https://player.vimeo.com/video/629399122/3a354e56a9',
    thumnail: videoImage1,
    player_id: '629399122',
    id: '3a354e56a9'
  },
  {
    url: 'https://vimeo.com/629408318/4c99f53a8d',
    thumnail: videoImage2,
    player_id: '629408318',
    id: '4c99f53a8d'
  },
  {
    url: 'https://vimeo.com/626582129/65d15df0f2',
    thumnail: videoImage3,
    player_id: '626582129',
    id: '65d15df0f2'
  }
]

export const FeatureOneData = [
  {
    icon: "icon-wallet",
    title: "No Upfront Payments"
  },
  {
    icon: "icon-diploma",
    title: "Satisfaction Guarantee"
  },
  {
    icon: "icon-big_clock",
    title: "Emergency Service"
  },
  {
    icon: "icon-handshake",
    title: "Fixed Right Promise"
  },
  {
    icon: "icon-mechanic",
    title: "8 Years Experience"
  }
];

export const AboutOneData = {
  title: "Taking care of the future of veterinary medicine",
  tagLine: "Welcome to VCA",
  content:
    "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
  button: {
    url: "/about",
    label: "LEARN MORE"
  }
};

export const ServiceOneData = {
  title: "We care about the Future of Veterinary Medicine",
  posts: [
    {
      image: serviceImage1,
      icon: service1Icon,
      title: "Clinical Training",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      button: {
        label: "LEARN MORE",
        url: "/"
      },
      color: 'aliceblue'
    },
    {
      image: serviceImage2,
      icon: service2Icon,
      title: "Communications Training",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      button: {
        label: "LEARN MORE",
        url: "/"
      },
      color: 'white'
    },
    {
      image: serviceImage3,
      icon: service3Icon,
      title: "Student Resources",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      button: {
        label: "LEARN MORE",
        url: "/"
      },
      color: 'lemonchiffon'
    },
    {
      image: serviceImage1,
      icon: service4Icon,
      title: "VCA Student Programs",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      button: {
        label: "LEARN MORE",
        url: "/"
      },
      color: 'bisque'
    },
    {
      image: serviceImage2,
      icon: service5Icon,
      title: "VCA Careers",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      button: {
        label: "LEARN MORE",
        url: "/"
      },
      color: 'aquamarine'
    },
    {
      image: serviceImage3,
      icon: service6Icon,
      title: "VCA New Graduate Mentorship Program",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      button: {
        label: "LEARN MORE",
        url: "/"
      },
      color: 'mintcream'
    }
  ]
};

export const CallToActionOneData = {
  title: "No overtime charges, 7 days a week",
  button: {
    url: "/contact",
    label: "GET A FREE QUOTE"
  }
};

export const CallToActionTwoData = {
  left: {
    text: "Air Conditioning Services",
    title: "Cool it down"
  },
  right: {
    text: "Heating Services",
    title: "Heat it up"
  }
};

export const FunfactOneData = {
  shapeImage: funfactShape,
  title: "Numbers Speakers.",
  posts: [
    {
      count: 8870,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 4760,
      text: "Air Conditioning Repairs and Install"
    },
    {
      count: 9032,
      text: "Air Conditioning Repairs and Install"
    }
  ]
};

export const GalleryOneData = [
  {
    title: "Maintenance and Repair",
    image: galleryOne1,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne2,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne3,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne4,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne5,
    url: "#"
  },
  {
    title: "Maintenance and Repair",
    image: galleryOne6,
    url: "#"
  }
];

export const TestimonialOneData = {
  title: "What our students have to say",
  posts: [
    {
      image: testimonial1,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Della Barnett",
      designation: "Intern"
    },
    {
      image: testimonial2,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Max Dunn",
      designation: "Extern"
    },
    {
      image: testimonial3,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Alberta Potter",
      designation: "Summer"
    },
    {
      image: testimonial1,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Della Barnett",
      designation: "Intern"
    },
    {
      image: testimonial2,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Max Dunn",
      designation: "Extern"
    },
    {
      image: testimonial3,
      content:
        "This is due to their excellent service, competitive pricing and customer support . It's throughly refresing to get such a personal touch.",
      name: "Alberta Potter",
      designation: "Summer"
    }
  ]
};

export const FooterBottomData = {
  social: [
    {
      icon: "fa fa-twitter",
      url: "#"
    },
    {
      icon: "fa fa-facebook-f",
      url: "#"
    },
    {
      icon: "fa fa-linkedin",
      url: "#"
    },
    {
      icon: "fa fa-youtube-play",
      url: "#"
    }
  ]
};

export const FooterInfo = [
  {
    icon: "icon-placeholder",
    tagLine: "Address",
    text: "66 Broklyn Street, New York",
    url: "#"
  },
  {
    icon: "icon-contact",
    tagLine: "Email",
    text: "help@VCA.com",
    url: "mailto:help@VCA.com"
  },
  {
    icon: "icon-clock",
    tagLine: "Open Hours",
    text: " Mon-Sat: 9am - 6pm",
    url: "#"
  }
];

export const FooterWidgets = {
  about: {
    title: "About VCA",
    text: "As a national network of hometown hospitals, we provide world-class veterinary medicine by activating our shared expertise and pairing cutting-edge technology, procedures and best practices with deeply compassionate care.",
  },
  linkOne: {
    title: "Quick Links",
    menu: [
      {
        lable: "Technician Students",
        url: "#"
      },
      {
        lable: "Equity, Inclusion, & Diversity",
        url: "#"
      },
      {
        lable: "Total Rewards",
        url: "#"
      },
      {
        lable: "Social Responsibility",
        url: "#"
      }
    ]
  },
  linkTwo: {
    menu: [
      {
        lable: "Intern/Extern/Summer Programs",
        url: "#"
      },
      {
        lable: "VCA Careers",
        url: "#"
      },
      {
        lable: "Get to know hospitals near you",
        url: "#"
      },
      {
        lable: "Terms & Conditions",
        url: "#"
      }
    ]
  }
};

export const BlogOneData = {
  title: "VCA Leadership Messages",
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "Dr. Todd Lavender",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "Dr. Marie Kerl",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "Dr. Garrett Lewis",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    }
  ]
};

export const BlogTwoData = {
  posts: [
    {
      image: blog1,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "How does a ductless heat pump work?",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog2,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Simple hack to improve A/C efficiency",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog3,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Preparing your home before vacation",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog4,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Heating and cooling safety issues",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog5,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Don’t neglect your outdoor unit",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    },
    {
      image: blog6,
      date: "07 Nov",
      author: "admin",
      commentCount: 3,
      title: "Have your system professionally inspected",
      url: "/blog-details",
      text: "There are many variations passages of lorem ipsum available but the majority have suffered alteration."
    }
  ]
};

export const VideoOneData = {
  title: "Watch how we work",
  id: "8DP4NgupAhI"
};

export const AboutTwoData = {
  caption: " 20 <span>years experience</span> ",
  blockTitle: {
    title:
      "We are trusted source of ac and heating maintenance repairs company",
    tagline: "Why choose us"
  },
  lists: [
    {
      text: " Unmatched performance, satisfaction service guarantees"
    },
    {
      text: " Home protection through our shoe covers and mats"
    },
    {
      text: " Upfront, flat rate pricing—no overtime charges"
    },
    {
      text: " 24 / 7 availability for all emergency services"
    },
    {
      text: " Fixed right promise—done right or it’s free"
    },
    {
      text: " Clear communication and updates on service arrival"
    }
  ],
  offer: {
    tagline: "10% off",
    text: "on our all services for senior citizens."
  }
};

export const TeamOneData = {
  title: "Meet The Team",
  posts: [
    {
      image: team1,
      name: "Effie Green",
      designation: "Manager",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team2,
      name: "Catherine Lane",
      designation: "Worker",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team3,
      name: "Augusta Wells",
      designation: "Developer",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    },
    {
      image: team4,
      name: "Kyle Fuller",
      designation: "Founder",
      social: [
        {
          icon: "fa-facebook",
          url: "#"
        },
        {
          icon: "fa-twitter",
          url: "#"
        },
        {
          icon: "fa-youtube-play",
          url: "#"
        }
      ]
    }
  ]
};

export const AboutThreeData = {
  blockTitle: {
    tagline: "Our success story",
    title: "Experience quality air conditioning service in broklyn new york"
  },
  summery:
    "There are many variations of passages of lorem ipsum available, but the majorify have suffered alteration in some form by injected humour, or randmised words which don't look even slightly believable.",
  button: {
    lable: "LEARN MORE",
    url: "/about"
  },
  box: [
    {
      icon: "icon-maintenance",
      title: "We make as cool again"
    },
    {
      icon: "icon-big-ac",
      title: "Keep your business cool"
    }
  ]
};

export const AboutFourData = {
  blockTitle: {
    title: "We are trusted by more than <span>8900</span> clients",
    text1:
      "Tincidunt elit magnis nulla facilisis sagittis is maecenas. Sapien nunced amet ultrices, dolores sit ipsum velit purus aliquet, massa fringilla leo orci.",
    text2:
      "Lorem ipsum dolors sit amet elit magnis amet ultrices purusrfed aliquet. There are many varia-tions of passages of available but the majarity have suffered."
  }
};

export const BenefitOneData = {
  title: "Our benefits",
  posts: [
    {
      icon: "icon-big_clock",
      title: "Emergency Service",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-wallet",
      title: "No Upfront Payment",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-diploma",
      title: "Satisfaction Guarantee",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    },
    {
      icon: "icon-mechanic",
      title: "8 Years Experience",
      text: "There are many passages of lorem ipsum available but the majority have alteration."
    }
  ]
};

export const ServiceSidebarListData = [
  {
    icon: "icon-snow",
    title: "Cooling Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  },
  {
    icon: "icon-fire",
    title: "Heating Services",
    list: [
      {
        label: "Air Conditioner Maintenance",
        url: "#"
      },
      {
        label: "Air Conditioner Repair",
        url: "#"
      },
      {
        label: "Air Conditioner Replacement",
        url: "#"
      },
      {
        label: "Ductless Split AC Systems",
        url: "#"
      },
      {
        label: "Duct Cleaning & Installation",
        url: "#"
      }
    ]
  }
];

export const ServiceSidebarOtherData = [
  {
    icon: "icon-ac",
    title: "Other Services",
    content: {
      icon: "icon-support",
      title: "<span>Contact with us </span>666 888 000"
    }
  },
  {
    icon: "icon-building",
    title: "Commercial Services",
    content: {
      icon: "icon-building",
      title: "<span>Contact with us </span>666 888 000"
    }
  }
];

export const CommentPostData = [
  {
    name: "David Martin",
    image: comment1,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  },
  {
    name: "Jessica Brown",
    image: comment2,
    time: "10 Nov, 2018 - 4:00 pm",
    text: "Lorem Ipsum is simply dummy text of the rinting and typesetting been the industry standard dummy text ever sincer condimentum purus. In non ex at ligula fringilla lobortis et aliquet."
  }
];

export const SlideTwoData = [
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialis",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage5,
    title: "Keep your family happy this winter, and warm.",
    button: "GET A FREE QUOTE",
    url: "/contact"
  },
  {
    backgroundImage: slideOneImage4,
    title: "Heating and Air Conditioning Specialist",
    button: "GET A FREE QUOTE",
    url: "/contact"
  }
];