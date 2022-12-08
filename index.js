function rect_btn(){
    let container = document.getElementById("rect-card-3");
    let content = document.getElementById("rect-card-content-3");
    let img= document.getElementById("group8815")
    if(content.style.display =="block")
    {
        content.style.display="none"
        container.style.color="#000000"
        container.style.backgroundColor="#ffffff"
        img.src="assets/Group 8813.svg"        
    }
    else{
        content.style.display="block"
        container.style.color="#ffffff"
        container.style.backgroundColor="#000000"
        img.src="assets/Group 8815.svg"
    }
}