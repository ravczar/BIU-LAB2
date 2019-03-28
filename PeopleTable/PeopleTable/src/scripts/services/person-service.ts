import { people } from './data'; //-> import danych o osobach import { PersonListItem } from "../person-list-item";//-> import klasy
import { PersonListItem } from "../person-list-item";//-> import klasy

export class PagingInfo {     
    constructor(public page: number, public count: number) { 
    } 
}

export class PersonService {          
    
    public getPeople(pagingInfo: PagingInfo): Array<PersonListItem> {
        
        let begin = pagingInfo.page - 1; 
        let start = Number(begin * pagingInfo.count);
        let end = Number(pagingInfo.count);
        
        if (begin < 0) begin = 0; 
        //console.log("Przedział od: " + begin * pagingInfo.count + ". Przedział do: " + Number (start + end));
        //console.log ("Aktualny przedział koncowy:" + Number(start + end) );

        return people             
            .slice(start, Number(start + end) ) 
            //-> z zaimportowanej kolekcji wybieramy stronę wyników    0-25, 26-50, 51-75..          
            .map(x => {                 
                let person = new PersonListItem();                 
                person.firstname = x.firstName;                 
                person.lastname = x.lastName;                 
                person.gender = x.gender;                 
                person.email = x.email;                 
                person.income = +x.income                 
                person.age = x.age; 
                person.birthday = new Date(x.birthday);                 
                person.id = x.id;                 
                return person;             
            });       
            //-> pobrane wyniki mapujemy na obiekty PersonListItem     
    } 
        
}
