import { EntityRepository, Repository } from "typeorm";
import { Checkout } from "../models/checkout";

@EntityRepository(Checkout)
export class CheckoutRepository extends Repository<Checkout> {}