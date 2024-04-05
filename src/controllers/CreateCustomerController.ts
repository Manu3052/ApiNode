import { FastifyRequest, FastifyReply } from "fastify"

import { CostumeRepository } from "../repositories/CostumeRepository"
import { CreateCustomerUseCase } from "../useCases/CreateCustomerUseCase"
import { CreateCustomerDto } from "../dtos/CreateCostumeDto"

export class CreateCustomerController{
    async handle(request: FastifyRequest, reply:FastifyReply){
        const {name, email} = request.body as { name: string, email: string}
        const createCustomerDto = new CreateCustomerDto(
            name, 
            email
        )
        const costumeRepository = new CostumeRepository()
        const customerUseCase = new CreateCustomerUseCase(costumeRepository)
        const customer = customerUseCase.execute(createCustomerDto)
        

        console.log(reply, customer)
        return reply.send(customer)
    }
}

