import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "../services/auth.service";
import { SignUpDto } from "../domain/dtos/sign-up.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@ApiTags('Auth')
@Controller('api/v1/auth/')
export class AuthController {

    constructor(private readonly authService: AuthService) { }

    @Post('sign-up')
    @ApiOperation({ summary: 'Register a new user' })
    @ApiResponse({ status: 201, description: 'User created successfully.' })
    @ApiResponse({ status: 400, description: 'Invalid data provided.' })
    signIn(@Body() signUpDto: SignUpDto) {
        return this.authService.signUp(signUpDto);
    }

    @Post('sign-in')
    @ApiOperation({ summary: 'Authenticate a user' })
    @ApiResponse({ status: 200, description: 'Authentication successful.' })
    @ApiResponse({ status: 401, description: 'Invalid credentials.' })
    signUp() {
        
    }
}