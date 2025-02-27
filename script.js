//your JS code here. If required.

document.getElementById("btn").addEventListener("click",async function(){

	const message = document.getElementById("text").value;
	const delay = parseInt(document.getElementById("delay").value);
	const output = document.getElementById("output");
	
	if(isNaN(delay)||delay<0)
	{
		output.innerHTML="Please enter a valid delay in milliseconds.";
		return;
	}

	await new Promise(resolve => setTimeout(resolve,delay));
	output.innerHTML=message;
})