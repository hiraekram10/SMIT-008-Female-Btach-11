import { db,
    getFirestore, 
    collection, 
    addDoc,getDocs,Timestamp ,
    query,
    orderBy, limit } from "./firebase.js"


    let getData = async ()=>{
        let displayPosts = document.querySelector("#displayPosts")
        let arr = []
        const q = query(collection(db, "posts"), orderBy("datenow", "desc"), limit(3));
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
         arr.push(doc.data());

        });
        arr.map((item)=>{
            displayPosts.innerHTML += `<div class="card  " style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
          
            </div>`
        })

        
     
        

  
    }
    getData()


let myForm = document.querySelector("#myForm")


let formSub = async (event)=>{
    event.preventDefault()

    let title = document.querySelector("#title")
    let description = document.querySelector("#description")
    // console.log(title.value, description.value);
    try {
        const docRef = await addDoc(collection(db, "posts"), {
        title:title.value,
        description:description.value,
        datenow: Timestamp.fromDate(new Date()),
        });
        console.log("Document written with ID: ", docRef.id);
        title.value= ''
        description.value = ''
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    
}

myForm.addEventListener("submit",formSub)


