import { Injectable } from '@nestjs/common';
import { UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(email: string, pass: string): Promise<{ access_token: string }> {
    const user = await this.usersService.findAll();
    const filter_user = user.filter((element) => {
      if (element.email == email) return element;
    });
    if (filter_user[0]?.password !== pass) {
      throw new UnauthorizedException();
    }

    const payload = { sub: filter_user[0].id, email: filter_user[0].email };
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
