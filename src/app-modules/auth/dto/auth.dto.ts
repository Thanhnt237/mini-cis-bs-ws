import { Allow, IsNotEmpty } from "class-validator";
import { Expose } from "class-transformer";
import { ApiProperty } from "@nestjs/swagger";

export class LoginInputDTO {
    @ApiProperty()
    @IsNotEmpty()
    readonly UserName: string

    @IsNotEmpty()
    @ApiProperty()
    readonly Password: string
}

export class SignUpDTO {
    @IsNotEmpty()
    @ApiProperty()
    readonly UserName: string

    @IsNotEmpty()
    @ApiProperty()
    readonly Password: string

    @IsNotEmpty()
    @ApiProperty()
    readonly Name: string
}