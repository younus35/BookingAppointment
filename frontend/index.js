//we wont be using this in the further backend app after commit message "sql added"
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
    .post("http://localhost:3000/user/add-user",myobj)
    .then(res => {console.log(res)
      showUserOnScreen(myobj);})
    .catch(err => console.log(err))
    // create a show users on screen function
  }
  window.addEventListener("DOMContentLoaded",() => {
    axios.get("http://localhost:3000/user/get-users")
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
        .delete(`http://localhost:3000/user/delete-user/${myobj.id}`)
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
       axios
      .put(`https://crudcrud.com/api/6c8272fd2f4447f1baf6e15f0ad146e7/AppointmentDetails/${myobj._id}`,{
          username :myobj.username,
          email:myobj.email,
          phone:myobj.phone
    }).then( res => {
      document.getElementById('username').value = myobj.username;
      document.getElementById('email').value = myobj.email;
      document.getElementById('phone').value = myobj.phone;
      axios
      .delete(`https://crudcrud.com/api/6c8272fd2f4447f1baf6e15f0ad146e7/AppointmentDetails/${myobj._id}`)
      .then(res => {
        console.log(res)
        details.removeChild(newli);})
      .catch(err => console.log(err))
      
    })
    .catch(err => console.log(err))
      // axios
      // .delete(`https://crudcrud.com/api/6c8272fd2f4447f1baf6e15f0ad146e7/AppointmentDetails/${myobj._id}`)
      // .then(res => {
      //   console.log(res)
      //   details.removeChild(newli);})
      // .catch(err => console.log(err))
        
      }
      newli.appendChild(edit);
      details.appendChild(newli);
      } 