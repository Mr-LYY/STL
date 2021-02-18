const tabNavs = document.querySelectorAll('.tab__button');
const tabPanes = document.querySelectorAll('.tab-content');

for (let i = 0; i < tabNavs.length; i++) {

  tabNavs[i].addEventListener("click", function(evt){
    evt.preventDefault();
    const activeTabAttr = evt.target.getAttribute("data-tab");

    for (let j = 0; j < tabNavs.length; j++) {
      const contentAttr = tabPanes[j].getAttribute("data-tab-content");

      if (activeTabAttr === contentAttr) {
        tabNavs[j].classList.add("tab__button_active");
        tabPanes[j].classList.add("tab-content_active"); 
      } else {
        tabNavs[j].classList.remove("tab__button_active");
        tabPanes[j].classList.remove("tab-content_active");
      }
    };
  });
}


