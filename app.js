// Student Records Data Processor (Pure JavaScript)
// No HTML, no CSS, no Node.js - works in any online JavaScript editor

// ============================================================================
// HARDCODED DATASET - 30+ Student Records
// ============================================================================

const students = [
  { id: 1, name: "Alice Johnson", year: 1, course: "Computer Science", grades: [92, 88, 95, 90], enrolled: true },
  { id: 2, name: "Bob Smith", year: 2, course: "Mathematics", grades: [78, 82, 85, 80], enrolled: true },
  { id: 3, name: "Carol Williams", year: 3, course: "Physics", grades: [88, 91, 87, 93], enrolled: true },
  { id: 4, name: "David Brown", year: 1, course: "Computer Science", grades: [95, 97, 92, 96], enrolled: true },
  { id: 5, name: "Emma Davis", year: 4, course: "Biology", grades: [85, 88, 90, 87], enrolled: false },
  { id: 6, name: "Frank Miller", year: 2, course: "Mathematics", grades: [92, 95, 89, 94], enrolled: true },
  { id: 7, name: "Grace Wilson", year: 3, course: "Physics", grades: [76, 80, 78, 82], enrolled: true },
  { id: 8, name: "Henry Moore", year: 1, course: "Computer Science", grades: [88, 90, 85, 91], enrolled: true },
  { id: 9, name: "Ivy Taylor", year: 4, course: "Biology", grades: [94, 96, 93, 95], enrolled: true },
  { id: 10, name: "Jack Anderson", year: 2, course: "Mathematics", grades: [70, 75, 72, 68], enrolled: false },
  { id: 11, name: "Karen Thomas", year: 3, course: "Physics", grades: [85, 87, 89, 86], enrolled: true },
  { id: 12, name: "Leo Jackson", year: 1, course: "Computer Science", grades: [91, 89, 93, 90], enrolled: true },
  { id: 13, name: "Mia White", year: 4, course: "Biology", grades: [82, 84, 80, 83], enrolled: true },
  { id: 14, name: "Noah Harris", year: 2, course: "Mathematics", grades: [88, 91, 87, 90], enrolled: true },
  { id: 15, name: "Olivia Martin", year: 3, course: "Physics", grades: [93, 95, 91, 94], enrolled: true },
  { id: 16, name: "Peter Garcia", year: 1, course: "Computer Science", grades: [79, 82, 80, 81], enrolled: false },
  { id: 17, name: "Quinn Martinez", year: 4, course: "Biology", grades: [90, 92, 88, 91], enrolled: true },
  { id: 18, name: "Rachel Robinson", year: 2, course: "Mathematics", grades: [95, 97, 93, 96], enrolled: true },
  { id: 19, name: "Sam Clark", year: 3, course: "Physics", grades: [81, 83, 79, 82], enrolled: true },
  { id: 20, name: "Tina Rodriguez", year: 1, course: "Computer Science", grades: [86, 88, 84, 87], enrolled: true },
  { id: 21, name: "Uma Lewis", year: 4, course: "Biology", grades: [77, 79, 75, 78], enrolled: false },
  { id: 22, name: "Victor Lee", year: 2, course: "Mathematics", grades: [83, 85, 81, 84], enrolled: true },
  { id: 23, name: "Wendy Walker", year: 3, course: "Physics", grades: [89, 91, 87, 90], enrolled: true },
  { id: 24, name: "Xavier Hall", year: 1, course: "Computer Science", grades: [94, 96, 92, 95], enrolled: true },
  { id: 25, name: "Yara Allen", year: 4, course: "Biology", grades: [86, 88, 84, 87], enrolled: true },
  { id: 26, name: "Zack Young", year: 2, course: "Mathematics", grades: [72, 74, 70, 73], enrolled: true },
  { id: 27, name: "Amy Hernandez", year: 3, course: "Physics", grades: [96, 98, 94, 97], enrolled: true },
  { id: 28, name: "Brian King", year: 1, course: "Computer Science", grades: [80, 82, 78, 81], enrolled: true },
  { id: 29, name: "Cathy Wright", year: 4, course: "Biology", grades: [91, 93, 89, 92], enrolled: true },
  { id: 30, name: "Derek Lopez", year: 2, course: "Mathematics", grades: [87, 89, 85, 88], enrolled: false },
  { id: 31, name: "Elena Hill", year: 3, course: "Physics", grades: [], enrolled: true },
  { id: 32, name: "Felix Scott", year: 1, course: "Computer Science", grades: [85, 87, 83, 86], enrolled: true }
];

// ============================================================================
// FUNCTION 1: getAverageGrade(student)
// Returns the average grade for a single student
// ============================================================================

function getAverageGrade(student) {
  // Input validation
  if (!student || typeof student !== 'object') {
    throw new Error('Invalid input: student must be an object');
  }

  if (!student.grades || !Array.isArray(student.grades)) {
    return 0; // Handle students with no grades
  }

  if (student.grades.length === 0) {
    return 0; // Handle empty grades array
  }

  const sum = student.grades.reduce((acc, grade) => acc + grade, 0);
  return sum / student.grades.length;
}

// ============================================================================
// FUNCTION 2: getTopStudents(students, n)
// Returns top n students sorted by average grade (descending)
// ============================================================================

function getTopStudents(students, n) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
    throw new Error('Invalid input: n must be a non-negative integer');
  }

  if (students.length === 0) {
    return [];
  }

  // Create new array with averages, sort, and return top n
  const studentsWithAverages = students.map(student => ({
    ...student,
    averageGrade: getAverageGrade(student)
  }));

  const sorted = studentsWithAverages.sort((a, b) => b.averageGrade - a.averageGrade);

  return sorted.slice(0, n);
}

// ============================================================================
// FUNCTION 3: groupByCourse(students)
// Returns an object grouping students by their course
// ============================================================================

function groupByCourse(students) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  if (students.length === 0) {
    return {};
  }

  return students.reduce((groups, student) => {
    const course = student.course;
    if (!groups[course]) {
      groups[course] = [];
    }
    groups[course].push({ ...student }); // Create copy to avoid mutation
    return groups;
  }, {});
}

// ============================================================================
// FUNCTION 4: getEnrolledCount(students)
// Returns count of enrolled vs not enrolled students
// ============================================================================

function getEnrolledCount(students) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  const enrolled = students.filter(student => student.enrolled === true).length;
  const notEnrolled = students.filter(student => student.enrolled !== true).length;

  return {
    enrolled,
    notEnrolled,
    total: students.length
  };
}

// ============================================================================
// FUNCTION 5: findStudent(students, name)
// Case-insensitive search for a student by name
// ============================================================================

function findStudent(students, name) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  if (typeof name !== 'string' || name.trim() === '') {
    throw new Error('Invalid input: name must be a non-empty string');
  }

  const searchTerm = name.toLowerCase().trim();

  const found = students.find(student => 
    student.name.toLowerCase().includes(searchTerm)
  );

  return found ? { ...found } : null; // Return copy or null
}

// ============================================================================
// FUNCTION 6: getCourseAverages(students)
// Returns average grade for each course, sorted highest to lowest
// ============================================================================

function getCourseAverages(students) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  if (students.length === 0) {
    return [];
  }

  // Group by course and calculate averages
  const courseData = students.reduce((acc, student) => {
    const course = student.course;
    const avg = getAverageGrade(student);

    if (!acc[course]) {
      acc[course] = { sum: 0, count: 0 };
    }

    acc[course].sum += avg;
    acc[course].count += 1;

    return acc;
  }, {});

  // Convert to array and calculate final averages
  const courseAverages = Object.keys(courseData).map(course => ({
    course,
    averageGrade: courseData[course].sum / courseData[course].count
  }));

  // Sort by average grade descending
  return courseAverages.sort((a, b) => b.averageGrade - a.averageGrade);
}

// ============================================================================
// FUNCTION 7: exportSummary(students)
// Returns a comprehensive summary object
// ============================================================================

function exportSummary(students) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  if (students.length === 0) {
    return {
      totalStudents: 0,
      overallAverageGrade: 0,
      topPerformingStudent: null,
      courseBreakdown: []
    };
  }

  // Calculate overall average
  const allAverages = students.map(student => getAverageGrade(student));
  const overallAverage = allAverages.reduce((acc, avg) => acc + avg, 0) / allAverages.length;

  // Find top performing student
  const topStudents = getTopStudents(students, 1);
  const topPerformer = topStudents.length > 0 ? topStudents[0] : null;

  // Get course breakdown
  const courseBreakdown = getCourseAverages(students);

  return {
    totalStudents: students.length,
    overallAverageGrade: overallAverage,
    topPerformingStudent: topPerformer ? {
      id: topPerformer.id,
      name: topPerformer.name,
      course: topPerformer.course,
      averageGrade: topPerformer.averageGrade
    } : null,
    courseBreakdown
  };
}

// ============================================================================
// STRETCH GOAL 1: filterByYear(students, year)
// Returns only students in a given year level
// ============================================================================

function filterByYear(students, year) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  if (typeof year !== 'number' || year < 1 || !Number.isInteger(year)) {
    throw new Error('Invalid input: year must be a positive integer (1-4)');
  }

  return students.filter(student => student.year === year);
}

// ============================================================================
// STRETCH GOAL 2: sortByName(students)
// Returns students sorted alphabetically by name
// ============================================================================

function sortByName(students) {
  // Input validation
  if (!Array.isArray(students)) {
    throw new Error('Invalid input: students must be an array');
  }

  // Create copies and sort alphabetically
  return students.map(student => ({ ...student })).sort((a, b) => 
    a.name.localeCompare(b.name)
  );
}

// ============================================================================
// MAIN FUNCTION - Prints complete analysis report
// ============================================================================

function main() {
  console.log('='.repeat(80));
  console.log('                    STUDENT RECORDS DATA PROCESSOR');
  console.log('                         ANALYSIS REPORT');
  console.log('='.repeat(80));
  console.log('');

  // === OVERALL SUMMARY ===
  console.log('## OVERALL SUMMARY');
  console.log('-'.repeat(80));
  const summary = exportSummary(students);
  console.log(`Total Students: ${summary.totalStudents}`);
  console.log(`Overall Average Grade: ${summary.overallAverageGrade.toFixed(2)}`);
  console.log('');

  // === TOP PERFORMING STUDENT ===
  console.log('## TOP PERFORMING STUDENT');
  console.log('-'.repeat(80));
  if (summary.topPerformingStudent) {
    console.log(`Name: ${summary.topPerformingStudent.name}`);
    console.log(`ID: ${summary.topPerformingStudent.id}`);
    console.log(`Course: ${summary.topPerformingStudent.course}`);
    console.log(`Average Grade: ${summary.topPerformingStudent.averageGrade.toFixed(2)}`);
  }
  console.log('');

  // === TOP 5 STUDENTS ===
  console.log('## TOP 5 STUDENTS BY AVERAGE GRADE');
  console.log('-'.repeat(80));
  const top5 = getTopStudents(students, 5);
  top5.forEach((student, index) => {
    console.log(`${index + 1}. ${student.name} (${student.course}) - Average: ${student.averageGrade.toFixed(2)}`);
  });
  console.log('');

  // === ENROLLMENT STATUS ===
  console.log('## ENROLLMENT STATUS');
  console.log('-'.repeat(80));
  const enrollment = getEnrolledCount(students);
  console.log(`Enrolled: ${enrollment.enrolled}`);
  console.log(`Not Enrolled: ${enrollment.notEnrolled}`);
  console.log(`Total: ${enrollment.total}`);
  console.log('');

  // === COURSE AVERAGES ===
  console.log('## AVERAGE GRADES BY COURSE (Highest to Lowest)');
  console.log('-'.repeat(80));
  const courseAvgs = getCourseAverages(students);
  courseAvgs.forEach((course, index) => {
    console.log(`${index + 1}. ${course.course}: ${course.averageGrade.toFixed(2)}`);
  });
  console.log('');

  // === STUDENTS GROUPED BY COURSE ===
  console.log('## STUDENTS GROUPED BY COURSE');
  console.log('-'.repeat(80));
  const grouped = groupByCourse(students);
  Object.keys(grouped).forEach(course => {
    console.log(`\n${course} (${grouped[course].length} students):`);
    grouped[course].forEach(student => {
      console.log(`  - ${student.name} (Year ${student.year})`);
    });
  });
  console.log('');

  // === DEMONSTRATE findStudent ===
  console.log('## STUDENT SEARCH DEMONSTRATION');
  console.log('-'.repeat(80));
  const search1 = findStudent(students, "alice");
  console.log(`Search for "alice": ${search1 ? `${search1.name} - ${search1.course}` : 'Not found'}`);

  const search2 = findStudent(students, "nonexistent");
  console.log(`Search for "nonexistent": ${search2 ? `${search2.name}` : 'Not found'}`);
  console.log('');

  // === STRETCH GOAL: FILTER BY YEAR ===
  console.log('## STRETCH GOAL: STUDENTS BY YEAR LEVEL');
  console.log('-'.repeat(80));
  for (let year = 1; year <= 4; year++) {
    const yearStudents = filterByYear(students, year);
    console.log(`Year ${year}: ${yearStudents.length} students`);
  }
  console.log('');

  // === STRETCH GOAL: SORT BY NAME ===
  console.log('## STRETCH GOAL: FIRST 10 STUDENTS (ALPHABETICAL ORDER)');
  console.log('-'.repeat(80));
  const sorted = sortByName(students);
  sorted.slice(0, 10).forEach((student, index) => {
    console.log(`${index + 1}. ${student.name}`);
  });
  console.log('');

  // === EDGE CASE HANDLING ===
  console.log('## EDGE CASE HANDLING DEMONSTRATION');
  console.log('-'.repeat(80));

  // Empty array
  const emptyResult = exportSummary([]);
  console.log(`Empty array - Total Students: ${emptyResult.totalStudents}, Overall Average: ${emptyResult.overallAverageGrade}`);

  // Student with no grades
  const studentNoGrades = students.find(s => s.id === 31);
  console.log(`Student with no grades (${studentNoGrades.name}): Average = ${getAverageGrade(studentNoGrades)}`);

  // Search for non-existent name
  const notFound = findStudent(students, "xyz123");
  console.log(`Search for "xyz123": ${notFound === null ? 'Returns null (handled gracefully)' : 'Found'}`);

  console.log('');
  console.log('='.repeat(80));
  console.log('                         END OF REPORT');
  console.log('='.repeat(80));
}

// Run the main function
main();
