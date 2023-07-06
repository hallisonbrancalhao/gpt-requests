import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/users/entities/users.entity';

@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    email: string,
    senha: string,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.userService.findUser(email);
    const validPassword: boolean = await bcrypt.compare(senha, user.senha);

    if (!validPassword) throw new UnauthorizedException();

    const payload = { sub: user._id, nome: user.nome };

    return {
      access_token: await this.jwtService.signAsync(payload),
      user: user,
    };
  }
}
