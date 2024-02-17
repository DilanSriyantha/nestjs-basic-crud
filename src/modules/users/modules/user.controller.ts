import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "../entities/user.entity";
import { UserDTO } from "../dto/user.dto";

@Controller("users")
export class UsersController{
    constructor(private readonly userService: UserService)
    {}

    // get all users
    @Get()
    getAllUsers(): Promise<User[]>{
        return this.userService.getAllUsers();
    }

    // get one user
    @Get(":id")
    async getOneUser(
        @Param("id") id: number
    ): Promise<User | any> {
        try{
            const user = await this.userService.getOneUser(id);
            if(user){
                return user;
            }
        }catch(err){
            return err;
        }
    }

    // create a user
    @Post()
    createUser(
        @Body() user: Partial<User>,
    ): Promise<User>{
        return this.userService.createUser(user);
    }

    // update a user
    @Put(":id")
    updateUser(
        @Param("id") id: number,
        @Body() newDetails: Partial<User>
    ): Promise<any> {
        return this.userService.updateUser(id, newDetails);
    }

    // delete a user
    @Delete(":id")
    deleteUser(@Param("id") id: number): void {
        return this.userService.deleteUser(id);
    }
}