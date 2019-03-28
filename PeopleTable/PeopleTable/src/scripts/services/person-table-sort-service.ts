export class Comparators {

    public sortidASC (person1, person2) {
        return person1.id - person2.id; 
    }
    public sortidDESC (person1, person2) {
        return person2.id - person1.id; 
    }
    public sortgenderASC (person1, person2) {
        return person1.gender.localeCompare(person2.gender);
    }
    public sortgenderDESC (person1, person2) {
        return person2.gender.localeCompare(person1.gender);
    }
    public sortnameASC (person1, person2) {
        return person1.firstname.localeCompare(person2.firstname);
    }
    public sortnameDESC (person1, person2) {
        return person2.firstname.localeCompare(person1.firstname);
    }
    public sortsurnameASC (person1, person2) {
        return person1.lastname.localeCompare(person2.lastname);
    }
    public sortsurnameDESC (person1, person2) {
        return person2.lastname.localeCompare(person1.lastname);
    }
    public sortemailASC (person1, person2) {
        return person1.email.localeCompare(person2.email);
    }
    public sortemailDESC (person1, person2) {
        return person2.email.localeCompare(person1.email);
    }
    public sortincomeASC (person1, person2) {
        return person1.income - person2.income;
    }
    public sortincomeDESC (person1, person2) {
        return person2.income - person1.income;
    }
    public sortbirthdayASC (person1, person2) {
        return Date.parse(person1.birthday)-Date.parse(person2.birthday);
    }
    public sortbirthdayDESC (person1, person2) {
        return Date.parse(person2.birthday)-Date.parse(person1.birthday);
    }
    public sortageASC (person1, person2) {
        return person1.age - person2.age;
    }
    public sortageDESC (person1, person2) {
        return person2.age - person1.age;
    }
}