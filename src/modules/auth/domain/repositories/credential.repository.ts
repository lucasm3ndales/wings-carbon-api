import { Repository } from "typeorm";
import { CredentialEntity } from "../entities/credential.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Injectable } from "@nestjs/common";


@Injectable()
export class CredentialRepository extends Repository<CredentialEntity> {

    constructor(@InjectRepository(CredentialEntity) repository: Repository<CredentialEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}