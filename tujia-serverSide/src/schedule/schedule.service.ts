import { Injectable } from '@nestjs/common';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { UpdateScheduleDto } from './dto/update-schedule.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Schedule, ScheduleDocument } from '../schemas/schedule.schema';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectModel('Schedule')
    private scheduleModel: Model<ScheduleDocument>,
  ) {}
  async create(createScheduleDto: CreateScheduleDto): Promise<Schedule> {
    return new this.scheduleModel(createScheduleDto).save();
  }

  async findAll() {
    return this.scheduleModel.find();
  }

  async findOne(id: string) {
    return this.scheduleModel.findOne({ id });
  }

  async update(id: string, updateScheduleDto: UpdateScheduleDto) {
    return this.scheduleModel.findOneAndUpdate(
      { id },
      { $set: { ...updateScheduleDto } },
    );
  }

  async remove(id: string) {
    return this.scheduleModel.findOneAndRemove({ id });
  }
}
