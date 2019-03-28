import { PersonListItem } from "./person-list-item"; 

export class PersonList { 

    private _people : Array<PersonListItem> = [];   

    public get people() : Array<PersonListItem> {         
        return this._people;     
    }     

    public set people(v : Array<PersonListItem>) {         
        this._people = v;     
    }    

    public toTable(): string {         
        var table = '<table class="table table-striped table-hover tablebordered">';   
        table += this.generateTableHeader();     
        this._people.forEach(person => table += person.toTableRow());         
        table += '</table>';        
        return table;     
    } 

    public toTableLeaveHeaders(): void {     
        $('.data').remove(); // erase all header with class data
        this._people.forEach(person =>  $('tbody').append(person.toTableRow()) );    
    } 

    public toTableFilteredRecords( array: Array <number>, inputFieldId){
        $('.data').remove();
        this._people.forEach(person => {
            if(array.indexOf(person.id) > -1){ // case1 - array of filtered index contains wanted element
                $('tbody').append(person.toTableRow());
            }
            else if ( array.length == 0 && inputFieldId.val() == 0){ // case2 - array of filtered elements is empty so jus give all records
                $('tbody').append(person.toTableRow());
            }
            else if ( array.length == 0 && inputFieldId.val() != 0){ // case3 - input value out of view range (letter or big number)
                $('.data').remove();
            }
        });
    } 

    public toTableFilteredRecordsForAdvancedSearch( array: Array <number>){
        $('.data').remove();
        this._people.forEach(person => {
            if(array.indexOf(person.id) > -1){ 
                $('tbody').append(person.toTableRow());
            }
            else if ( array.length == 0 ){ 
                $('.data').remove();
            }
        });
    } 

    public clear() {         
        this._people = [];     
    }    

    private generateTableHeader(): string {         
        return '<tr class="headers">'
        + ' <th> <input id="inputId" class="form-control" placeholder="ID"/> <button id="sortid" class="btn btn-sm btn-danger UP">Id</button></th>'             
        + ' <th> <input id="inputName" class="form-control" placeholder="Name"/> <button id="sortname" class="btn btn-sm btn-danger UP">Name</button></th>'             
        + ' <th> <input id="inputSurname" class="form-control" placeholder="Surname"/> <button id="sortsurname" class="btn btn-sm btn-danger UP">Surname</button></th>'             
        + ' <th> <input id="inputGender" class="form-control" placeholder="Gender"/> <button id="sortgender" class="btn btn-sm btn-danger UP">Gender</button></th>'
        + ' <th> <input id="inputEmail" class="form-control" placeholder="Email"/> <button id="sortemail" class="btn btn-sm btn-danger UP">Email</button></th>'             
        + ' <th> <input id="inputAge" class="form-control" placeholder="Age"/> <button id="sortage" class="btn btn-sm btn-danger UP">Age</button></th>'             
        + ' <th> <input id="inputBirthday" class="form-control" placeholder="B.Day"/> <button id="sortbirthday" class="btn btn-sm btn-danger UP">Birthday</button></th>'             
        + ' <th> <input id="inputIncome" class="form-control" placeholder="$$"/> <button id="sortincome" class="btn btn-sm btn-danger UP">Income</button></th>'             
        + '</tr>'     
    } 

}