let uploadPreset = 'cxnbrlay'
let cloudName = 'dztulz5w5'
let showImages = document.getElementById('showImages')


let uploadBtn = document.getElementById("uploadBtn")

uploadBtn.addEventListener("click",async ()=>{
    let inputFile = document.getElementById("inputFile")
   let file = inputFile.files[0]
   if(!file){
    alert("plz select any file")
   }
   const formData = new FormData();
   formData.append("file", file);
   formData.append("folder", "postApp");
   formData.append ("upload_preset",uploadPreset)

   try{
    let response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/upload`,{
        method:"Post",
        body: formData
    })
    const result = await response.json()
    console.log('result:',result);
    showImages.innerHTML += `<div><img src='${result.secure_url}'></div>`
    

   }catch(err){
    console.log("error in uploading :", err);
    
   }
   
    

})