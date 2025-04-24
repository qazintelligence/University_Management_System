const {
    SortByDate,
    SortByStudentsCount,
    SortByTitle
} = require("./courseSortingStrategy");

function getSortStrategy(type) {
    switch (type) {
        case "students":
            return new SortByStudentsCount();
        case "title":
            return new SortByTitle();
        case "date":
        default:
            return new SortByDate();
    }
}

module.exports = { getSortStrategy };
