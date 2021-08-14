import "reflect-metadata";
import { Type } from "class-transformer";

export default class Book {

    @Type(() => Number) 
    id!: number; /** Exclamation mark operator : value cannot be null (bypass missing constructor error) */
    author!: string;
    title!: string; 
    genre!: string; 
    @Type(() => Date)
    publication_date?: Date;     
    abstract?:string;

}