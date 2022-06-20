import mongoose from "mongoose";

const roomSchema = mongoose.Schema({
    FirstName: String, 
    LastName: String,
    Title: String,
    CompanyNameforEmails: String,
    Emails: String,
    EmailStatus: String,
    Seniority: String,
    Departments: String,
    First_Phone: Number, 
    Employees: Number, 
    Industry: String, 
    PersonLinkedinUrl: String,
    Website: String, 
    CompanyLinkedinUrl: String,
    Country: String,
    AnnualRevenue: Number,
    Column1: String,
})
const Room = mongoose.model('Room',roomSchema); 
export default Room;