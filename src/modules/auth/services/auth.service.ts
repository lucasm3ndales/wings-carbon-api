import { Injectable, Scope } from "@nestjs/common";
import { SignUpDto } from "../domain/dtos/sign-up.dto";
import { UserService } from "src/modules/user/services/user/user.service";


@Injectable()
export class AuthService {

    constructor(private readonly userService: UserService) {}

    signUp(signUpDto: SignUpDto) {

    }
}