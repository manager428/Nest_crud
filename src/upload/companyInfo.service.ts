import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCompanyInfoDto } from './dto/create-companyInfo.dto';
import { UpdateCompanyInfoDto } from './dto/update-companyInfo.dto';
import { CompanyInfo, CompanyInfoDocument } from './schema/companyInfo.schema';

@Injectable()
export class CompanyInfoService {
  constructor(
    @InjectModel(CompanyInfo.name)
    private readonly companyInfoModel: Model<CompanyInfoDocument>,
  ) {}

  async create(
    createCompanyInfoDto: CreateCompanyInfoDto[],
  ): Promise<CompanyInfoDocument> {
    createCompanyInfoDto.map((companyInfoData) => {
      const companyInfo = new this.companyInfoModel(companyInfoData);
      companyInfo.save();
    });
    return;
  }

  async findAll(): Promise<CompanyInfoDocument[]> {
    return this.companyInfoModel.find().exec();
  }

  async findOne(id: string) {
    return this.companyInfoModel.findById(id);
  }

  async update(
    id: string,
    updateCompanyInfoDto: UpdateCompanyInfoDto,
  ): Promise<CompanyInfoDocument> {
    return this.companyInfoModel.findByIdAndUpdate(id, updateCompanyInfoDto);
  }

  async remove(id: string) {
    return this.companyInfoModel.findByIdAndRemove(id);
  }
}
