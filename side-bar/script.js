let sideBar = $(".side-bar")
let principal = $(".principal")
sideBar.hide()


$("#menu").click(()=>{
    sideBar.animate({height:"100%"})
    sideBar.show()
    principal.addClass("fosco")
})


principal.dblclick(()=>{
   sideBar.hide()
   principal.removeClass("fosco")
})