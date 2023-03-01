import { Gender } from "../Enums/Gender.enum";

export class RegisterModel {
    Username:string = '';
    FirstName:string = '';
    LastName:string = '';
    Email:string = '';
    Password:string = '';
    Gender:Gender = Gender.Other;
    ImageUrl:string = '';
    
}
