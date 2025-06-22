import { Injectable, NotFoundException  } from '@nestjs/common';

export interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
}

export type TypeBook = {
    title: string;
    author: string;
    available: boolean;
}

@Injectable()
export class BooksService {
    private books:Book[] = []; // Тут зберігатимуться книги
    private idCounter = 0;

    create(bookData:TypeBook):Book {
            let newBook:Book = {id: this.idCounter,...bookData}
            this.idCounter++
            this.books.push(newBook)
            return newBook
    }

    findAll(): Book[] {
        return this.books;
    }


    findOne(id:number):Book | null {
        const book:Book| undefined = this.books.find(book=>book.id===id)
        return book ?? null;
    }

    remove(id:number) {
        const index = this.books.findIndex(book => book.id === id);
        if (index === -1) {
            return null;
        }
        const book = this.books[index];
        this.books.splice(index, 1);
        return book;
    }
}

