import Jwt from "jsonwebtoken";
const {
    ACCESS_TOKEN_SECRET_KEY,
    ACCESS_TOKEN_EXPIRE_IN,
} = process.env;

class token {
    private secretKey: string;
    private expireKey: string;

    constructor(secret: string, expire: string) {
        this.secretKey = secret;
        this.expireKey = expire;

    }
    createToken(email: string) {
        const token = Jwt.sign({ email: email }, this.secretKey, { expiresIn: this.expireKey })
        return { token }
    }

    statusToken(token: string): any {
        return Jwt.verify(token, this.secretKey, (error, user: any) => {
            if (error) return false
            return true
        });

    }

    informationToken(token: string) {
        return Jwt.verify(token, this.secretKey, (error, email: any) => {
            if (error) return null;
            else return { email }
        })
    }
}


const val = new token(ACCESS_TOKEN_SECRET_KEY as string, ACCESS_TOKEN_EXPIRE_IN as string);

export default { create: val.createToken, status: val.statusToken, information: val.informationToken };