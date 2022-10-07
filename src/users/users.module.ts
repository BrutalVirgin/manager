import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserRepository } from './user.repository';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UserSchema } from '../shemas/user.schema';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'User', schema: UserSchema },
        ]),
    ],
    providers: [
        UserService,
        UserRepository,
    ],
    controllers: [UsersController],
})
export class UsersModule {

}
