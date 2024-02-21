(function(){
    let students = [];

    function fetchStudentData(){
        return fetch('students.json')
            .then(response => {
                if(!response.ok){
                    throw new Error("Failed to fetch data.")
                }
                return response.json();
            })
            .then(data => {
                students = data.students;
            });
    }

    // Function to display student major info
    function displayMajorInfo(filteredStudents){
        const majorInfoDisplay = document.getElementById('filterByMajorDisplay');
        majorInfoDisplay.innerHTML = "<ul>";

        filteredStudents.forEach(student => {
            majorInfoDisplay.innerHTML += `<li>${student.major} - Age: ${student.age}</li>`;
        });

        majorInfoDisplay.innerHTML += "</ul>";
    }

    // Function to display students based on even index
    function displayEvenIndexInfo() {
        const evenIndexInfoDisplay = document.getElementById('filterByIndex');
        evenIndexInfoDisplay.innerHTML = "<ul>";

        students.forEach((student, index) => {
            if (index % 2 === 0) {
                evenIndexInfoDisplay.innerHTML += `<li>${student.name} - Grade: ${student.grade}</li>`;
            }
        });

        evenIndexInfoDisplay.innerHTML += "</ul>";
    }

    // Function to display students based on odd index
    function displayOddIndexInfo() {
        const oddIndexInfoDisplay = document.getElementById('filterByIndex');
        oddIndexInfoDisplay.innerHTML = "<ul>";

        students.forEach((student, index) => {
            if (index % 2 !== 0) {
                oddIndexInfoDisplay.innerHTML += `<li>${student.name} - Grade: ${student.grade}</li>`;
            }
        });

        oddIndexInfoDisplay.innerHTML += "</ul>";
    }

    // Function to display average age
    function displayAverageAge() {
        const averageAgeInfoDisplay = document.getElementById('filterByAge');
        let totalAge = 0;

        students.forEach(student => {
            totalAge += student.age;
        });

        // Calculate the average age
        const averageAge = totalAge / students.length;

        // Display the average age
        averageAgeInfoDisplay.innerHTML = `<p>Average Age: ${averageAge.toFixed(2)}</p>`;
    }

    // Function filter by Computer Science majors over 20
    function filterByComputerScienceOver20(){
        const computerScienceOver20 = students.filter(student => student.major === 'Computer Science' && student.age >= 20);
        displayMajorInfo(computerScienceOver20);
        displayAverageAge();
    }

    // Function filter by Biology majors over 20
    function filterByBiologyOver20(){
        const biologyOver20 = students.filter(student => student.major === 'Biology' && student.age >= 20);
        displayMajorInfo(biologyOver20);
        displayAverageAge();
    }

    // Function filter by Physics majors over 20
    function filterByPhysicsOver20(){
        const physicsOver20 = students.filter(student => student.major === 'Physics' && student.age >= 20);
        displayMajorInfo(physicsOver20);
        displayAverageAge();
    }

    // Call the fetch function to get student data
    fetchStudentData().then(() => {
        // Display initial data
        displayMajorInfo(students);
    });

    // Attach event listeners to buttons
    document.getElementById('calculateEvenIndexBtn').addEventListener('click', displayEvenIndexInfo);
    document.getElementById('calculateOddIndexBtn').addEventListener('click', displayOddIndexInfo);
    document.getElementById('filterByComputerScienceOver20Btn').addEventListener('click', filterByComputerScienceOver20);
    document.getElementById('filterByBiologyOver20Btn').addEventListener('click', filterByBiologyOver20);
    document.getElementById('filterByPhysicsOver20Btn').addEventListener('click', filterByPhysicsOver20);
    document.getElementById('calculateAverageAgeBtn').addEventListener('click', displayAverageAge);
})();
