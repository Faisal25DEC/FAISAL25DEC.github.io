new Splide("#image-carousel", {
  rewind: true,
}).mount();
new Splide("#image-carousel1", {
  rewind: true,
}).mount();

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("left");
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

  link.download = "./resume.pdf";
  link.click();

  window.open(
    "https://drive.google.com/file/d/1PwhV7e5H6xsD396mzsT6lDPHB2bKcU32/view?usp=sharing",
    "_blank"
  );
};
document.getElementById("resume-home").addEventListener("click", () => {
  downloadFile();
});
