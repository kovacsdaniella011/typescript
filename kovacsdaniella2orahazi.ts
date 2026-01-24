class Book {
    id: string;
    title: string;
    author: string;
    price: number;
    constructor(id: string, title: string, author: string, price: number) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

/* Vagy: public-ot használva:

class Book {
    constructor(
        public id: string,
        public title: string,
        public author: string,
        public price: number
    ) {}
}
*/

class Library {
    private books: Book[] = []; //üres tömb a könyvekhez, és private, hogy ne legyen módosítható
    addBook(book: Book): void {
        this.books.push(book);
    }
    getBooks(): Book[] {
        return this.books;
    }
    removeBook(id: string): boolean {
        const index = this.books.findIndex(book => book.id === id);
        if (index !== -1) {
            this.books.splice(index, 1);
            return true;
        }
        return false;
    }
    findBookById(id: string): Book | void {
        return this.books.find(book => book.id === id);
    }

    listAllBooks(): void {
        this.books.forEach(book => {
            console.log(`ID: ${book.id}, Title: ${book.title}, Author: ${book.author}, Price: $${book.price}`);
        });
    }
}

class User {
    userid: string;
    username: string;
    email: string;
    constructor(userid: string, username: string, email: string) {
        this.userid = userid;
        this.username = username;
        this.email = email;
    }
    private borrowedBooks: Book[] = [];
    borrowBook(library: Library, bookId: string): boolean {
        const book = library.findBookById(bookId);
        if (book) {
            this.borrowedBooks.push(book);
            library.removeBook(bookId);
            return true;
        }
        return false;
    }
}