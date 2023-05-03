function openCity(city){
    var londonText="<h3>London</h3>London is the capital city of England."
    var parisText="<h3>Paris</h3>Paris is the capital of France."
    var tokyoText="<h3>Tokyo</h3>Tokyo is the capital of Japan."
    var displaytext=document.getElementById("displaytext")

    if(city=="London"){
        displaytext.innerHTML=londonText
        displaytext.classList.add("d-block")
    }
    else if(city=="Paris"){
        displaytext.innerHTML=parisText
        displaytext.classList.add("d-block")
    }
    else if(city=="Tokyo"){
        displaytext.innerHTML=tokyoText
        displaytext.classList.add("d-block")
    }
}