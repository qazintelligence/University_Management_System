class SortByDate {
    sort(courses) {
        return courses.sort(
            (a, b) => new Date(a.createdAt) - new Date(b.createdAt)
        );
    }
}

class SortByStudentsCount {
    sort(courses) {
        return courses.sort((a, b) => a.students.length - b.students.length);
    }
}

class SortByTitle {
    sort(courses) {
        return courses.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }
}

class CourseSorter {
    constructor(strategy) {
        this.strategy = strategy;
    }
    sort(courses) {
        return this.strategy.sort(courses);
    }
}

module.exports = {
    SortByDate,
    SortByStudentsCount,
    SortByTitle,
    CourseSorter,
};
