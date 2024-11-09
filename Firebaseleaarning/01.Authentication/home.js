import {
  db,
  getFirestore,
  collection,
  addDoc,
  getDocs,
  Timestamp,
  query,
  orderBy,
  limit,
  doc, deleteDoc
} from "./firebase.js";
let displayPosts = document.querySelector("#displayPosts");

let getData = async () => {
  let arr = [];
  const q = query(
    collection(db, "posts"),
    orderBy("datenow", "desc"),
    
  );
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    arr.push({...doc.data(),docId:doc.id});
  console.log(arr);
  
    
  });
  arr.map((item) => {
    displayPosts.innerHTML += `<div class="card  " style="width: 18rem;">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.description}</p>
              <button id="dltBtn">delete</button>
              <button id="edtBtn">edit</button>
          
            </div>`;
  });

  let edtBtn = document.querySelectorAll("#edtBtn");
  let dltBtn = document.querySelectorAll("#dltBtn");

      dltBtn.forEach((btn,index) => {

    btn.addEventListener("click",async () => {

      console.log(arr[index].docId);
      try{
      await deleteDoc(doc(db, "posts", arr[index].docId));
      displayPosts.innerHTML = ''
      getData()
      }catch(e){
       console.log(e);
       
      }
    });
      });
      edtBtn.forEach((btn,index) => {
        btn.addEventListener("click", () => {
          
          console.log(btn,index);
        });
      });
};
getData();

let myForm = document.querySelector("#myForm");

let formSub = async (event) => {
  event.preventDefault();
  displayPosts.innerHTML = "";

  let title = document.querySelector("#title");
  let description = document.querySelector("#description");
  // console.log(title.value, description.value);
  try {
    const docRef = await addDoc(collection(db, "posts"), {
      title: title.value,
      description: description.value,
      datenow: Timestamp.fromDate(new Date()),
    });
    console.log("Document written with ID: ", docRef.id);
    getData();
    title.value = "";
    description.value = "";
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

myForm.addEventListener("submit", formSub);
