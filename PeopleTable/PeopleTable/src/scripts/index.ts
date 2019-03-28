import { PersonTable } from "./person-table";
import { Comparators } from "./services/person-table-sort-service";
import { Filters } from "./services/person-table-filter.service";

const yellowSearchButton = $('.js-search-btn');
const advancedSearch = $('.js-adv-search'); 
const advancedSearchButton = $('.js-adv-search-btn'); 
const peopleTable = $('div#table'); 
const tableNext = $('#js-button-next'); 
const tablePrev = $('#js-button-prev');
const dropDownList =  $('#my_List');

let sortId = $('#sortid');
let sortName = $('#sortname');
let sortSurname = $('#sortsurname');
let sortGender = $('#sortgender');
let sortEmail = $('#sortemail');
let sortAge = $('#sortage');
let sortBirthday = $('#sortbirthday');
let sortIncome = $('#sortincome');

let inputId = $('#inputId');
let inputName = $('#inputName');
let inputSurname = $('#inputSurname');
let inputGender = $('#inputGender');
let inputEmail = $('#inputEmail');
let inputAge = $('#inputAge');
let inputBirthday = $('#inputBirthday');
let inputIncome = $('#inputIncome');

let inputAdvName = $('.js-input-name');
let inputAdvSurname = $('.js-input-surname');
let inputAdvAge = $('.js-input-age');
let inputAdvGender = $('.js-input-gender');
let inputAdvEmail = $('.js-input-email');
let inputAdvBirthday = $('.js-input-birthday');

class Startup {     
    public static main(): void {         
        advancedSearch.hide();         
        advancedSearchButton.click((event) => Startup.onAdvancedSearchClicked(event) );
        let table = new PersonTable(peopleTable, dropDownList.val() );
        let comparator = new Comparators();  
        let filter = new Filters();               
        table.next();  

        Startup.reloadJquerySelectorsForTableHeaderButtons();

        tableNext.click(() => table.next());
        tablePrev.click(() => table.prev()); 
        dropDownList.change(() => table.current(dropDownList.val())); 

        Startup.sortByParameter(sortId, table, comparator);
        Startup.sortByParameter(sortName, table, comparator);
        Startup.sortByParameter(sortSurname, table, comparator);
        Startup.sortByParameter(sortGender, table, comparator);
        Startup.sortByParameter(sortEmail, table, comparator);
        Startup.sortByParameter(sortAge, table, comparator);
        Startup.sortByParameter(sortBirthday, table, comparator);
        Startup.sortByParameter(sortIncome, table, comparator);

        inputId.keyup(() => table.filterFunction(filter.filterId, inputId) );
        inputName.keyup(() => table.filterFunction(filter.filterName, inputName) );
        inputSurname.keyup(() => table.filterFunction(filter.filterSurname, inputSurname) );
        inputGender.keyup(() => table.filterFunction(filter.filterGender, inputGender) );
        inputEmail.keyup(() => table.filterFunction(filter.filterEmail, inputEmail) );
        inputAge.keyup(() => table.filterFunction(filter.filterAge, inputAge) );
        inputBirthday.keyup(() => table.filterFunction(filter.filterBirthday, inputBirthday) );
        inputIncome.keyup(() => table.filterFunction(filter.filterIncome, inputIncome) );

        yellowSearchButton.click((event) => table.advancedSearchFunction (event, inputAdvName, inputAdvSurname, inputAdvAge, inputAdvGender, inputAdvEmail, inputAdvBirthday, filter) );
    } 

    private static sortByParameter( parameter, table, comparator ) {
        
        parameter.click(function() {
            
            if( parameter.hasClass('UP') ){
                switch (parameter.attr('id')+'ASC') {
                    case "sortidASC": table.sortFunction( comparator.sortidASC ); break;
                    case "sortgenderASC": table.sortFunction( comparator.sortgenderASC ); break;
                    case "sortnameASC": table.sortFunction( comparator.sortnameASC ); break;
                    case "sortsurnameASC": table.sortFunction( comparator.sortsurnameASC ); break;
                    case "sortemailASC": table.sortFunction( comparator.sortemailASC ); break;
                    case "sortincomeASC": table.sortFunction( comparator.sortincomeASC ); break;
                    case "sortbirthdayASC": table.sortFunction( comparator.sortbirthdayASC ); break;
                    case "sortageASC": table.sortFunction( comparator.sortageASC ); break;
                }
                parameter.removeClass('UP');
                parameter.addClass('DOWN');
            }
            else if( parameter.hasClass('DOWN') ){
                switch (parameter.attr('id')+'DESC') {
                    case "sortidDESC": table.sortFunction( comparator.sortidDESC ); break;
                    case "sortgenderDESC": table.sortFunction( comparator.sortgenderDESC ); break;
                    case "sortnameDESC": table.sortFunction( comparator.sortnameDESC ); break;
                    case "sortsurnameDESC": table.sortFunction( comparator.sortsurnameDESC ); break;
                    case "sortemailDESC": table.sortFunction( comparator.sortemailDESC ); break;
                    case "sortincomeDESC": table.sortFunction( comparator.sortincomeDESC ); break;
                    case "sortbirthdayDESC": table.sortFunction( comparator.sortbirthdayDESC ); break;
                    case "sortageDESC": table.sortFunction( comparator.sortageDESC ); break;
                }
                parameter.removeClass('DOWN');
                parameter.addClass('UP');
            }
        });

    }

    private static reloadJquerySelectorsForTableHeaderButtons(){
        sortId = $('#sortid');
        sortName = $('#sortname');
        sortSurname = $('#sortsurname');
        sortGender = $('#sortgender');
        sortEmail = $('#sortemail');
        sortAge = $('#sortage');
        sortBirthday = $('#sortbirthday');
        sortIncome = $('#sortincome');

        inputId = $('#inputId');
        inputName = $('#inputName');
        inputSurname = $('#inputSurname');
        inputGender = $('#inputGender');
        inputEmail = $('#inputEmail');
        inputAge = $('#inputAge');
        inputBirthday = $('#inputBirthday');
        inputIncome = $('#inputIncome');

    }
 
    private static onAdvancedSearchClicked(event: JQueryEventObject) {         
        event.preventDefault();                 
        if (advancedSearch.is(':visible')) {             
            advancedSearch.fadeOut(1000);         
        } else {             
            advancedSearch.fadeIn(1000);         
        }     
    } 

    private static checkIfSelectorsExistsAndPrintToConsole() {  
        console.log("Checking if slectors exists so they can be used");
        console.log("tableNext: " + tableNext.length);
        console.log("tablePrev: " + tablePrev.length);
        console.log("sortId: " + sortId.length);
        console.log("sortName: " + sortName.length);
        console.log("sortSurname: " + sortSurname.length);
        console.log("sortGender: " + sortGender.length);
        console.log("sortEmail: " + sortEmail.length);
        console.log("sortAge: " + sortAge.length);
        console.log("sortBirthday: " + sortBirthday.length);
        console.log("sortIncome: " + sortIncome.length);
    }

}

$(Startup.main);  // podpięcie metody main na koniec ładowania strony za pomocą Jquery


