class DataStorage<T> {
    private items: Array<T> = [];

    addItem(item: T) {
        this.items.push(item);
    }

    removeItem(item: T) {
        // let newItems: Array<T> = [];
        // for (let i = 0; i < this.items.length; i++) {
        //     let currItem: T = this.items[i]!;
        //     if(currItem !== item) {
        //         newItems.push(currItem);
        //     }
        // }

        // this.items = newItems;
        this.items = this.items.filter(i => i !== item); // 'Macbook' !== 'Macbook' -> false
    }

    getItems(): T[] {
        return this.items;
    }
}




const textStorage = new DataStorage<string>();
textStorage.addItem('MacBook');
textStorage.addItem('Laptop');
textStorage.addItem('Bagpack');

textStorage.removeItem('MacBook');
textStorage.getItems().forEach(e => console.log(e));


const numberStorage = new DataStorage<number>();
numberStorage.addItem(10);
numberStorage.addItem(20);
numberStorage.addItem(30);

numberStorage.getItems().forEach(e => console.log(e));
numberStorage.removeItem(10);