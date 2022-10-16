import {IsNotEmpty} from "class-validator";
import { Expose } from "class-transformer";

export class LoginInputDTO {
    @IsNotEmpty()
    @Expose({
        name: "username"
    })
    readonly UserName: string

    @IsNotEmpty()
    @Expose({
        name: "password"
    })
    readonly Password: string
}

export class SignUpDTO {
    @IsNotEmpty()
    @Expose({name: "username"})
    readonly UserName: string

    @IsNotEmpty()
    @Expose({
        name: "password"
    })
    readonly Password: string

    @IsNotEmpty()
    @Expose({
        name: "name"
    })
    readonly Name: string
}