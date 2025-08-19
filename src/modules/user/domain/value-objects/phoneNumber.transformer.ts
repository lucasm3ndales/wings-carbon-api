import { ValueTransformer } from "typeorm";
import { PhoneNumber } from "./phone-number";


export class PhoneNumberTransformer implements ValueTransformer {
    to(value: PhoneNumber): string {
        return value.phoneNumber;
    }

    from(value: string): PhoneNumber {
        return new PhoneNumber(value);
    }
}