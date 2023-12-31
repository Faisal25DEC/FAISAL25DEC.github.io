// new Splide("#image-carousel", {
//   rewind: true,
// }).mount();
// new Splide("#image-carousel1", {
//   rewind: true,
// }).mount();
// new Splide("#image-carousel2", {
//   rewind: true,
// }).mount();
// new Splide("#image-carousel3", {
//   rewind: true,
// }).mount();
// new Splide("#image-carousel4", {
//   rewind: true,
// }).mount();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("left");
});
const navLinksArray = document.querySelectorAll(".nav-link");

navLinksArray.forEach((navLink) => {
  navLink.addEventListener("click", () => {
    navLinks.classList.remove("left");
  });
});

const projectContainer = document.querySelector(".projects-container");

const items = [
  {
    id: 1,
    title: "Adventour",
    img: "./assets/adventour-collage-2.png",
    desc: `
        A beautifully animated and entirely user-specific website built on
        <b>React.js and Firebase</b> and many other CSS libraries and framework
        for design
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/firebase.svg",
      "./assets/bootstrap.svg",
      "./assets/json-server.png",
    ],
    live: "https://adventourr-masai.netlify.app/",
    github: "https://github.com/Faisal25DEC/adventour",
  },
  {
    id: 2,
    title: "AI - BlogsTour",
    img: "./assets/medium-collage-1.png",
    desc: `
        A Complete <b>MERN Stack</b> blog website similar to <b>Medium.com</b>
        which supports, <b>AI Blog Generation</b>, CRUD operations and have entirely user specific features
        like comments, like, unlike, follows etc.
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/nodejs1.png",
      "./assets/redux.svg",
    ],
    live: "https://medium-blog-app-pi.vercel.app/",
    github: "https://github.com/Faisal25DEC/BlogTour",
  },
  {
    id: 7,
    title: "Educom",
    img: "./assets/educom-collage.png",
    desc: "A beautifully designed responsive education platform with real-time features like <b>Course Ratings</b>, <b>Real-Time Progress Tracking</b>, <b>Course Dashboard</b> and personalized learning dashboard.",
    techStack: [
      "./assets/react.svg",
      "./assets/firebase.svg",
      "./assets/tailwind.svg",
    ],
    live: "https://educom-frontend.vercel.app/",
    github: "https://github.com/Faisal25DEC/educom-frontend",
  },
  {
    id: 5,
    title: "Socialms",
    img: "./assets/twitter-collage-2.png",
    desc: `A full fledged social media platforms inpired by <b>Twitter</b> which supports messages, create posts edit profiles and users can send images in messages as well`,
    techStack: [
      "./assets/next.svg",
      "./assets/mongo.svg",
      "./assets/tailwind.svg",
      "./assets/prisma.svg",
      "./assets/firebase.svg",
    ],
    live: "https://twitter-clone-faisal25dec.vercel.app/",
    github: "https://github.com/Faisal25DEC/Socialms-twitter-inspired",
  },
  {
    id: 6,
    title: "Jotion",
    img: "./assets/jotion-collage.png",
    desc: `A Note management platform inspired by Notion.com that incoporating features like <b>Nested children notes</b>, <b>Note smart restore</b>, publishing, deleting and full authorization and authentication`,
    techStack: [
      "./assets/next.svg",
      "./assets/convex.svg",
      "./assets/clerk.webp",
      "./assets/edgestore.png",
    ],
    live: "https://note-management-platform.vercel.app/",
    github: "https://github.com/Faisal25DEC/note-management-platform",
  },
  {
    id: 3,
    title: "Alcazar Travel Agency",
    img: "./assets/alcazar-collage-1.png",
    desc: ` 
        <b>User Specific Vanilla Javascript E-commerce website</b>, built on
        HTML, CSS, Javascript, Firebase and JSON-Server`,
    techStack: [
      "./assets/html.svg",
      "./assets/css.svg",
      "./assets/js.svg",
      "./assets/json-server.png",
      "./assets/firebase.svg",
    ],
    live: "https://alcazar-masai.netlify.app/pages/product",
    github: "https://github.com/Faisal25DEC/Alcazar-Travel-Agency",
  },
  {
    id: 4,
    title: "Instagram Clone",
    img: "./assets/instgram-collage-1.png",
    desc: `
        A complete working clone of Instagram where users can Create Posts,
        <b>Update their profiles</b>, and have all features of instagram
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/nodejs1.png",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/redux.svg",
    ],
    live: "https://instaclonevi.netlify.app/",
    github: "https://github.com/Faisal25DEC/Insta_Social",
  },
  {
    id: 8,
    title: "Roobet",
    img: "./assets/roobet.png",
    desc: "Beautifully animated Home page of roobet.com. It's complex front-end design with complete resopnsiveness and beautifull image hover animations",
    techStack: [
      "./assets/react.png",
      "./assets/tailwind.svg",
      "./assets/bootstrap.svg",
    ],
    live: "https://roobet.vercel.app/",
    github: "https://github.com/Faisal25DEC/Roobet",
  },
];

items.forEach((item, index) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  console.log(item.img);
  projectContainer.innerHTML += ` <article class="project-card best mix" data-order=${
    index + 1
  }>
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});

const frontEndItems = [
  {
    id: 4,
    title: "Roobet",
    img: "./assets/roobet.png",
    desc: "Beautifully animated Home page of roobet.com. It's complex front-end design with complete resopnsiveness and beautifull image hover animations",
    techStack: [
      "./assets/react.png",
      "./assets/tailwind.svg",
      "./assets/bootstrap.svg",
    ],
    live: "https://roobet.vercel.app/",
    github: "https://github.com/Faisal25DEC/Roobet",
  },
  {
    id: 1,
    title: "Myntra Clone",
    img: "./assets/myntra-collage-1.png",
    desc: "Clone of famous fashion centric website <b>Myntra.com</b> built on <b>HTML, CSS And Javascript</b> with the help of localstorage. ",
    techStack: [
      "./assets/html.svg",
      "./assets/css.svg",
      "./assets/js.png",
      "./assets/local-storage.png",
    ],
    live: "https://gilded-vacherin-2e78d2.netlify.app/",
    github: "https://github.com/Faisal25DEC/Myntra-Clone",
  },
  {
    id: 2,
    title: "SportyVook",
    img: "./assets/playo-collage-1.png",
    desc: "Clone of Playo website built as a part of open source project given as an assignment during my tenure at Masai School",
    techStack: [
      "./assets/html.svg",
      "./assets/css.svg",
      "./assets/js.svg",
      "./assets/local-storage.png",
    ],
    live: "https://monumental-melba-e8c79d.netlify.app/index.html",
    github: "https://github.com/Faisal25DEC/open-source-project",
  },
  {
    id: 3,
    title: "Alcazar Travel Agency",
    img: "./assets/alcazar-collage-1.png",
    desc: ` 
        <b>User Specific Vanilla Javascript E-commerce website</b>, built on
        HTML, CSS, Javascript, Firebase and JSON-Server`,
    techStack: [
      "./assets/html.svg",
      "./assets/css.svg",
      "./assets/js.svg",
      "./assets/json-server.png",
      "./assets/firebase.svg",
    ],
    live: "https://alcazar-masai.netlify.app/pages/product",
    github: "https://github.com/Faisal25DEC/Alcazar-Travel-Agency",
  },
];

frontEndItems.forEach((item) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  console.log(item.img);
  projectContainer.innerHTML += ` <article class="project-card mix front-end " data-order="1">
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});

const fullStackItems = [
  {
    id: 6,
    title: "Jotion",
    img: "./assets/jotion-collage.png",
    desc: `A Note management platform inspired by Notion.com that incoporating features like <b>Nested children notes</b>, <b>Note smart restore</b>, publishing, deleting and full authorization and authentication`,
    techStack: [
      "./assets/next.svg",
      "./assets/convex.svg",
      "./assets/clerk.webp",
      "./assets/edgestore.png",
    ],
    live: "https://note-management-platform.vercel.app/",
    github: "https://github.com/Faisal25DEC/note-management-platform",
  },
  {
    id: 2,
    title: "BlogsTour.com",
    img: "./assets/medium-collage-1.png",
    desc: `
        A Complete <b>MERN Stack</b> blog website similar to <b>Medium.com</b>
        which supports CRUD operations and have entirely user specific features
        like comments, like, unlike, follows etc.
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/nodejs1.png",
      "./assets/redux.svg",
    ],
    live: "https://medium-blog-app-pi.vercel.app/",
    github: "https://github.com/Faisal25DEC/BlogTourv",
  },
  {
    id: 3,
    title: "Socialms",
    img: "./assets/twitter-collage-2.png",
    desc: `A full fledged social media platforms inpired by <b>Twitter</b> which supports messages, create posts edit profiles and users can send images in messages as well`,
    techStack: [
      "./assets/next.svg",
      "./assets/mongo.svg",
      "./assets/tailwind.svg",
      "./assets/prisma.svg",
      "./assets/firebase.svg",
    ],
    live: "https://twitter-clone-faisal25dec.vercel.app/",
    github: "https://github.com/Faisal25DEC/Socialms-twitter-inspired",
  },

  {
    id: 4,
    title: "Instagram Clone",
    img: "./assets/instgram-collage-1.png",
    desc: `
        A complete working clone of Instagram where users can Create Posts,
        <b>Update their profiles</b>, and have all features of instagram
      `,
    techStack: [
      "./assets/react.svg",
      "./assets/nodejs1.png",
      "./assets/mongo.svg",
      "./assets/chakra.png",
      "./assets/redux.svg",
    ],
    live: "https://instaclonevi.netlify.app/",
    github: "https://github.com/Faisal25DEC/Insta_Social",
  },
];

fullStackItems.forEach((item) => {
  let allImages = "";
  item.techStack.forEach((item) => {
    allImages += `<img src = ${item} title = ${
      item.split("/")[2].split(".")[0]
    }/>`;
  });
  console.log(item.img);
  projectContainer.innerHTML += ` <article class="project-card mix full-stack " data-order="1">
  <div class="project-image">
    <img src = ${item.img} />
  </div>
  <div class = "project-text">
  <h1 class="project-title">${item.title}</h1>
  <p class="project-description">
   ${item.desc}
  </p>
  <div class="project-link-tech-stack-wrapper">
    <div class="project-links">
      <a
        href=${item.github}
        target="_blank"
        class="project-github-link"
        ><img src="./assets/github.png" alt="" /><span>Github</span></a
      >
      <a
        href=${item.live}
        target="_blank"
        class="project-deployed-link"
        ><img src="./assets/netlify.png" alt="" />Live</a
      >
    </div>
    <div class="tech-stack">

    ${allImages}
      
      
    </div>
  </div>
  </div>
</article>`;
});

//----------------mix it up------------
const containerEl = document.querySelector(".projects-container");
var mixer = mixitup(containerEl, {
  animation: {
    enable: false,
  },
});
mixer.filter(".best");
// ==============EMAIL JS _==============
const contactForm = document.getElementById("contact-form");
const contactName = document.getElementById("contact-name");
const contactEmail = document.getElementById("contact-email");
const contactProject = document.getElementById("contact-project");
const contactMessage = document.getElementById("contact-message");
console.log(contactMessage);
console.log(contactProject);
const sendEmail = (e) => {
  e.preventDefault();
  console.log("hey");
  if (
    contactName.value === "" ||
    contactEmail.value === "" ||
    contactProject.value === ""
  ) {
    //add and remove color
    contactMessage.classList.remove("color-blue");
    contactMessage.classList.add("color-red");

    contactMessage.textContent = "Write all the input fields";
    console.log(contactMessage);
  } else {
    console.log("in else");
    emailjs
      .sendForm(
        "service_dfop9pr",
        "template_7wja36r",
        "#contact-form",
        "OO6-VkijNLIANsWdu"
      )
      .then(() => {
        //show message and add color
        contactMessage.classList.add("color-blue");
        contactMessage.textContent = "Message sent ✅";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 4000);
      })
      .catch((err) => {
        contactMessage.classList.add("color-red");
        contactMessage.textContent = "OOPS! something went wrong";
        setTimeout(() => {
          contactMessage.textContent = "";
        }, 3000);
      });
  }
  contactEmail.value = "";
  contactName.value = "";
  contactProject.value = "";
};
contactForm.addEventListener("submit", sendEmail);
console.log(contactForm);

const projectCategories = document.querySelectorAll(".project-categories>li");
console.log(projectCategories);
const resetProjectCategories = () => {
  projectCategories.forEach((projectCategory) => {
    projectCategory.classList.remove("active");
  });
};

projectCategories.forEach((projectCategory) => {
  projectCategory.addEventListener("click", () => {
    console.log("first");
    resetProjectCategories();
    projectCategory.classList.add("active");
  });
});

const downloadFile = () => {
  const link = document.createElement("a");

  window.open(
    "https://1drv.ms/b/s!AgsMdCh999Ibh3c2ROOQkmIBh8Fp?e=ZN5MfS",
    "_blank"
  );
};
document.getElementById("resume-button-2").addEventListener("click", () => {
  downloadFile();
});
document.getElementById("resume-button-1").addEventListener("click", () => {
  downloadFile();
});
document.getElementById("resume-button-3").addEventListener("click", () => {
  downloadFile();
});
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log("entry");
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document
  .getElementById("linkedin-contact-img")
  .addEventListener("click", () => {
    window.open("https://www.linkedin.com/in/faisal25121999/", "_blank");
  });

document.getElementById("github-contact-img").addEventListener("click", () => {
  window.open("https://github.com/Faisal25DEC", "_blank");
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));
