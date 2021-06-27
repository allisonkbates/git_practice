let heartBtn = document.getElementById('heart-btn');
let heartIcon = document.getElementById('heart-icon');
let likes = 0;
let saveBtn = document.getElementById('save-btn');
let saveSnackbar = document.getElementById('save-snackbar');
let closeBtn = document.getElementById('close-btn');


function clickHeart() {
	likes += 1
	if (likes === 0 || likes === 4) {
		heartIcon.classList.remove('liked-3');
		likes = 0;
	} else if (likes === 1) {
		heartIcon.classList.add('liked-1');
		console.log('liked-1!');
	} else if (likes === 2) {
		heartIcon.classList.remove('liked-1');
		heartIcon.classList.add('liked-2');
		console.log('liked-2!');
	} else if (likes === 3) {
		heartIcon.classList.remove('liked-2');
		heartIcon.classList.add('liked-3');
		console.log('liked-3!');
	}
} 

function showSaveSnackbar() {
    saveSnackbar.classList.add('show');
    console.log('showing');
    setTimeout(function() { saveSnackbar.className = saveSnackbar.className.replace('show', ''); }, 3000);
}

function closeSaveSnackbar() {
    saveSnackbar.classList.remove('show');
    console.log('closing snackbar');
}

heartBtn.addEventListener('click', clickHeart);
saveBtn.addEventListener('click', showSaveSnackbar);
closeBtn.addEventListener('click', closeSaveSnackbar);






/* TO DOs
- Get correct edit button icon and make it wiggle on hover
- Let edit button actually edit name


*/