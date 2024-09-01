import { Injectable, Scope } from '@nestjs/common';
import { CreateSongDTO } from './dto/create-song-dto';

@Injectable({
    scope: Scope.TRANSIENT,
})
export class SongsService {
    // local db
    // local array

    private readonly songs: CreateSongDTO[] = [];

    create(song: CreateSongDTO) {
        // save the song in db
        this.songs.push(song);
        return this.songs;
    }

    findAll() {
        // fetch the song from db
        // Errors comes while fetching the data from DB
        // throw new Error('Error in Db while fetching record');
        return this.songs;
    }

}
