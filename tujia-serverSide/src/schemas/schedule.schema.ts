import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
// import { Medication } from './medication.schema';

export type ScheduleDocument = Schedule & Document;

@Schema()
export class Schedule {
  @Prop({ require: true, default: 'true' })
  status: boolean;

  @Prop({ default: 'true' })
  daily: boolean;

  // @Prop({ default: 'false' })
  // weekly: boolean;

  // @Prop({ default: 'false' })
  // specipic_days: string;

  // @Prop({ default: 'false' })
  // specipic_hour: number;

  // @Prop({ default: 'false' })
  // once: number;

  @Prop()
  quantity: number;

  @Prop({ require: true })
  time: string;

  @Prop({ require: true })
  name: string;

  @Prop({ require: true, default: 'pill' })
  unit: string;
  // @Prop({ require: true, default: Date.now })
  // start_date: Date;

  // @Prop({ require: true, default: 'false' })
  // ongoing: boolean;

  // @Prop({ require: true })
  // duration: number;

  // @Prop()
  // note: string;

  // @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Medication' })
  // med: Medication;
}

export const ScheduleSchema = SchemaFactory.createForClass(Schedule);
