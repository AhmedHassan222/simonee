document.querySelector('#all').addEventListener('click',function(){
    document.getElementById('all').style.cssText='color:#20c997;'
    document.getElementById('graphic').style.cssText='color:black;'
    document.getElementById('webDesign').style.cssText='color:black;'
    document.getElementById('branding').style.cssText='color:black;'

    document.querySelector('#one').classList.replace('d-none','d-block')
    document.querySelector('#two').classList.replace('d-none','d-block')
    document.querySelector('#three').classList.replace('d-none','d-block')
    document.querySelector('#four').classList.replace('d-none','d-block')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-none','d-block')
    document.querySelector('#seven').classList.replace('d-none','d-block')

})
document.querySelector('#graphic').addEventListener('click',function(){
    document.getElementById('all').style.cssText='color:black;'
    document.getElementById('graphic').style.cssText='color:#20c997;'
    document.getElementById('webDesign').style.cssText='color:black;'
    document.getElementById('branding').style.cssText='color:black;'
    document.querySelector('#one').classList.replace('d-none','d-block')
    document.querySelector('#two').classList.replace('d-block','d-none')
    document.querySelector('#three').classList.replace('d-block','d-none')
    document.querySelector('#four').classList.replace('d-none','d-block')
    document.querySelector('#five').classList.replace('d-block','d-none')
    document.querySelector('#six').classList.replace('d-none','d-block')
    document.querySelector('#seven').classList.replace('d-block','d-none')

})
document.querySelector('#webDesign').addEventListener('click',function(){
    
    document.getElementById('all').style.cssText='color:black;'
    document.getElementById('graphic').style.cssText='color:black;'
    document.getElementById('webDesign').style.cssText='color:#20c997;'
    document.getElementById('branding').style.cssText='color:black;'    
    document.querySelector('#one').classList.replace('d-none','d-block')
    document.querySelector('#two').classList.replace('d-block','d-none')
    document.querySelector('#three').classList.replace('d-block','d-none')
    document.querySelector('#four').classList.replace('d-none','d-block')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-block','d-none')
    document.querySelector('#seven').classList.replace('d-block','d-none')

})
document.querySelector('#branding').addEventListener('click',function(){
    document.getElementById('all').style.cssText='color:black;'
    document.getElementById('graphic').style.cssText='color:black;'
    document.getElementById('webDesign').style.cssText='color:black;'
    document.getElementById('branding').style.cssText='color:#20c997;'
    document.querySelector('#one').classList.replace('d-block','d-none')
    document.querySelector('#two').classList.replace('d-none','d-block')
    document.querySelector('#three').classList.replace('d-block','d-none')
    document.querySelector('#four').classList.replace('d-block','d-none')
    document.querySelector('#five').classList.replace('d-none','d-block')
    document.querySelector('#six').classList.replace('d-none','d-block')
    document.querySelector('#seven').classList.replace('d-none','d-block')

})



$(window).scroll(function () { 
    if($(window).scrollTop() >=20){
        document.querySelector('nav').style.cssText='background-color:black;'
        console.log(window.scroll);

    }else {
        document.querySelector('nav').style.cssText='background-color:transparent;'

    }
});

document.getElementById('small').addEventListener('click', function () {
    if ($(window).scrollTop() <= 100) {
        window.scrollTo(0, 100)
    }
    
})

var typed = new Typed('.element', {
    strings: ["I'm Simone Olivia","I'm a Freelancer", "I'm a Photographer"],
    typeSpeed: 50,
    backSpeed:60,
    loop:true
  });
