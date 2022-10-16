import { SetMetadata } from '@nestjs/common';
import { Role } from '../enums/role.enum';
import constants from "../constants/constants";

export const Roles = (...roles: Role[]) => SetMetadata(constants.ROLES_KEY, roles);