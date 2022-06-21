import mongoose, { Document, Model, model, Schema } from "mongoose";
import mongoosePagination from "mongoose-paginate";
import { ActivationStatus } from "../type/global";

declare enum Role {
    admin = "ADMIN",
    client = "CLIENT"
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
    status: boolean;
}

const userSchema: Schema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    store: {
        type: Number,
    },
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Role",
        required: true,
    },
    status: {
        type: ActivationStatus,
        default: ActivationStatus.Active,
    },
    company: {
        managerName: String,
        companyName: String,
        phone: String,
        salesManagerName: String,
        salesManagerMobile: String,
        postalCode: String,
        address: String,
        explanation: String,
    },
    client: {
        name: String,
        lastName: String,
        mobile: String,
    },
});
userSchema.plugin(mongoosePagination);

const User: Model<any> = model("users", userSchema);

export default User;
