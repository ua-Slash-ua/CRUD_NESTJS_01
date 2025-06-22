import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {Book, BooksService, TypeBook} from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {

    }

    @Get()
    findAll(): Book[] {
        return this.booksService.findAll()
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id: number):Book|null{
        return this.booksService.findOne(id)
    }

    @Post()
    create(@Body() bookData:TypeBook):Book|null {
        return this.booksService.create(bookData)
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id: number):Book|null {
        return this.booksService.remove(id)
    }

}
