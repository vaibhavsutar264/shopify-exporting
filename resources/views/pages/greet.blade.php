@extends('templates.page')
@section('content')

<style>

/* .form-control small{
    color: red;
    position: absolute;
    left: 0;
    visibility: hidden;
}

.form-control.error small{
    visibility: visible;
} */

.error{
    color: red;
    margin: 0px;
    text-align: left;
}

#userError{
    color: red;
    margin: 0px;
    text-align: left;
}


</style>

<div class="grid grid-cols-1 md:grid-cols-2 px-3 md:px-0 py-6 md:py-20 gap-6 md:items-center">
   <div class="grid__col">
      <header class="mb-4">
         <h1 class="mb-3 text-3xl font-bold">Hi customer name,</h1>
         <p>
            Thank you for placing order with us.
            Please add a gift message for order id #{{ $values->order_id }}
         </p>
      </header>
      <x-auth-validation-errors :errors="$errors" />
      <!-- action="{{ route('send_msg')  }}" method="post" enctype="multipart/form-data" -->
      <form action="" method="post" enctype="multipart/form-data" onsubmit="return validateForm()">
         @csrf
         <input type="hidden" name="order_id" value="{{ $values->order_id }}" />
         <input type="hidden" name="from_name" value="{{ $values->customer_name }}" />
         <input type="hidden" name="from_email" value="{{ $values->customer_email }}" />
         <input type="hidden" name="from_mobile_number" value="{{ $values->customer_phone }}" />
         <div class="mb-4 form-control" id="form-control">
           <label for="order_id" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Order Id</label>
           <input type="text" value="{{ old('order_id') }}" name="order_id" id="order_id" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
         </div>
         <div class="mb-4 form-control" id="form-control" >
           <label for="from_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gift message from</label>
           <input type="text" value="{{ old('from_name') }}" name="from_name" id="from_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           <p class="error" id="userError"></p>
         </div>
         <div class="mb-4 form-control" id="form-control">
           <label for="from_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email sent from</label>
           <input type="email" value="{{ old('from_email') }}" name="from_email" id="from_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required>
           <p class="error" id="emailError"></p>
         </div>
         <div class="mb-4 form-control" id="form-control">
           <label for="from_mobile_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Phone number of sender</label>
           <input type="tel" value="{{ old('from_mobile_number') }}" name="from_mobile_number" id="from_mobile_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10 digits mobile number." required>
           <p class="error" id="from-number-Error"></p>
         </div>
         <div class="mb-4 form-control" id="form-control">
           <label for="receipent_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gift messge receiver name</label>
           <input type="text" value="{{ old('receipent_name') }}" name="receipent_name" id="receipent_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
           <p class="error" id="receipent_name_Error"></p>
         </div>
         <div class="mb-4 form-control" id="form-control">
           <label for="receipent_email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receiver email</label>
           <input type="email" value="{{ old('receipent_email') }}" name="receipent_email" id="receipent_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@example.com" required>
           <p class="error" id="receipent_email_Error"></p>
         </div>
         <div class="mb-4 form-control" id="form-control">
           <label for="receipent_mobile_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Receiver phone</label>
           <input type="tel" value="{{ old('receipent_mobile_number') }}" name="receipent_mobile_number" id="receipent_mobile_number" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="10 digits mobile number." required>
           <p class="error" id="receipent_mobile_number_Error"></p>
         </div>
         <div class="mb-4 form-control" id="form-control">
            {{-- <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your message (audio/video)</label> --}}
            <label class=" block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300" for="user_avatar">Upload file (audio/video)</label>
            <input accept="video/mp4,video/x-m4v,video/*,audio/mp3" onchange="validateSize(this)" name="attachment" class="p-2 block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" aria-describedby="user_avatar_help" value="{{ old('attachment') }}" id="user_avatar" type="file">
            <p class="error" id="file-size-Error"></p>
            <div class="mt-1 text-sm text-gray-500 dark:text-gray-300" id="user_avatar_help">A audio/video file format containing your message. (only accepts images of png type and video of mp4 type)</div>
         </div>
         <input type="submit" value="submit" class="btn text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
       </form>
   </div>
   <div class="grid__col">
      <img src="../img/gift.jpg" alt="" class="w-full rounded-xl" />
   </div>
</div>

<script>
let fromName = document.getElementById('from_name');
let fromEmail = document.getElementById('from_email');
let fromMobileNumber = document.getElementById('from_mobile_number');
let receipentName = document.getElementById('receipent_name');
let receipentEmail = document.getElementById('receipent_email');
let receipentMobileNumber = document.getElementById('receipent_mobile_number');
let submitSuccess = 1; //this to be used for final submission of login credentials ,
//this is just a switch or a tag to submit all things



function validateForm(){
    if(fromName.value == ""){
        document.getElementById('userError').innerText = "from name is blank";
        submitSuccess = 0;
    }else if(fromName.value.length <3){
        document.getElementById('userError').innerText = "from name should contain min 3 characters";
        submitSuccess = 0;
    } else{
        document.getElementById('userError').innerText = "";
        submitSuccess = 1;
        
        //it means if there is
        // no error then dont show any msg
    }
    if(fromMobileNumber.value == ""){
        document.getElementById('from-number-Error').innerText = "from mobile number is blank";
        submitSuccess = 0;
    }else if(fromMobileNumber.value.length <10){
        document.getElementById('from-number-Error').innerText = "from mobile number should contain min 10 characters";
        submitSuccess = 0;
    } else{
        document.getElementById('from-number-Error').innerText = "";
        submitSuccess = 1;
        
        //it means if there is
        // no error then dont show any msg
    }
    if(receipentName.value == ""){
        document.getElementById('receipent_name_Error').innerText = "receipent name is blank";
        submitSuccess = 0;
    }else if(receipentName.value.length <3){
        document.getElementById('receipent_name_Error').innerText = "receipent name should contain min 3 characters";
        submitSuccess = 0;
    } else{
        document.getElementById('receipent_name_Error').innerText = "";
        submitSuccess = 1;
        
        //it means if there is
        // no error then dont show any msg
    }
    if(receipentEmail.value == ""){
        document.getElementById('receipent_email_Error').innerText = "receipent email is blank";
        submitSuccess = 0;
    }else if(receipentEmail.value.length <3){
        document.getElementById('receipent_email_Error').innerText = "receipent email should contain min 3 characters";
        submitSuccess = 0;
    } else{
        document.getElementById('receipent_email_Error').innerText = "";
        submitSuccess = 1;
        
        //it means if there is
        // no error then dont show any msg
    }
    if(receipentMobileNumber.value == ""){
        document.getElementById('receipent_mobile_number_Error').innerText = "receipent mobile number is blank";
        submitSuccess = 0;
    }else if(receipentMobileNumber.value.length <10){
        document.getElementById('receipent_mobile_number_Error').innerText = "receipent mobile number should contain min 10 characters";
        submitSuccess = 0;
    } else{
        document.getElementById('receipent_mobile_number_Error').innerText = "";
        submitSuccess = 1;
        
        //it means if there is
        // no error then dont show any msg
    }
    if(fromEmail.value == ""){
        document.getElementById('emailError').innerText = "from email is blank";
        submitSuccess = 0;
    }else if(fromEmail.value.length <6){
        document.getElementById('emailError').innerText = "from email should contain @ character";
        submitSuccess = 0;
    } else{
        document.getElementById('emailError').innerText = "";
        submitSuccess = 1;
         //it means if there is
        // no error then dont show any msg
    }
    if(submitSuccess){
        return true;
    } else {
        return false;
    }
}
// validateForm();


//for file change less than 10mb 

function validateSize(input) {
  const fileSize = input.files[0].size / 1024 / 1024; // in MiB
  if (fileSize > 10) {
    document.getElementById('file-size-Error').innerText = "File size exceeds 10 MB";
    alert('File size exceeds 10 MB');
    

    // $(file).val(''); //for clearing with Jquery
  } else {
    // Proceed further
  }
}


// const fromName = document.getElementById('from_name');
// const fromEmail = document.getElementById('from_email');
// const fromMobileNumber = document.getElementById('from_mobile_number');
// const receipentName = document.getElementById('receipent_name');
// const receipentEmail = document.getElementById('receipent_email');
// const receipentMobileNumber = document.getElementById('receipent_mobile_number');
// const formControl = document.getElementById('form-control');
// const username = document.getElementById('username');
// const email = document.getElementById('email');
// const phone = document.getElementById('phone');
// const password = document.getElementById('password');
// const cpassword = document.getElementById('cpassword');


// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     validate();
// })



// //defining a success msg previously only so that after the form gets success it will show
// //the successmsgs it has been called at the validation end 



// const isfromEmail = (fromEmailVal) => {
//     var atSymbol = fromEmailVal.indexOf('@');
//     if (atSymbol < 1) return false;
//     var dot = fromEmailVal.lastIndexOf('.');
//     if (dot <= atSymbol + 2) return false; //it means at symbol is at position 10 then dot 
//     //should be atleast after atsymbol should be at min 13 position 
//     if (dot === fromEmailVal.length - 1) return false; //it means dot should not be at last position
//     return true;
// }

// const validate = () => {
//     const fromNameVal = fromName.value.trim();  //this is used to trim the before and after void
//     const fromEmailVal = fromEmail.value.trim();  //this is used to trim the before and after void
//     const fromMobileNumberVal = fromMobileNumber.value.trim();  //this is used to trim the before and after void
//     const receipentNameVal = receipentName.value.trim();  //this is used to trim the before and after void
//     const receipentEmailVal = receipentEmail.value.trim();  //this is used to trim the before and after void
//     const receipentMobileNumberVal = receipentMobileNumber.value.trim();  //this is used to trim the before and after void
//     const usernameVal = username.value.trim();  //this is used to trim the before and after void
//     // spaces in inputs
//     const emailVal = email.value.trim();
//     const phoneVal = phone.value.trim();
//     const passwordVal = password.value.trim();
//     const cpasswordVal = cpassword.value.trim();

//     // validate username

//     if (fromNameVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(fromName, 'first name cannot be blank');
//     } else if (fromNameVal.length <= 2) {
//         setErrorMsg(fromName, 'first name should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(fromName);
//     }

//     if (receipentNameVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(receipentName, 'middle name cannot be blank');
//     } else if (receipentNameVal.length <= 2) {
//         setErrorMsg(receipentName, 'middle name should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(receipentName);
//     }


//     if (lastNameVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(lastName, 'lastName cannot be blank');
//     } else if (lastNameVal.length <= 2) {
//         setErrorMsg(lastName, 'lastName should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(lastName);
//     }


//     if (address1Val === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(address1, 'address1 cannot be blank');
//     } else if (address1Val.length <= 2) {
//         setErrorMsg(address1, 'address1 should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(address1);
//     }


//     if (address2Val === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(address2, 'address2 cannot be blank');
//     } else if (address2Val.length <= 2) {
//         setErrorMsg(address2, 'address2 should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(address2);
//     }


//     if (zipCodeVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(zipCode, 'zipCode cannot be blank');
//     } else if (zipCodeVal.length <= 2) {
//         setErrorMsg(zipCode, 'zipCode should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(zipCode);
//     }


//     if (usernameVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(username, 'username cannot be blank');
//     } else if (usernameVal.length <= 2) {
//         setErrorMsg(username, 'username should contain atleat 3 charactors');
//     } else {
//         setSuccessMsg(username);
//     }

//     //validate email 

//     if (fromEmailVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(fromEmail, 'email cannot be blank');
//     } else if (!isEmail(fromEmailVal)) {
//         //if iemail is not equal to the required success email
//         setErrorMsg(fromEmailVal, 'not a valid email');
//     } else {
//         setSuccessMsg(fromEmail);
//     }

//     // validate phone

//     if (fromMobileNumberVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(fromMobileNumber, 'phone number cannot be blank');
//     } else if (fromMobileNumberVal.length != 10) {
//         //if iemail is not equal to the required success email
//         setErrorMsg(fromMobileNumber, 'not a valid number, shd be 10 digits');
//     } else {
//         setSuccessMsg(fromMobileNumber);
//     }

//     // validate password


//     if (passwordVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(password, 'password cannot be blank');
//     } else if (passwordVal.length <= 5) {
//         //if iemail is not equal to the required success email
//         setErrorMsg(password, 'password should contain atleast 6 characters');
//     } else {
//         setSuccessMsg(password);
//     }


//     if (cpasswordVal === "") {
//         // function(argument1(for which field u wants to pass error msg),argument2(what will be error))
//         setErrorMsg(cpassword, 'cpassword cannot be blank');
//     } else if (passwordVal != cpasswordVal) {
//         setErrorMsg(cpassword, 'password doesnt match');
//     } else {
//         setSuccessMsg(cpassword);
//     }

//     localStorage.setItem('name1',firstNameVal);
//     localStorage.setItem('middleName1',middleNameVal);
//     localStorage.setItem('lastNameVal',lastNameVal);
//     localStorage.setItem('address1Val',address1Val);
//     localStorage.setItem('address2Val',address2Val);
//     localStorage.setItem('zipCodeVal',zipCodeVal);
//     localStorage.setItem('usernameVal',usernameVal);
//     localStorage.setItem('emailVal',emailVal);
//     localStorage.setItem('phoneVal',phoneVal);
//     localStorage.setItem('passwordVal',passwordVal);
//     localStorage.setItem('cpasswordVal',cpasswordVal);




//     // successMsg();  //successMsg called and it has been defined at above
//     //now we will define this function by arrow function so it should be define at top only
// }

// //now we will check about error msg functioning in error msg we have passed two arguments
// //which is which input field and what is the error msg

// function setErrorMsg(input, errormsgs) {

//     //input means the input tag in a div and its parent element means form control div
//     const formControl = input.parentElement;
//     const small = formControl.querySelector('small');
//     formControl.className = "form-control error";
//     small.innerText = errormsgs;

// }

// function setSuccessMsg(input) {
//     const formControl = input.parentElement;
//     formControl.className = "form-control success";

// }




</script>

@endsection
