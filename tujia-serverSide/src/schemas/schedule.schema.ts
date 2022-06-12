import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
import { Medication } from './medication.schema';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop({ require: true, default: 'available' })
  status: boolean;

  @Prop({ default: 'false' })
  daily: boolean;

  @Prop({ default: 'false' })
  weekly: boolean;

  @Prop({ default: 'false' })
  monthly: boolean;

  @Prop()
  specipic_days: string;

  @Prop()
  n_days: number;

  @Prop({ require: true })
  n_times: number;

  @Prop({ require: true })
  times: string;

  @Prop({ require: true, default: Date.now })
  start_date: Date;

  @Prop({ require: true, default: 'false' })
  ongoing: boolean;

  @Prop({ require: true })
  duration: number;

  @Prop({ require: true })
  instructions: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Medication' })
  meds: Medication;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
