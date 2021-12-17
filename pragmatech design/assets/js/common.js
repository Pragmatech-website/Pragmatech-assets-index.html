// loader

window.addEventListener('load', () => {
    
  const wrapper = document.querySelector(".loader");
  wrapper.classList.add("wrapper-animation")
  setTimeout(() => {
    wrapper.classList.add("wrapper-finish");
    wrapper.classList.remove("wrapper-animation")
  }, 1000);
  
  

});



 // search
  $(".btn").click(function () {
    $(".input").toggleClass("active").focus;
    $(this).toggleClass("animate");
    $(".input").val("");
    $(".menu ul").toggleClass("menu_ul_active")
    $(".btn1").toggleClass("btn1-animate")
    
    
  });



  

  // dropdown
  $('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});


// popup
let popup__all = document.querySelector(".popup__all");
let btn1 = document.querySelector(".btn1");
let form = document.querySelector(".popup")
btn1.addEventListener("click",()=>{
  openpopup()
});
function openpopup(){
  popup__all.style.display="flex"
  popup__all.classList.add("popupanimation");
 
  
  setTimeout(() => {
    popup__all.classList.remove("popupanimation")
    popup__all.style.backgroundColor= "rgba(0, 0, 0, 0.486)";
   
  }, 200);
}


function closepopup(){
  popup__all.style.backgroundColor= "unset";
  popup__all.classList.add("popuphidden");
 
  
  setTimeout(() => {
    popup__all.classList.remove("popuphidden");
    popup__all.style.display="none";
   
  }, 150);
}

document.body.addEventListener("click",(event)=>{
        if(event.target.className=="popup__all"){
          closepopup()
        }
})



// popupformvalidation


// let popup__all = document.querySelector(".popup__all");
// let form = document.querySelector(".popup")
let name__field = document.querySelector(".name__field input");
let surname__field = document.querySelector(".surname__field input");
let email__field =document.querySelector(".email__field input");
let number__field = document.querySelector(".number__field input");
let popup__dropdown = document.querySelector(".popup .dropdown")
let popup__label = document.querySelector(".popup span.label")
let textarea= document.querySelector(".textarea textarea")
let name__field__bg__border =document.querySelectorAll(".name__field span")
let surname__field__bg__border =document.querySelectorAll(".surname__field span")
let email__field__bg__border =document.querySelectorAll(".email__field span")
let number__field__bg__border =document.querySelectorAll(".number__field span")
let textarea__bg__border =document.querySelectorAll(".textarea span")
let popup__submit = document.querySelector(".popup-submit") 
name__field.addEventListener('focusout', function(){
  
  if (name__field.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    name__field__bg__border[borderindex].style.backgroundColor="#41E063";
    name__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
      name__field__bg__border[borderindex].style.backgroundColor="red"
      name__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  name__field.addEventListener("focus",()=>{

  
    if(name__field.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        name__field__bg__border[borderindex].style.backgroundColor="#41E063";
        name__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
      name__field__bg__border[borderindex].style.backgroundColor="red";
      name__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

name__field.addEventListener("input",()=>{
        if(name__field.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            name__field__bg__border[borderindex].style.backgroundColor="#41E063"
            name__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
          name__field__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// surnameform validation

surname__field.addEventListener('focusout', function(){
  
  if (surname__field.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    surname__field__bg__border[borderindex].style.backgroundColor="#41E063";
    surname__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
      surname__field__bg__border[borderindex].style.backgroundColor="red"
      surname__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  surname__field.addEventListener("focus",()=>{

  
    if(surname__field.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        surname__field__bg__border[borderindex].style.backgroundColor="#41E063";
        surname__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
      surname__field__bg__border[borderindex].style.backgroundColor="red";
      surname__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

surname__field.addEventListener("input",()=>{
        if(surname__field.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            surname__field__bg__border[borderindex].style.backgroundColor="#41E063"
            surname__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
          surname__field__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// emailvalidation
email__field.addEventListener('focusout', function(){
  
  if (email__field.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    email__field__bg__border[borderindex].style.backgroundColor="#41E063";
    email__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
      email__field__bg__border[borderindex].style.backgroundColor="red"
      email__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  email__field.addEventListener("focus",()=>{

  
    if(email__field.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        email__field__bg__border[borderindex].style.backgroundColor="#41E063";
        email__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
      email__field__bg__border[borderindex].style.backgroundColor="red";
      email__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

email__field.addEventListener("input",()=>{
        if(email__field.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            email__field__bg__border[borderindex].style.backgroundColor="#41E063"
            email__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
          email__field__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// number validation

number__field.addEventListener('focusout', function(){
  
  if (number__field.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    number__field__bg__border[borderindex].style.backgroundColor="#41E063";
    number__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
      number__field__bg__border[borderindex].style.backgroundColor="red"
      number__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  number__field.addEventListener("focus",()=>{

  
    if(number__field.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        number__field__bg__border[borderindex].style.backgroundColor="#41E063";
        number__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
      number__field__bg__border[borderindex].style.backgroundColor="red";
      number__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

number__field.addEventListener("input",()=>{
        if(number__field.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            number__field__bg__border[borderindex].style.backgroundColor="#41E063"
            number__field__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
          number__field__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// textareavalidation
textarea.addEventListener('focusout', function(){
  
  if (textarea.checkValidity()==true){
    for(let borderindex=0; borderindex < 4;borderindex++){
      
    textarea__bg__border[borderindex].style.backgroundColor="#41E063";
    textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}
  else{
    for(let borderindex=0; borderindex<4;borderindex++){
      textarea__bg__border[borderindex].style.backgroundColor="red"
      textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
  }}

  textarea.addEventListener("focus",()=>{

  
    if(textarea.checkValidity()==true){
      
      for(let borderindex=0; borderindex<4;borderindex++){
        
        textarea__bg__border[borderindex].style.backgroundColor="#41E063";
        textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
        
      }
      
    }
    else{
      for(let borderindex=0; borderindex<4;borderindex++){
      textarea__bg__border[borderindex].style.backgroundColor="red";
      textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);}
    }
})


  
}); 

textarea.addEventListener("input",()=>{
        if(textarea.checkValidity()==true){
          for(let borderindex=0; borderindex<4;borderindex++){
            textarea__bg__border[borderindex].style.backgroundColor="#41E063"
            textarea__bg__border[borderindex].classList.add(`bg__border__animation_${borderindex + 1}`);
            
          }
        }
        else{
          for(let borderindex=0; borderindex<4;borderindex++){
          textarea__bg__border[borderindex].classList.remove(`bg__border__animation_${borderindex + 1}`)
         
          
        }}

})

// submit
document.querySelector(".popup-submit").addEventListener("click",(e)=>{
      
  if(popup__label.innerHTML == "Proqramı seçin"){
   
    document.querySelector(".popup-submit input").setAttribute("disabled", true);
    document.querySelector(".popup .dropdown").style.backgroundColor="#f2dede";
    popup__label.style.color="#af504e";
    removeblock()
  }
  
   
   function removeblock(){if(document.querySelector(".popup-submit input").hasAttribute("disabled")){
    setTimeout(() => {
      document.querySelector(".popup-submit input").removeAttribute("disabled");
    
}, 100);}}





});
document.querySelector(".popup .dropdown").addEventListener("focus",()=>{

document.querySelector(".popup .dropdown").style.backgroundColor="white";
popup__label.style.color="#C4C4C4";

})









  
  