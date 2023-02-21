import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyInfoDto } from './create-companyInfo.dto';

export class UpdateCompanyInfoDto extends PartialType(CreateCompanyInfoDto) {}
