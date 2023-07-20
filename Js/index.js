var siteName=window.document.getElementById("siteName")
var siteUrl=window.document.getElementById("siteUrl")
var tBody =window.document.getElementById("tBody")

var test=true;
var arrayOfObject=[]
var  siteIndex;
if(localStorage.getItem("arrayOfObject")!=null){

    arrayOfObject= JSON.parse(localStorage.getItem("arrayOfObject"))
    display()
}
function add(){
    if(validate(siteName,nameRegex) == true && validate(siteUrl, urlRegex) == true){
    
        for(var i=0;i<arrayOfObject.length;i++){
            if(siteName.value==arrayOfObject[i].siteName){
            test=false
        }
        }
        if(test==true){
        var siteObject={
            siteName:siteName.value,
            siteUrl:siteUrl.value,
        }    
        arrayOfObject.push(siteObject)
        localStorage.setItem("arrayOfObject",JSON.stringify(arrayOfObject))
        display()
        clear()
    }
    
    else{  
massage.classList.replace("d-none", "d-flex");
document.getElementById("massage").classList.replace("d-none","d-block")
}
    }
    else{  
        massage.classList.replace("d-none", "d-flex");
        document.getElementById("massage").classList.replace("d-none","d-block")
        }


}
function display(){
    var box=""
    for (var i=0;i<arrayOfObject.length;i++){
        box+=`
        <tr class="text-center">
            <td>${i+1}</td> 
            <td>${arrayOfObject[i].siteName}</td> 
            <td><a href="${arrayOfObject[i].siteUrl}" target="block"><button class="btn btn-primary btn-success"> <i class="fa-solid fa-eye vAn"></i> Visit</button></a></td>
            <td><button onclick="delete1(${i})"class="btn btn-danger"> <i class="fa-solid fa-trash-can dAn"></i> Delete</button>
            <td><button onclick="update1(${i})"class="btn btn-primary"> <i class="fa-solid fa-file-pen uAn"></i> Update</button>
            </tr> `

    }
 tBody.innerHTML=box
}
function clear(){
    siteName.value=""
    siteUrl.value=""  
}
function delete1(index) {
    arrayOfObject.splice(index, 1);
    localStorage.setItem("arrayOfObject", JSON.stringify(arrayOfObject));
    display();
}
function update1(index) {
    siteIndex=index;
    siteName.value=arrayOfObject[index].siteName
    siteUrl.value=arrayOfObject[index].siteUrl
    document.getElementById("btn-data").classList.replace("d-block","d-none")
    document.getElementById("btn-update").classList.replace("d-none","d-block")
}
function sendData(){
    arrayOfObject[siteIndex].siteName=siteName.value
    arrayOfObject[siteIndex].siteUrl=siteUrl.value
   localStorage.setItem("arrayOfObject",JSON.stringify(arrayOfObject))
    document.getElementById("btn-update").classList.replace("d-block","d-none")
    document.getElementById("btn-data").classList.replace("d-none","d-block")
    display()
    clear()

}


var nameRegex = /^[A-Z][a-z]{3,}$/;
var urlRegex =/^(?:http|https):\/\/(?:www\.)?[a-zA-Z0-9]+\.[a-zA-Z]+(?:\/[^\s]*)?$/;

function validate(element, regex) {
    if (regex.test(element.value)) {
      element.classList.add("is-valid");
      element.classList.remove("is-invalid");
      return true;
    } else {
      element.classList.add("is-invalid");
      element.classList.remove("is-valid");
      return false;
    }
  }

function closeMassage(){
    massage.classList.replace("d-flex", "d-none");
}