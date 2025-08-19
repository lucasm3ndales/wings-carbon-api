import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { SignUpDto } from "../domain/dtos/sign-up.dto";

@Controller('api/v1/auth/')
export class AuthController {

    constructor(private readonly authService: AuthService) {}

    @Post('sign-up')
    signIn(@Body() signUpDto: SignUpDto) {
        return this.authService.signUp(signUpDto);
    }

    @Post('sign-in')
    signUp() {

    }
}