import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ERROR_CODE } from 'src/database/error';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private users: Repository<User>) {}

  async getByEmail(email: string) {
    const user = await this.users.findOneBy({
      email,
    });

    if (user) return user;

    throw new NotFoundException('해당 사용자가 존재하지 않습니다.');
  }

  async create(userDto: CreateUserDto) {
    try {
      const newUser = this.users.create(userDto);
      await this.users.save(newUser);
      return newUser;
    } catch (e) {
      if (e.errno === ERROR_CODE.unique) {
        throw new BadRequestException('동일한 이메일이 이미 존재합니다.');
      }
    }
  }
}
