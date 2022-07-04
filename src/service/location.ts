import Location, { ILocation } from "../models/location/location";
import CRUD from "../components/CRUDService";
import { PaginateOptions } from "mongoose";
import { FilterQuery } from "mongodb";
import { ObjectId } from "bson";

export default class LocationServices extends CRUD<ILocation> {
    public async getMany(
        condition: FilterQuery<ILocation>,
        options: PaginateOptions
    ) {
        if (condition._id) await this.checkCity(null, condition._id);
        return Location.paginate(condition, options);
    }

    public async update(locationId: string, updateObj: Partial<ILocation>) {
        return await Location.findAndUpdate({ _id: locationId }, updateObj);
    }

    getOne(
        condition: string | Partial<ILocation> | FilterQuery<ILocation>,
        obj: Partial<ILocation> | undefined
    ): Promise<ILocation> {
        return Promise.resolve(undefined);
    }

    public async create(locationObj: Partial<ILocation>) {
        if (!locationObj.parentId) {
            return await this.createProvince(
                locationObj.name,
                0,
                locationObj.updatedBy,
                locationObj.createdBy
            );
        } else {
            return await this.createCity(
                locationObj.name,
                locationObj.parentId,
                locationObj.updatedBy,
                locationObj.createdBy
            );
        }
    }

    private async createProvince(
        name: string,
        level: number,
        updatedBy: ObjectId,
        createdBy: ObjectId
    ) {
        try {
            const lastProvince = await Location.find({ level }).sort({
                createdAt: -1,
            });
            return await Location.create({
                name,
                categoryId:
                    lastProvince.length > 0 ? +lastProvince[0].categoryId + 1 : +1,
                level,
                updatedBy,
                createdBy,
            });
        } catch (e) {
            throw new ClientError(400, "LOCATION.exist");
        }
    }

    private async createCity(
        name: string,
        ParentId: any,
        updatedBy: ObjectId,
        createdBy: ObjectId
    ) {
        const lastCity = await Location.find({ _id: ParentId }).sort({
            createAt: -1,
        });
        return await Location.create({
            name,
            level: +lastCity[0].level + 1,
            categoryId: lastCity[0].categoryId,
            parentId: ParentId,
            createdBy,
            updatedBy,
        });
    }

    private async checkCity(name: string | null, parentId: any) {
        let foundedCity;
        if (name) {
            foundedCity = await Location.findOne({ name });
        } else {
            foundedCity = await Location.findById(parentId);
        }
        if (!foundedCity) throw new ClientError(400, "LOCATION.NotCategory");
        return foundedCity;
    }
}
