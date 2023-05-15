import { Injectable } from '@nestjs/common';
import { addRoleDto, getSignUpUserDTO } from '../DTOs/getSignUpUser.dto';

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Injectable()
export class SignupService {
  async getSignUpUser(userDetails: getSignUpUserDTO) {
    try {
      const newUser = await prisma.users.create({
        data: {
          ...userDetails,
          created_at: `${new Date()}`,
          updated_at: `${new Date()}`,
        },
      });
      console.log(newUser);
    } catch (error) {}
  }
}
