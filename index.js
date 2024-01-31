const details = document.querySelector('.details');
function handleFormSubmit(event){
    event.preventDefault();
    
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
    
    //AXIOS CALL FOR POST TO SAVE USER DETAILS ON CRUD CRUD SERVER
    axios
    .post("https://crudcrud.com/api/a2481f4e3b5047c3828e2c07f503bc92/AppointmentDetails",myobj)
    .then(res => {console.log(res)
      showUserOnScreen(myobj);})
    .catch(err => console.log(err))
    // create a show users on screen function
  }
  window.addEventListener("DOMContentLoaded",() => {
    axios.get("https://crudcrud.com/api/a2481f4e3b5047c3828e2c07f503bc92/AppointmentDetails")
    .then((res) =>{
       console.log(res.data);

        for(var i=0; i<res.data.length; i++){
                showUserOnScreen(res.data[i])
        }
     })
     .catch(err => console.log(err))
     
    })

    function showUserOnScreen(myobj){
      const newli = document.createElement('li');
      const newlit = document.createTextNode(myobj.username+'-'+myobj.email+'-'+myobj.phone);
      newli.appendChild(newlit);
      const button = document.createElement('button');
      const buttont = document.createTextNode('delete');
      button.appendChild(buttont);
      button.onclick = () =>{
        axios
        .delete(`https://crudcrud.com/api/a2481f4e3b5047c3828e2c07f503bc92/AppointmentDetails/${myobj._id}`)
        .then(res => {
          console.log(res)
          details.removeChild(newli);})
        .catch(err => console.log(err))
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