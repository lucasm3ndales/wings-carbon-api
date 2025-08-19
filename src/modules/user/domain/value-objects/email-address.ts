import { BadRequestException } from "@nestjs/common";


export class EmailAddress {
    constructor(public readonly emailAddress: string) {
        if (!EmailAddress.isValid(emailAddress)) 
            throw new BadRequestException('Invalid email address format.');
        
    }

    static isValid(emailAddress: string): boolean {
        //todo: implementar método de validação de e-mail
        return true;
    }

    equals(value: string) {
        if (value === null || value === undefined) {
            return false;
        }

        return this.emailAddress === value;
    }
}