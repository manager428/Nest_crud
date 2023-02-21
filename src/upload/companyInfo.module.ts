import { Module } from '@nestjs/common';
import { CompanyInfoService } from './companyInfo.service';
import { CompanyInfoController } from './companyInfo.controller';
import { CompanyInfo, CompanyInfoSchema } from './schema/companyInfo.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: CompanyInfo.name,
        schema: CompanyInfoSchema,
      },
    ]),
  ],
  controllers: [CompanyInfoController],
  providers: [CompanyInfoService],
})
export class CompanyInfoModule {}
