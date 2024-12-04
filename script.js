$(document).ready(function () {
  // 여기다가 코드를 작성하세요
  console.log("Ready");
});

$(document).ready(function () {
  // 글자가 하나씩 나타나는 애니메이션
  gsap.to(".text-wrapper .letter", {
    opacity: 1, // opacity를 1로 변경
    duration: 0.5,
    stagger: 0.2, // 각 글자가 0.2초 간격으로 나타나도록 설정
  });

  gsap.to(".text-wrapper-2 .letter", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.5,
  });

  gsap.to(".text-wrapper-3 .letter", {
    opacity: 1,
    duration: 0.5,
    stagger: 0.5,
  });
});
