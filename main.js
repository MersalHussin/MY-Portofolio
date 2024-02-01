function getImage(){

    document.querySelectorAll(".gallery-boxes.image img").forEach((img)=>{
        img.onclick = ()=>{
            document.querySelector(".popup-image").style.display = "block"
            document.querySelector(".popup-image img").src = img.getAttribute("src")
        }
    })
    
    document.querySelector(".popup-image span").onclick = ()=>{
        document.querySelector(".popup-image").style.display = "none"
    }
}

getImage()



let loader = document.querySelector(".load-section");
let audio = document.querySelector(".audio")
let skills = document.querySelector("h2.skills")
let brand = document.querySelector(".brand h1")
let links = document.querySelectorAll("a")
links.forEach((link)=>{
  link.onclick = ()=>{
  document.querySelector(".click-audio").play()
  }
})




  window.addEventListener("load", () => {
    
    setTimeout(() => {
      audio.play()
      loader.remove();
      skills.style.textShadow = "0 5px  5px rgb(0, 82, 83)"
      
    }, 100);
  });



// scroll animations

  let boxes = document.querySelectorAll(".slider-box")

  console.log(boxes)
  const options = {};
  const observer = new IntersectionObserver((entries)=>{

    entries.forEach((ele)=>{
      ele.target.classList.toggle("slide" , ele.isIntersecting)
      if(ele.isIntersecting){
        observer.unobserve(ele.target)
      }
    })


  } ,
  options)

  boxes.forEach((box)=>{
    observer.observe(box)
  })



  // other Animation

  let boxes1 = document.querySelectorAll(".slider-box-right")

  const observer1 = new IntersectionObserver((entries1)=>{

    entries1.forEach((ele)=>{
      ele.target.classList.toggle("slide-r" , ele.isIntersecting)
      if(ele.isIntersecting){
        observer1.unobserve(ele.target)
      }
    })


  } ,
  options)

  boxes1.forEach((box)=>{
    observer1.observe(box)
  })


  
/*link color */
let home = document.querySelector(".landing")
let about = document.querySelector(".about")
let services = document.querySelector(".services")
let gallery = document.querySelector(".gallery")
let contact = document.querySelector("#Contact")
let allLinks = document.querySelectorAll("header nav ul li a ")
console.log(allLinks)

window.onscroll = function(){
    if(window.scrollY >= home.offsetTop - 200){
      allLinks.forEach((link)=>{
        link.classList.remove("active")
    })
    allLinks[0].classList.add("active")
    }
    if(window.scrollY >= about.offsetTop - 200){
      allLinks.forEach((link)=>{
        link.classList.remove("active")
    })
    allLinks[1].classList.add("active")
    }
    if(window.scrollY >= services.offsetTop - 200){
      allLinks.forEach((link)=>{
        link.classList.remove("active")
    })
    allLinks[2].classList.add("active")
    }
    if(window.scrollY >= gallery.offsetTop - 200){
      allLinks.forEach((link)=>{
        link.classList.remove("active")
    })
    allLinks[3].classList.add("active")
    }
    if(window.scrollY >= contact.offsetTop - 800){
      allLinks.forEach((link)=>{
        link.classList.remove("active")
    })
    allLinks[4].classList.add("active")
    }
  }



  // toogle menu


  let menu = document.querySelector(".toggle-menu")

function menuIsCliked (){
  menu.classList.toggle("clicked")
} 


// _blank link
let allLinksInPage = document.querySelectorAll("a.blank")

allLinksInPage.forEach((link)=>{
  link.setAttribute("target","_blank")
  console.log(link)
})


