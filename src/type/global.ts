export declare enum ActivationStatus{
    Active = "ACTIVE",
    InActive = "INACTIVE"
}
export declare enum Permission {
    R = "READ",
    RW = "READ_WRITE",
}
export declare type accessType = {
    [key: string]: {
        active: boolean;
        permission: Permission;
    };
};