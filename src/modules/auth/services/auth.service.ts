import { Injectable } from "@nestjs/common";
import { SignUpDto } from "../domain/dtos/sign-up.dto";
import { UserService } from "src/modules/user/services/user/user.service";
import { CredentialRepository } from "../domain/repositories/credential.repository";


@Injectable()
export class AuthService {

    constructor(
        private readonly credentialRepository: CredentialRepository,
        private readonly userService: UserService) { }

    signUp(signUpDto: SignUpDto) {
        
    }
}