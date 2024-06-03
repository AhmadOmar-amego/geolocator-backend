import { PartialType } from '@nestjs/mapped-types';
import { CreateLocationCreationLogicDto } from './create-location-creation-logic.dto';

export class UpdateLocationCreationLogicDto extends PartialType(CreateLocationCreationLogicDto) {}
