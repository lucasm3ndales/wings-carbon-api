import { Entity, PrimaryGeneratedColumn } from "typeorm";
import { Long } from "typeorm/browser";
import { Column } from "typeorm/browser";


export enum CredentialType {
    EMAIL = 'email',
    PHONE = 'phone',
}

@Entity('credentials')
export class CredentialEntity {
    @PrimaryGeneratedColumn('identity')
    id: Long

    @Column({ type: 'uuid', unique: true })
    credentialId: string

    @Column({
        type: 'enum',
        enum: CredentialType,
    })
    type: CredentialType;

    @Column()
    username: string

    @Column({ nullable: true })
    password?: string

    @Column({ type: 'uuid', unique: true })
    userId: string

}