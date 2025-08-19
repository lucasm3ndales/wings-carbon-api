import { ValueTransformer } from "typeorm";
import { EmailAddress } from "./email-address";


export class EmailAddressTransformer implements ValueTransformer {
    to(value: EmailAddress): string {
        return value.emailAddress;
    }

    from(value: string): EmailAddress {
        return new EmailAddress(value);
    }
}