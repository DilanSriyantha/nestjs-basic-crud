import { SequelizeModuleOptions } from "@nestjs/sequelize";
import { User } from "src/modules/users/entities/user.entity";

export enum ENV {
    Development,
    Production
};

export class SequalizeConfig {
    private readonly environment: ENV;

    constructor(env: ENV){
        this.environment = env;
    }
    
    getConfig(): SequelizeModuleOptions {
        if(this.environment === ENV.Development){
            return{
                username: "root",
                password: "",
                database: "test",
                host: "localhost",
                port: 4000,
                dialect: "mysql",
                define: {
                    timestamps: true,
                },
                models: [
                    User
                ],
                autoLoadModels: true,
            };
        }else if(this.environment === ENV.Production){
            return{
                username: "",
                password: "",
                database: "",
                host: "",
                port: 4000,
                dialect: "mysql",
                define: {
                    timestamps: true,
                },
                models: [

                ],
                autoLoadModels: false,
            }
        }else{
            throw Error("Environment is undefined to generate Sequelize configuration.");
        }
    };
};