function handleFormSubmit(event){
    event.preventDefault();
    const details = document.querySelector('.details');
    const name = event.target.username.value;
    const email = event.target.email.value;
    const phone = event.target.phone.value;
     const myobj={
      username:name,
      email:email,
       phone:phone
    };
    // let myobj_serialized = JSON.stringify(myobj);
    // localStorage.setItem(email,myobj_serialized);
   
      axios.get("https://crudcrud.com/api/9dc38fe5d920496db56c62c49eb6370d/AppointmentDetails")
      .then((res) =>{
        // console.log(res.data);
  
          for(var i=0; i<res.data.length; i++){
                  showUserOnScreen(res.data[i])
          }
       })
       .catch(err => console.log(err))
       
     
 
    //AXIOS CALL FOR POST TO SAVE USER DETAILS ON CRUD CRUD SERVER
    axios
    .post("https://crudcrud.com/api/9dc38fe5d920496db56c62c49eb6370d/AppointmentDetails",myobj)
    .then(res => console.log(res))
    .catch(err => console.log(err))
    // create a show users on screen function

    function showUserOnScreen(myobj){
    const newli = document.createElement('li');
    const newlit = document.createTextNode(myobj.username+'-'+myobj.email+'-'+myobj.phone);
    newli.appendChild(newlit);
    const button = document.createElement('button');
    const buttont = document.createTextNode('delete');
    button.appendChild(buttont);
    button.onclick = () =>{
    //  localStorage.removeItem(email);
      details.removeChild(newli);
    }
    newli.appendChild(button);
    const edit = document.createElement('button');
    const editt = document.createTextNode('edit');
    edit.appendChild(editt);
    edit.onclick = () =>{
   //   localStorage.removeItem(email);
      //details.removeChild(newli);
      document.getElementById('username').value = name;
      document.getElementById('email').value = email;
      document.getElementById('phone').value =phone;
    }
    newli.appendChild(edit);
    details.appendChild(newli);
    } 
  }
  
  