"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PersonListItem = /** @class */ (function () {
    function PersonListItem() {
    }
    PersonListItem.prototype.toTableRow = function () {
        return '<tr><td>'
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
            + this.birthday.toISOString()
            + '</td><td>'
            + this.income
            + '</td></tr>';
    };
    return PersonListItem;
}());
exports.PersonListItem = PersonListItem;
//# sourceMappingURL=person-list-item.js.map