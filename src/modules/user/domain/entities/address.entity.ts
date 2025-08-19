import { randomUUID } from "crypto";
import { BeforeInsert, Column, Entity, Long, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./user.entity";

@Entity('addresses')
export class AddressEntity {
    @PrimaryGeneratedColumn('identity')
    id: Long;

    @Column({ type: 'uuid', unique: true })
    addressId: string;

    @Column({ length: 2 })
    // ISO 3166-1 alpha-2
    country: string; 

    @Column()
    postalCode: string;

    @Column({ nullable: true })
    administrativeArea?: string;

    @Column()
    city: string;

    @Column({ nullable: true })
    district?: string;

    @Column()
    street: string;

    @Column({ length: 20, nullable: true })
    number?: string;

    @Column({ nullable: true })
    complement?: string;

    @OneToOne(type => UserEntity, user => user.address)
    user: UserEntity;

    @BeforeInsert()
    generateAddressId() {
        if (!this.addressId) {
            this.addressId = randomUUID();
        }
    }
}