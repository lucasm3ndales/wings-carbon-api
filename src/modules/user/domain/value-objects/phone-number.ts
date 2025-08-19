import { BadRequestException } from "@nestjs/common";


export class PhoneNumber {
    constructor(public readonly phoneNumber: string) {
        if (!PhoneNumber.isValid(phoneNumber))
            throw new BadRequestException('Invalid phone number format.');

    }

    static isValid(phoneNumber: string): boolean {
        //todo: implementar método de validação de telefone
        return true;
    }

    equals(value: string) {
        if (value === null || value === undefined) {
            return false;
        }

        return this.phoneNumber === value;
    }
}