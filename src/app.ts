/*
This makes sure that the function only works with primitive types
Creating an object based on this class would fail since an object
is reference-based
*/

class DataStorage<T extends string | number | boolean> {
	private data: T[] = [];

	addItem(item: T) {
		this.data.push(item);
	}

	remoteItem(item: T) {
		/*
		This works only with primitive values
		When working with objects this would fail
		since when creating an object it creates a new
		one in the memory, but we access the old one
		*/
		this.data.splice(this.data.indexOf(item), 1);
	}

	getItems() {
		return [...this.data];
	}
}

/*
Here the generic function works with a string
*/

const textStorage = new DataStorage<string>();

textStorage.addItem("Babies first textStorage");
textStorage.addItem("A lying cake");
textStorage.remoteItem("A lying cake");
console.log(textStorage.getItems());

/*
Here the generic function works with a number
*/

const numberStorage = new DataStorage<number>();

numberStorage.addItem(33);
numberStorage.addItem(44);
numberStorage.remoteItem(44);
console.log(numberStorage.getItems());

/*
Union types also work as an example
*/

const unionStorage = new DataStorage<number | string>();

/*
This will not work since objects are not accepted as a datatype

const objStorage = new DataStorage<object>();
*/
