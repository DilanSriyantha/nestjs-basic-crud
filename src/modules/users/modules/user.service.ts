import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";

@Injectable()
export class UserService {

    constructor(
        @InjectModel(User)
        private users: typeof User
    )
    {}
  
    // get all users
    getAllUsers(): Promise<User[]> {
        return this.users.findAll();
    }

    // get one user
    getOneUser(id: number): Promise<User> {
        return this.users.findOne({
            where: {
                id,
            },
        });
    }

    // create a user
    createUser(user: Partial<User>): Promise<User> {
        return this.users.create(user);
    }

    // update a user
    updateUser(id: number, newDetails: Partial<User>): any {
        return this.users.update(newDetails, {
            where: {
                id,
            },
        });
    }

    // delete a user
    deleteUser(id: number): void {
        this.users.destroy({
            where: {
                id,
            },
        });
    }
}