import { PersonList } from "./person-list"; 
import { PersonService, PagingInfo } from "./services/person-service"; 
import { Filters } from "./services/person-table-filter.service";

 
export class PersonTable{ 
 
    constructor(public context: JQuery, public pageSize: number) {        
    } 
 
    personService = new PersonService();     
    list = new PersonList();     
    currentPage = 0;     
    pressedAnyButton: boolean = false;
    
    public current( currentPageSize: number) {
        console.clear();
        this.list.clear();                  
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, currentPageSize));          
        this.pageSize = currentPageSize;  
        this.refreshTableNotHeader();
    }

    public next() {
        //console.clear();
        this.list.clear();         
        this.currentPage++;         
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, this.pageSize));
        if (!this.pressedAnyButton) {
            this.refreshTable();   
            this.pressedAnyButton = true;
        }
        else
            this.refreshTableNotHeader();
    } 
 
    public prev(): void { 
        console.clear();        
        this.list.clear();         
        if (this.currentPage <= 1) return;         
        this.currentPage--;         
        this.list.people = this.personService.getPeople(new PagingInfo(this.currentPage, this.pageSize));         
        this.refreshTableNotHeader()    
    } 

    public sortFunction( selectedComparatorMethod ) { 
        this.list.people.sort( selectedComparatorMethod );
        this.refreshTableNotHeader();
    }

    public filterFunction( selectedFilterToBeActivated, inputFieldId ){
        let newArray = this.list.people.filter( selectedFilterToBeActivated ); // zwraca nam indexy wszystkich osób spełniajacych warunki
        let indexArray: Array <number> = [];
        newArray.forEach(element => {
            indexArray.push(element.id);
        });
        //console.log("WYFILTROWANE ELEMENTY INDEXARRAY:  " + indexArray);
        this.refreshAfterFiltering( indexArray, inputFieldId );
    }
    public filterFunctionForAdvancedSearch( selectedFilterToBeActivated  ){
        let newArray = this.list.people.filter( selectedFilterToBeActivated ); // zwraca nam indexy wszystkich osób spełniajacych warunki
        let indexArray: Array <number> = [];
        newArray.forEach(element => {
            indexArray.push(element.id);
        });
        this.refreshAfterAdvancedSearch( indexArray );
    }

    public advancedSearchFunction (event: JQueryEventObject, name, surname, age, gender, email, birthday, filter: Filters){
     /*   console.clear();
        event.preventDefault(); 
        this.filterFunction(filter.filterAdvanced, name ); // ten drugi parametr jest zbędny*/
        console.clear();
        event.preventDefault(); 
        this.filterFunctionForAdvancedSearch(filter.filterAdvanced );
    }
 
    private refreshTable() {         
        this.context.html(this.list.toTable());     
    } 

    private refreshTableNotHeader() {         
        this.list.toTableLeaveHeaders();    
    } 

    private refreshAfterFiltering( array: Array <number>, inputFieldId ) {
        this.list.toTableFilteredRecords( array, inputFieldId  );
    }

    private refreshAfterAdvancedSearch( array: Array <number> ) {
        this.list.toTableFilteredRecordsForAdvancedSearch( array );
    }
}