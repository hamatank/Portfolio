AOS.init();

  document.addEventListener("DOMContentLoaded", function () {
    const emailEl = document.getElementById("email");
    const emailText = "sapsal738@naver.com";
    let index = 0;
    let hasStarted = false;

    function typeEmail() {
      if (index < emailText.length) {
        emailEl.textContent += emailText.charAt(index);
        index++;
        setTimeout(typeEmail, 100);
      }
    }

    window.addEventListener("scroll", () => {
      const rect = emailEl.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && !hasStarted) {
        hasStarted = true;
        typeEmail();
      }
    });
  });