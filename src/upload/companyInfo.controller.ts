import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Put,
} from '@nestjs/common';
import { CompanyInfoService } from './companyInfo.service';
import { CreateCompanyInfoDto } from './dto/create-companyInfo.dto';
import { UpdateCompanyInfoDto } from './dto/update-companyInfo.dto';

@Controller('companyInfo')
export class CompanyInfoController {
  constructor(private readonly companyInfoService: CompanyInfoService) {}

  @Post()
  create(@Body() createCompanyInfoDto: CreateCompanyInfoDto[]) {
    return this.companyInfoService.create(createCompanyInfoDto);
  }

  @Get()
  findAll() {
    return this.companyInfoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.companyInfoService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCompanyInfoDto: UpdateCompanyInfoDto,
  ) {
    return this.companyInfoService.update(id, updateCompanyInfoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.companyInfoService.remove(id);
  }
}
