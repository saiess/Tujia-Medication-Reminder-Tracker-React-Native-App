import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type MedicationDocument = Medication & Document;

@Schema()
export class Medication {
  @Prop({ require: true })
  name: string;

  @Prop({ require: true })
  company: string;

  @Prop({ require: true })
  diagnosis: string;

  @Prop({ require: true })
  serial: string;

  @Prop({ require: true })
  type: string;
}

export const MedicationSchema = SchemaFactory.createForClass(Medication);
