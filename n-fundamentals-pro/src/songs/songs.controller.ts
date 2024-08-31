import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';

@Controller('songs')
export class SongsController {
    constructor(private songsService: SongsService) { }

    @Post()
    createSong(@Body() createSongDTO: CreateSongDTO) {
        return this.songsService.create(createSongDTO)
    }

    @Get()
    findAll() {
        try {
            return this.songsService.findAll()
        } catch (error) {
            // console.log(`I am in the catch block ${error}`)
            throw new HttpException('Internal server error.', HttpStatus.INTERNAL_SERVER_ERROR, {
                cause: error,
            })
        }
    }

    @Get(':id')
    findSongById(@Param('id', new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id: number) {
        return `Find song by id: ${id}`
    }

    @Put(':id')
    updateSongById() {
        return 'Update song by id.'
    }

    @Delete(':id')
    deleteSongById() {
        return 'Delete song by id.'
    }
}
