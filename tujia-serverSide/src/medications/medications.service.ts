import { Injectable } from '@nestjs/common';
import { CreateMedicationDto } from './dto/create-medication.dto';
import { UpdateMedicationDto } from './dto/update-medication.dto';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Medication, MedicationDocument } from '../schemas/medication.schema';

@Injectable()
export class MedicationsService {
  constructor(
    @InjectModel('Medication')
    private medicationModel: Model<MedicationDocument>,
  ) {}
  async create(createMedicationDto: CreateMedicationDto): Promise<Medication> {
    return new this.medicationModel(createMedicationDto).save();
  }

  async findAll() {
    return this.medicationModel.find();
  }

  async findOne(id: string) {
    return this.medicationModel.findOne({ id });
  }

  async update(id: string, updateMedicationDto: UpdateMedicationDto) {
    return this.medicationModel.findOneAndUpdate(
      { id },
      { $set: { ...updateMedicationDto } },
    );
  }

  async remove(id: string) {
    return this.medicationModel.findOneAndRemove({ id });
  }
}
