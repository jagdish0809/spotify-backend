import { Module } from '@nestjs/common';
import { SongsController } from './songs.controller';
import { SongsService } from './songs.service';
import { connection } from 'src/common/constants/connections';

// const mockSongsService = {
//     findAll() {
//         return [{ id: 1, title: 'Lasting lover' }]
//     }
// }

@Module({
    controllers: [SongsController],
    providers: [
        SongsService, //Standard convention

        // {
        //     provide: SongsService,
        //     useClass: SongsService
        // }

        // {
        //     provide: SongsService,
        //     useValue: mockSongsService,
        // }

        {
            provide: 'CONNECTION',
            useValue: connection
        }
    ]
})
export class SongsModule { }
