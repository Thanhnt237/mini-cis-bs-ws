import { PatientInterface } from "../interfaces/patient.interface";

export class PatientSerializer implements PatientInterface{
  ID: string
  Address: string;
  Code: string;
  DoB: Date;
  Email: string;
  Name: string;
  Nationality: string;
  Occupation: string;
  Phone: string;
  Sex: string;
  Symptom: string;

  constructor(partial: Partial<PatientSerializer>) {
    Object.assign(this, partial)
  }
}