import { CreateCustomerDto } from "../dtos/CreateCostumeDto";
import { ResponseCustomerDto } from "../dtos/ResponseCostumeDto";

export abstract class AbstractCostumerRepository {
    abstract mapPrismaCustomerToResponseCustomerDto (prismaCustomer: any): ResponseCustomerDto
    abstract create({name, email}: CreateCustomerDto): Promise<ResponseCustomerDto>;
}