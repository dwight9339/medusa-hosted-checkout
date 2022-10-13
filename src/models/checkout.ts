import { BeforeInsert, Column, Entity, PrimaryColumn } from "typeorm";
import { BaseEntity } from "@medusajs/medusa";
import { generateEntityId } from "@medusajs/medusa/dist/utils"

export enum CheckoutStatus {
  in_progress="in progress",
  completed="completed",
  canceled="canceled"
}

@Entity()
export class Checkout extends BaseEntity {
  @Column({type: "varchar"})
  cart_id: string;

  @Column({type: "enum", enum: CheckoutStatus})
  status: CheckoutStatus;

  @BeforeInsert()
  private beforeInsert(): void {
    this.id = generateEntityId(this.id, "checkout");
  }
}