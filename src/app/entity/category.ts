export class Category {
    id!: number;
    name!: string;
    operationType!: number;
    parentCategory!: Category;
    creator!: number;

    constructor(category:any){
        this.id = category.id;
        this.name = category.name;
        this.operationType = category.operationType;
        this.parentCategory = category.parentCategory;
        this.creator = category.creator;
    }
}