import { CreateCustomerDto } from "../dtos/CreateCostumeDto"
import { ResponseCustomerDto } from "../dtos/ResponseCostumeDto"
import { AbstractCostumerRepository } from "../repositories/AbstractCostumerRepository"

export class CreateCustomerUseCase {
    
    private customerRepository: AbstractCostumerRepository 

    constructor (customerRepository: AbstractCostumerRepository){
        this.customerRepository = customerRepository
    }

    async execute(data: CreateCustomerDto): Promise<ResponseCustomerDto >{

        if(!data.name || !data.email){
            throw new Error("É necessário preencher os campos email e nome.")
        }
        const customer = await this.customerRepository.create(data)
        return customer
    }

}

 