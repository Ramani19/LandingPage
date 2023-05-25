var nav=document.querySelector("nav")
var sections_div =document.querySelector(".sections")

//navigation and sections creation
for (let i = 0; i < 5; i++) {
    var nav_sec=document.createElement("span")
    nav_sec.className=`nav-sec ${i+1}`
     nav_sec.innerHTML=`section${i+1}`
     nav.appendChild(nav_sec)
     var section=document.createElement("div")
     
     if( i==0){
        section.className=`section${i+1} section active-class fade-in`
     }
     else{
        section.className=`section${i+1} section`
     }
    
     section.innerHTML="Lorem ipsum dolor sit ametconsectetur adipisicing elit. Fugit quod corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod corporis veritatis laborum eum quo cumque. Iure ad magni commodi possimus, consequuntur, hic, repellat minima tenetur voluptatum rem inventore voluptates. veritatis laborum eum quo cumque. Iure ad magni commodi possimus, consequuntur, hic, repellat minima tenetur voluptatum rem inventore voluptates."+
     "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Fugit quod corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod corporis veritatis laborum eum quo cumque. Iure ad magni commodi possimus, consequuntur, hic, repellat minima tenetur voluptatum rem inventore voluptates. veritatis laborum eum quo cumque. Iure ad magni commodi possimus, consequuntur, hic, repellat minima tenetur voluptatum rem inventore voluptates."+
     "Lorem ipsum dolor sit ametconsectetur adipisicing elit. Fugit quod corporisLorem ipsum dolor sit amet consectetur adipisicing elit. Fugit quod corporis veritatis laborum eum quo cumque. Iure ad magni commodi possimus, consequuntur, hic, repellat minima tenetur voluptatum rem inventore voluptates. veritatis laborum eum quo cumque. Iure ad magni commodi possimus, consequuntur, hic, repellat minima tenetur voluptatum rem inventore voluptates."
    sections_div.appendChild(section)
    
}
//nav section click
var sections =document.querySelectorAll(".section")
var nav_sec=document.querySelectorAll(".nav-sec")
nav_sec.forEach(e => {
   e.addEventListener("click",()=>{
           var cls=e.classList[1]
           var scrolltoSec=document.querySelector(`.section${cls}`)
           scrolltoSec.scrollIntoView({behavior:"smooth",
         block:"center"})
           for (let i=0 ;i<sections.length;i++) {
             sections[i].className=`section${i+1} section`
             if(i+1==cls)
             {
               //console.log(i)
               sections[i].classList.add("active-class")
             }
             var scrollY=window.pageYOffset
             //console.log(document.body.parentNode.scrollHeight-document.body.parentNode.clientHeight)   
             window.addEventListener("scroll",(e)=>{
              let scroll=this.scrollY
              //console.log(scroll)
            })

         }
            

          
         })
}); 
for (let i=0;i<sections.length; i++){
   // console.log(sections[i].scrollHeight)
}
var options = {
   
   rootMargin: '-66px',
   threshold: 0.5
 }
 
 var observer = new IntersectionObserver((entries,observer)=>{
   console.log(entries)
  entries.forEach(entry=>{
   console.log(entry.intersectionRatio)
   if(entry.intersectionRatio>0.5)
   {
      console.log("in intersecting", entry.target)
      entry.target.classList.add("active-class")
      //entry.target.classList.add("fade-in")
   }
   else{
      entry.target.classList.remove("active-class")
   }
  
  })
 
 }, options);
 
 sections.forEach(sec=>{
   observer.observe(sec);
 })
 
observer.observe(sections[0])
observer.observe(sections[1])



//bottom button click events
var button=document.querySelector(".bot-button")
button.addEventListener("click",()=>{
   window.scrollTo(window.top) 
})

window.addEventListener("scroll",(e)=>{
   //console.log(sections[3].scrollLeft)
   // if(document.body.scrollTop==0)
   // {
   //    console.log("ki")
   //    button.style.visibility="hidden"
   // }
   // else{
   //    button.style.visibility="visible"
   // }
})



    
    
    
