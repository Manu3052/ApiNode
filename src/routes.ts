import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify";
import { CreateCustomerController } from "./controllers/CreateCustomerController";

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async(request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true}
    })
    fastify.post("/costumer", async(request: FastifyRequest, reply: FastifyReply) => {
        console.log(request, reply)
        return new CreateCustomerController().handle(request, reply)
    })

    
}