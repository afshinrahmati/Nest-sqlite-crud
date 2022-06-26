import mongoose, { Document, Model, model, Schema } from "mongoose";
import mongoosePagination from "mongoose-paginate";
import { ActivationStatus } from "../type/global";

declare enum Role {
    admin = "ADMIN",
    client = "CLIENT"
}

declare enum status {
    active = "ACTIVE",
    inActive = "INACTIVE"
}

export interface IUser extends Partial<Document> {
    access: {
        type: mongoose.Schema.Types.Mixed,
    },
    firstName: string;
    role: Role;
    surname: string;
    email: string;
    phoneNumber: string;
    favorite: {
        type: [string]
    }
    password: string;
    store: number;
    status: status;
}

const userSchema: Schema = new Schema({
    access: {
        type: mongoose.Schema.Types.Mixed,
    },
    firstName: {
        type: String
    },
    role: {
        type: Role,
        index: true,

    },
    surname: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phoneNumber: {
        type: String,
        unique: true
    },
    favorite: {
        type: [String]
    },
    password: { type: String },
    store: { type: Number },
    status: { type: status }
});
userSchema.plugin(mongoosePagination);

const Users: Model<any> = model("user", userSchema);

export default Users;
