import { FormControl } from "@angular/forms";

export interface IField {
    id:number;
    label:string;
    type:string;
    control:FormControl
    touched:boolean;
}