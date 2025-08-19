import { IsNotEmpty, IsOptional, IsString, Length } from "class-validator";

export class SignUpDto {
    @IsString()
    @IsNotEmpty({ message: 'O país é obrigatório.' })
    @Length(1, 63, { message: 'O país deve ser um código ISO 3166-1 alpha-2 de 2 caracteres.' })
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    password: string;
    address: AddressData
}

class AddressData {
    @IsString()
    @IsNotEmpty({ message: 'O país é obrigatório.' })
    @Length(2, 2, { message: 'O país deve ser um código ISO 3166-1 alpha-2 de 2 caracteres.' })
    country: string;

    @IsString()
    @IsNotEmpty({ message: 'O CEP/Código Postal é obrigatório.' })
    postalCode: string;

    @IsString()
    @IsNotEmpty({ message: 'A cidade é obrigatória.' })
    city: string;

    @IsString()
    @IsNotEmpty({ message: 'A rua é obrigatória.' })
    street: string;

    @IsString()
    @IsOptional()
    administrativeArea?: string;

    @IsString()
    @IsOptional()
    district?: string; 

    @IsString()
    @IsOptional()
    number?: string;

    @IsString()
    @IsOptional()
    complement?: string;
}