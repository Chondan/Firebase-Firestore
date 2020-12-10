# Firebase Firestore

## Firestore
- Firestor is a real-time database
- Firestor is a NoSQL database
	- collection
		- document
- Firestore makes life easier
- addind data
	- `db.collection(<collection name>).doc(<docId>).set({...obj})`
	- `db.collection(<collection name>).add({...obj})`
- delete data
	- `db.collection(<collection name>).doc(<docId>).delete()`
- queries
	- additional queries
		- `db.collection(<collection name>).where('city', '<', 'n').get().then(snapshot => {})`
- ordering data
	- Note: In firebase, cappital letter come before lowercase letter.
	- `db.collection(<collection name>).orderBy(<field name>).get().then(snapshot => {})`
- realtime database
	- onSnapshot listener
```JavaScript
db.collection('cafes').orderBy('city').onSnapshot((snapshot) => {
	const changes = snapshot.docChanges();
	console.log(changes);
	cafeList.innerHTML = '';
	snapshot.forEach(doc => {
		cafeList.innerHTML += renderCafe(doc);
	});
}, err => console.error(err));
```
- updating data
	- `db.collection(<collection name>).doc(<docId>).update({...obj})` (merge with the exist field)
	- `db.collection(<collection name>).doc(<docId>).set({...obj})` (overwrite the exist field)

## Lesson Learned
- css
	- letter-spacing
- access form's element
	- `form.<name attribute's value>.value` -> e.g. `form.city.value`
- JavaScript
	- `e.stopPropagation();` -> Example: https://www.w3schools.com/jquery/tryit.asp?filename=tryjquery_event_stoppropagation
		- The `stopPropagation()` method of the Event interface prevents further propagation of the current event in the capturing and bubbling phases.

## Another
- Cloud Functions
- Storage
- Hosting
- MLKit
- Anaylytics