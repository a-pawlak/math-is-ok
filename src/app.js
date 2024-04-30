import taskView from "./views/task-view";
const app = function(){
  const swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
      shadow: true,
      slideShadows: true,
      shadowOffset: 20,
      shadowScale: 0.54,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });
  
function slideChangeHandler(){
  taskView.renderTask(swiper.activeIndex)
    
}
taskView.renderTask(0)
swiper.on('slideChange', slideChangeHandler)
}

app();

    