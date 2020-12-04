import { ObjectType } from "type-graphql";
import { Entity, BaseEntity, ManyToOne, PrimaryColumn, Column } from "typeorm";
import { Post } from "./Post";
import { User } from "./User";

@ObjectType()
@Entity()
export class Reaction extends BaseEntity {
  @Column({ type: "int" })
  value: number;

  @PrimaryColumn()
  userId!: number;

  @ManyToOne(() => User, user => user.reactions)
  user: User;

  @PrimaryColumn()
  postId: number;

  @ManyToOne(() => Post, post => post.reactions, {
    onDelete: "CASCADE",
  })
  post: Post;
}
