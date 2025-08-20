import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, Length, ValidateNested } from "class-validator";
import { Type } from 'class-transformer';
import { ApiProperty } from "@nestjs/swagger";

export class AddressData {
    @ApiProperty({
        description: 'The two-letter country code (ISO 3166-1 alpha-2)',
        example: 'US'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    @Length(2, 2, { message: 'validation.COUNTRY_LENGTH' })
    country: string;

    @ApiProperty({
        description: 'The postal or ZIP code',
        example: '94105'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    postalCode: string;

    @ApiProperty({
        description: 'The city name',
        example: 'San Francisco'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    city: string;

    @ApiProperty({
        description: 'The street name',
        example: 'Mission Street'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    street: string;

    @ApiProperty({
        description: 'The state, province, or administrative area',
        example: 'CA',
        required: false
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsOptional()
    administrativeArea?: string;

    @ApiProperty({
        description: 'The district or neighborhood',
        example: 'SoMa',
        required: false
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsOptional()
    district?: string;

    @ApiProperty({
        description: 'The building, house, or suite number',
        example: '525',
        required: false
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsOptional()
    number?: string;

    @ApiProperty({
        description: 'Additional address information (e.g., apartment, floor)',
        example: 'Apt 12B',
        required: false
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsOptional()
    complement?: string;
}

export class SignUpDto {
    @ApiProperty({
        description: 'The first name of the user',
        example: 'John'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    @Length(1, 63, { message: 'validation.LENGTH' })
    firstName: string;

    @ApiProperty({
        description: 'The last name of the user',
        example: 'Doe'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    @Length(1, 63, { message: 'validation.LENGTH' })
    lastName: string;

    @ApiProperty({
        description: 'The unique email address for the user',
        example: 'john.doe@example.com'
    })
    @IsEmail({}, { message: 'validation.IS_EMAIL' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    email: string;

    @ApiProperty({
        description: 'The user\'s phone number. Shoud be in E.164 format',
        example: '+14155552671'
    })
    @IsPhoneNumber(undefined, { message: 'validation.IS_PHONE_NUMBER' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    phone: string;

    @ApiProperty({
        description: 'The user\'s password (at least 6 characters)',
        example: 'Str0ngP@ssw0rd!'
    })
    @IsString({ message: 'validation.IS_STRING' })
    @IsNotEmpty({ message: 'validation.IS_NOT_EMPTY' })
    @Length(6, undefined, { message: 'validation.LENGTH' })
    password: string;

    @ApiProperty({
        description: 'The user\'s address information',
        type: () => AddressData
    })
    @ValidateNested()
    @Type(() => AddressData)
    address: AddressData;
}