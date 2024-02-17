import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { ENV, SequalizeConfig } from './config/sequelize-config';
import { UserModule } from './modules/users/modules/user.module';

@Module({
  imports: [
    SequelizeModule.forRoot(
      new SequalizeConfig(ENV.Development).getConfig()
    ),
    UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
