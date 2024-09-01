import { Body, Controller, Delete, Get, HttpException, HttpStatus, Inject, Param, ParseIntPipe, Post, Put, Scope } from '@nestjs/common';
import { SongsService } from './songs.service';
import { CreateSongDTO } from './dto/create-song-dto';
import { Connection } from 'src/common/constants/connections';

@Controller({
    path: 'songs',
    scope: Scope.REQUEST
})
export class SongsController {
    constructor(private songsService: SongsService,
        @Inject('CONNECTION')
        private connection: Connection,
    ) {
        console.log(`DATABASE NAME: ${this.connection.DBNAME}`);
    }

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
