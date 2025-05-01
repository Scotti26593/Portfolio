// Cursor Glow
// Cursor Glow
// Cursor Glow
// Cursor Glow

document.addEventListener("mousemove", function (e) {
  const glow = document.getElementById("cursor-glow");
  glow.style.left = e.clientX - 300 + "px"; // Center the glow
  glow.style.top = e.clientY - 300 + "px"; // Center the glow
});

//smooth scroll//
//smooth scroll//
//smooth scroll//
//smooth scroll//

const alllinks = document.querySelectorAll("a:link");

alllinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");

    if (href.startsWith("#")) {
      e.preventDefault();
    }

    console.log(href);

    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    if (href !== "#" && href.startsWith("#")) {
      const section = document.querySelector(href);
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});
