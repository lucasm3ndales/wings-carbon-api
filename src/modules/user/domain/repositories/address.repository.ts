import { Repository } from "typeorm";
import { AddressEntity } from "../entities/address.entity";
import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";


@Injectable()
export class AddressRepository extends Repository<AddressEntity> {

    constructor(@InjectRepository(AddressEntity) repository: Repository<AddressEntity>) {
        super(repository.target, repository.manager, repository.queryRunner);
    }
}