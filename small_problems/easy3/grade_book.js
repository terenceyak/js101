console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"

function getGrade(grade1, grade2, grade3) {
    const average = (grade1 + grade2 + grade3)/3;
    console.log(average);
    if (90 <= average  && average <= 100) {
        return 'A';
    } else if (80 <= average && average < 90) {
        return 'B';
    } else if (70 <= average && average < 80) {
        return 'C';
    } else if (60 <= average && average < 70) {
        return 'D';
    } else if (0 <= average && average < 60) { 
        return 'F';
    }
}