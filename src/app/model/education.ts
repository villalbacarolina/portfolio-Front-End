export class Education {

    id: number;
    title: string;
    startDate: string;
    endDate: string;
    institution: string;

    constructor(id: number, title: string, startDate: string, endDate: string, institution: string){
        this.id=id;
        this.title=title;
        this.startDate=startDate;
        this.endDate=endDate;
        this.institution=institution;
    }
    
}
