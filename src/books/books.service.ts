import { Injectable, NotFoundException  } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

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
        constructor(private prisma: PrismaService) {}

    async create(bookData:TypeBook) {
        await this.prisma.modelBook.create({
            data:bookData
        })
    }

    async findAll() {
        return this.prisma.modelBook.findMany();
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

