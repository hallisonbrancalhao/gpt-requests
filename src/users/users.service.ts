import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User } from './entities/users.entity';
import { Model } from 'mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    createUserDto.senha = await this.userHash(createUserDto.senha);
    this.userModel.create(createUserDto);
  }

  findAll() {
    return this.userModel.find().select('-senha');
  }

  findOne(id: string) {
    return this.userModel.findById(id).select('-senha');
  }

  findUser(email: string) {
    return this.userModel.findOne({ email: email });
  }

  update(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel
      .findByIdAndUpdate(
        id,
        {
          nome: updateUserDto.nome,
          sobrenome: updateUserDto.sobrenome,
          senha: updateUserDto.senha,
        },
        { new: true },
      )
      .select('-senha');
  }

  delete(id: string) {
    return this.userModel.findByIdAndDelete(id).select('-senha');
  }

  private async userHash(pass: string) {
    const saltOrRounds = 10;

    const hashedPass = await bcrypt.hash(pass, saltOrRounds);
    return hashedPass;
  }
}
