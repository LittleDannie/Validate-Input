// validation script
const inputs = document.querySelectorAll('input');
const patterns = {
	username: /^[\w-]{3,12}$/,
	fullname: /^[a-zA-Z]{2,20}\s[a-zA-Z]{2,20}$/,
	password: /^[@-\w\$\&\%]{8,12}$/,
	telephone: /^(070|080|090|091)[\d]{8}$/,
	nin: /^\d{11}$/
} 

function validate(field, regex) {
	if (regex.test(field.value)) {
		field.className = 'valid';
	} else {
		field.className = 'notvalid';
	}
}

inputs.forEach((input)=> {
	input.addEventListener('keyup', (e)=> {
		validate(e.target, patterns[e.target.attributes.name.value]);
	});
});
