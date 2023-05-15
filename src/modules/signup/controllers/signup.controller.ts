import { Body, Controller, Post } from '@nestjs/common';
import { SignupService } from '../services/signup.service';
import { getSignUpUserDTO } from '../DTOs/getSignUpUser.dto';

@Controller('signup')
export class SignupController {
  constructor(private signupService: SignupService) {}

  @Post()
  async getSignup(@Body() getSignUpUser: getSignUpUserDTO) {
    return await this.signupService.getSignUpUser(getSignUpUser);
  }
}
