export class PersonListItem {

    public id: number;
    public age: number;
    public firstname: string;
    public lastname: string;
    public gender: string;
    public email: string;
    public birthday: Date;
    public income: number;

    public toTableRow(): string {        
        return "<tr class='data'><td>"
        + this.id
        + '</td><td>'             
        + this.firstname             
        + '</td><td>'             
        + this.lastname             
        + '</td><td>'             
        + this.gender             
        + '</td><td>'             
        + this.email             
        + '</td><td>'             
        + this.age             
        + '</td><td>'    
        + this.returnbirthDateString() // ex: + this.birthday.toISOString()       // Uważam, że czas jest nam zbędny przy dacie urodzenia, daltego zmieniam koncepcje
        + '</td><td>'             
        + this.income             
        + '</td></tr>' 
    }

    private returnbirthDateString(): string{
        let day: number = this.birthday.getDate();
        let month: number = this.birthday.getMonth() + 1;
        let year: number = this.birthday.getFullYear();
        let personActualDateString :string = day +"-"+ month +"-"+ year;
        return personActualDateString;  
    } 

}