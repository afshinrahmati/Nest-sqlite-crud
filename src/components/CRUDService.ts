import { PaginateOptions, PaginateResult, UpdateWriteOpResult } from "mongoose";
import { FilterQuery, UpdateQuery } from "mongodb";

export default abstract class CRUD<Schema> {
    public abstract create(obj: Partial<Schema>): Promise<Schema>;

    public abstract getMany(
        filter: Partial<Schema> | FilterQuery<Schema>,
        options?: PaginateOptions
    ): Promise<PaginateResult<Partial<Schema>>>;

    public abstract getOne(
        condition: string | Partial<Schema> | FilterQuery<Schema>,
        obj?: Partial<Schema>
    ): Promise<Schema>;

    public abstract update(
        condition: string | Partial<Schema> | FilterQuery<Schema>,
        props: Partial<Schema> | UpdateQuery<Schema>
    ): Promise<UpdateWriteOpResult | Schema>;
}
