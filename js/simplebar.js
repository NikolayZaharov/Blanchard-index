
new SimpleBar(document.querySelector(".simplebar"), {
    autoHide: false,
    scrollbarMaxSize: 25,
  });

document.querySelectorAll(".simplebar").forEach(item => {
new SimpleBar(item, {
    autoHide: false,
    scrollbarMaxSize: 25,
    });
})