import { Module } from "@nestjs/common";
import { UsersController } from "./user.controller";
import { UserService } from "./user.service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "../entities/user.entity";

@Module({
    imports: [
        SequelizeModule.forFeature([User])
    ],
    exports: [SequelizeModule],
    controllers: [UsersController],
    providers: [UserService],
})
export class UserModule {}