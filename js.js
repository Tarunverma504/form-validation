const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');
function showError(input,message){

	const formControl= input.parentElement;
	formControl.className="form-control error";
	const small=formControl.querySelector('small');
	small.innerText = message;  
}
function showSuccess(input){
	const formControl= input.parentElement;
	formControl.className="form-control success";
}


form.addEventListener('submit',function(e){
	e.preventDefault();
	if(document.getElementById('username').value.trim().length==0){
		showError(username,'Username is required');
	}
	else
	{
		showSuccess(username);
	}
	var cat=/\w+\@\w+\.\w{2,10}/;
	var field=document.getElementById('email').value;
	if(cat.test(field)){
		console.log(field);
		showSuccess(email);
	}
	else if(field.trim()==0)
	{
		showError(email,'Email is Required');
	}
	else
	{
		showError(email,'Enter Valid email');
	}


	if(document.getElementById('password').value.trim()==0){
		showError(password,"password is required");
	}
	else
	{
		showSuccess(password);
	}

	if(document.getElementById('password2').value.trim()==0){
		console.log(password2);
		showError(password2,"Password is required");
	}
	else
	{
		if(document.getElementById('password2').value == document.getElementById('password').value)
		{
			showSuccess(password2);
			
		}
		else
		{
			showError(password2,"Password confirmation denied");
		}
	}
})