// typed animation
var typed = new Typed(".content__home-typing", {
    strings:["","Web Publisher","Future FE Developer", "Blogger"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})


// aside
const nav = document.querySelector(".leftmenu__navigation"), 
      navList = nav.querySelectorAll(".leftmenu__navigation-list"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll("section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++){
          const a = navList[i].querySelector(".leftmenu__navigation-link")
          a.addEventListener("click", function(){
            removeBackSection();

            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector(".leftmenu__navigation-link").classList.contains("link__active")){
                    addBackSection(j);
                }
                navList[j].querySelector(".leftmenu__navigation-link").classList.remove("link__active");
            }
            this.classList.add("link__active");
            showSection(this)
            if(window.innerWidth < 1200) {
                asideSectionTogglerBtn();
            }
          });
      }

      function removeBackSection(){
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove("back-section")
        }
      }

      function addBackSection(num){
        allSection[num].classList.add("back-section");
      }

      function showSection(element){
        for(let i=0; i<totalSection; i++) {
            allSection[i].classList.remove("active")
        }
        const target= element.getAttribute("href").split("#")[1];
        document.querySelector("#" + target).classList.add("active")
      }

      function updateNav(element) {
        for(let i=0; i<totalNavList; i++) {
            navList[i].querySelector("a").classList.remove("active");
            const target= element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
                navList[i].querySelector("a").classList.add("active");
            }
        }
      }

      document.querySelector(".hire-me").addEventListener("click", function(){
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updateNav(this);
        removeBackSection();
        addBackSection(sectionIndex);
      });

      const navTogglerBtn = document.querySelector(".leftmenu__mobilebtn"),
            aside = document.querySelector(".leftmenu");
            navTogglerBtn.addEventListener("click", () =>{
                asideSectionTogglerBtn();
            });

            function asideSectionTogglerBtn() {
                aside.classList.toggle("button__open");
                navTogglerBtn.classList.toggle("button__open");
                for(let i=0; i<totalSection; i++) {
                    allSection[i].classList.toggle("button__open");
                }
            }
