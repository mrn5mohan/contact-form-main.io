const form = document.getElementById('form-id');
const alert =document.getElementById('alert');

form.addEventListener('submit',(e)=>{
  e.preventDefault()

  const firstname = document.getElementById('Firstname').value.trim();
  
  const lastname = document.getElementById('lastname').value.trim();
  
  const email = document.getElementById('email').value.trim();
  
  const querytype = document.querySelector('input[name="querytype"]:checked');
  
  const mssge = document.getElementById('mssge').value.trim();
  
  const checkbox = document.getElementById('check').checked;

  let isvalid =true;

    if(firstname===''){
      isvalid=false;
      document.querySelector('#Firstname + .error').style.display ='block';
      document.querySelector('#Firstname').style.border='1px solid hsl(0, 66%, 54%)';

    }
    else{
      document.querySelector('#Firstname + .error').style.display ='none';
      document.querySelector('#Firstname').style.border ='1px solid hsl(186, 15%, 59%)';
    }
    if(lastname===''){
      isvalid=false;
      document.querySelector('#lastname + .error').style.display ='block';
      document.querySelector('#lastname').style.border='1px solid hsl(0, 66%, 54%)';

    }
    else{
      document.querySelector('#lastname + .error').style.display ='none';
      document.querySelector('#lastname').style.border ='1px solid hsl(186, 15%, 59%)';
    }
    if(email===''){
      isvalid=false;
      document.querySelector('#email + .error +.error').style.display ='block';
      document.querySelector('#email').style.border='1px solid hsl(0, 66%, 54%)';

    }
    else if(!isvalidemail(email)){
        isvalid=false;
        document.querySelector('#email + .error').style.display ='block';
        document.querySelector('#email').style.border='1px solid hsl(0, 66%, 54%)';  
    }
    else{
      document.querySelector('#email + .error').style.display ='none';
      document.querySelector('#email + .error +.error').style.display ='none';
      document.querySelector('#email').style.border ='1px solid hsl(186, 15%, 59%)';
    }

    if(!querytype){
      isvalid=false;
      document.querySelector('.box + .error').style.display ='block';
    }
    else{
      document.querySelector('.box + .error').style.display ='none';
    }
    if(mssge===''){
      isvalid=false;
      document.querySelector('#mssge + .error').style.display ='block';
      document.querySelector('#mssge').style.border='1px solid hsl(0, 66%, 54%)';

    }
    else{
      document.querySelector('#mssge + .error').style.display ='none';
      document.querySelector('#mssge').style.border ='1px solid hsl(186, 15%, 59%)';
    }
    if(!checkbox){
      isvalid=false;
      document.querySelector('.consent + .error').style.display ='block';

    }
    else{
      document.querySelector('.consent + .error').style.display ='none';
    }

if(isvalid){
  alert.classList.add('active')
  form.reset()
}
})
function isvalidemail(email){
  const c=/\S+@\S+\.\S+/;
  return c.test(email);
}
