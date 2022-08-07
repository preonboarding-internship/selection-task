import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosModule } from './todos/todos.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

const isProduction = process.env.NODE_ENV === 'production';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: isProduction ? 'mysql' : 'sqlite',
      host: process.env.RDS_HOST,
      port: 3306,
      username: process.env.RDS_USERNAME,
      password: process.env.RDS_PASSWORD,
      database: isProduction ? process.env.RDS_DATABASE : 'db.sqlite',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TodosModule,
    AuthModule,
    UsersModule,
  ],
})
export class AppModule {}
