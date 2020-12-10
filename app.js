const cafeList = document.querySelector('#cafe-list');
const form = document.querySelector('#add-cafe-form');

// create elemen and render cafe
function renderCafe(doc) {
	const { name, city } = doc.data();
	return `
		<li data-id="${doc.id}">
			<span>${name}</span>
			<span>${city}</span>
			<div onclick="deleteDoc(event);">X</div>
		</li>
	`;
}

// deleting data
function deleteDoc(event) {
	event.stopPropagation();
	let id = event.target.parentElement.getAttribute('data-id');
	db.collection('cafes').doc(id).delete();
}

// getting data
db.collection('cafes').orderBy('city').onSnapshot((snapshot) => {
	cafeList.innerHTML = '';
	snapshot.forEach(doc => {
		cafeList.innerHTML += renderCafe(doc);
	});
}, err => console.error(err));

// saving data
form.addEventListener('submit', function(e) {
	e.preventDefault();
	db.collection('cafes').add({
		name: form.name.value,
		city: form.city.value
	});
	form.reset();
});