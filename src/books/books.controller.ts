import {Body, Controller, Delete, Get, Param, ParseIntPipe, Post} from '@nestjs/common';
import {Book, BooksService, TypeBook} from './books.service';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService) {

    }

    @Get()
    async findAll(){
        return this.booksService.findAll();
    }

    @Get(':id')
    findOne(@Param('id',ParseIntPipe) id: number):Book|null{
        return this.booksService.findOne(id)
    }

    @Post()
    async create(@Body() bookData:TypeBook) {
        await this.booksService.create(bookData)
    }

    @Delete(':id')
    remove(@Param('id',ParseIntPipe) id: number):Book|null {
        return this.booksService.remove(id)
    }

}
