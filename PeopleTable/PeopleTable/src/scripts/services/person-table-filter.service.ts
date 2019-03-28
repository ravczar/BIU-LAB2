export class Filters {

    public filterId(person){
        if (person.id == $('#inputId').val()) { 
            console.log(person.id);
            return person.id; 
        }   
    }
    public filterName(person){
        if (person.firstname == $('#inputName').val()) { 
            console.log(person.firstname);
            return person.id; 
        }       
    }
    public filterSurname(person){
        if (person.lastname == $('#inputSurname').val()) { 
            console.log(person.lastname);
            return person.id; 
        } 
    }
    public filterGender(person){
        if (person.gender == $('#inputGender').val()) {
            console.log(person.gender);
            return person.id; 
        }
    }
    public filterEmail(person){
        if (person.email == $('#inputEmail').val()) {
            console.log(person.email);
            return person.id; 
        }
    }
    public filterBirthday(person){
        let day: number = person.birthday.getDate();
        let month: number = person.birthday.getMonth() + 1;
        let year: number = person.birthday.getFullYear();
        let personActualDateString :string = day +"-"+ month +"-"+ year;
 
        if (personActualDateString == $('#inputBirthday').val()) {
            console.log("URODZINY: " + person.birthday);
            return person.id; 
        }
    }
    public filterAge(person){
        if (person.age == $('#inputAge').val()) {
            console.log(person.age);
            return person.id; 
        }
    }
    public filterIncome(person){
        if (person.income == $('#inputIncome').val()) {
            console.log(person.income);
            return person.id; 
        }
    }
    public filterAdvanced (person){
       
        let personActualDateString: string;
        if($('.js-input-birthday').val() != 0){
            let day: number = person.birthday.getDate();
             let month: number = person.birthday.getMonth() + 1;
             let year: number = person.birthday.getFullYear();
             personActualDateString = day +"-"+ month +"-"+ year;
        }
 
        if (
               (person.firstname == $('.js-input-name').val() || $('.js-input-name').val() == 0)
            && (person.lastname == $('.js-input-surname').val() || $('.js-input-surname').val() == 0)
            && (person.gender == $('.js-input-gender').val() || $('.js-input-gender').val() == 0)
            && (person.age == $('.js-input-age').val() || $('.js-input-age').val() == 0)
            && (person.email == $('.js-input-email').val() || $('.js-input-email').val() == 0)
            && (personActualDateString == $('.js-input-birthday').val() || $('.js-input-birthday').val() == 0) // Birthday jest błąd
            ) {
            return person.id; 
        }
    }


}