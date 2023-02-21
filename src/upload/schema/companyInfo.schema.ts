import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { now, Document } from 'mongoose';

export type CompanyInfoDocument = CompanyInfo & Document;

@Schema()
export class CompanyInfo {
  @Prop()
  'Campaign Name': string;

  @Prop()
  'Location': string;

  @Prop()
  'Trade': string;

  @Prop()
  'Advertised Number': string;

  @Prop()
  'Inbound Calls': string;

  @Prop()
  'Unique Inbound Calls': string;

  @Prop()
  'Unique Inbound Calls Booked': string;

  @Prop()
  'Inbound Booking Rate': string;

  @Prop()
  'Total Jobs Booked': string;

  @Prop()
  'Jobs Booked from New Customers': string;

  @Prop()
  'Jobs Booked from Existing Customers': string;

  @Prop()
  'Completed Revenue': string;

  @Prop()
  'Total Sales': string;

  @Prop()
  'Opportunity Conversion Rate': string;

  @Prop()
  'Cost Per Lead': string;

  @Prop()
  'Revenue Per Lead': string;

  @Prop()
  'ROI %': string;

  @Prop()
  'Total Job Average': string;

  @Prop({ default: now() })
  createdAt: Date;
}

export const CompanyInfoSchema = SchemaFactory.createForClass(CompanyInfo);
