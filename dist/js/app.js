(() => {
  "use strict";
  let e = !1;
  setTimeout(() => {
    if (e) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  let t = document.querySelector(".icon-menu"),
    o = document.querySelector(".header__menu"),
    c = document.querySelector("body");
  t.addEventListener("click", function () {
    o.classList.toggle("_active"),
      c.classList.toggle("_lock"),
      t.classList.toggle("_active");
  });
  const n = document.querySelectorAll(".menu__link[data-goto]");
  if (n.length > 0) {
    function i(e) {
      const n = e.target;
      if (n.dataset.goto && document.querySelector(n.dataset.goto)) {
        const i =
          document.querySelector(n.dataset.goto).getBoundingClientRect().top +
          pageYOffset -
          document.querySelector("header").offsetHeight;
        t.classList.contains("_active") &&
          (o.classList.remove("_active"),
          c.classList.remove("_lock"),
          t.classList.remove("_active")),
          window.scrollTo({ top: i, behavior: "smooth" }),
          e.preventDefault();
      }
    }
    n.forEach((e) => {
      e.addEventListener("click", i);
    });
  }
  (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    });
})();
