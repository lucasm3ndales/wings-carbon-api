import { randomUUID } from 'crypto';
import { BeforeInsert, Column, Entity, JoinColumn, Long, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { PhoneNumber } from '../value-objects/phone-number';
import { EmailAddress } from '../value-objects/email-address';
import { PhoneNumberTransformer } from '../value-objects/phoneNumber.transformer';
import { EmailAddressTransformer } from '../value-objects/email-address.transformer';
import { AddressEntity } from './address.entity';

@Entity('users')
export class UserEntity {
    @PrimaryGeneratedColumn('identity')
    id: Long;

    @Column({ type: 'uuid', unique: true })
    userId: string;

    @Column({ length: 63 })
    firstName: string;

    @Column({ length: 63 })
    lastName: string;

    @Column({
        type: 'varchar',
        unique: true,
        length: 20,
        transformer: new PhoneNumberTransformer()
    })
    phoneNumber: PhoneNumber

    @Column({
        type: 'varchar',
        unique: true,
        transformer: new EmailAddressTransformer()
    })
    emailAddress: EmailAddress

    @OneToOne(type => AddressEntity, { cascade: true, eager: true })
    @JoinColumn()
    address: AddressEntity;

    @BeforeInsert()
    generateUserId() {
        if (!this.userId) {
            this.userId = randomUUID();
        }
    }
}