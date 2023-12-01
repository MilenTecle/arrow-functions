

// Simple Filtering
const people = [
    {
      name: 'Michael',
      age: 23,
    },
    {
      name: 'Lianna',
      age: 16,
    },
    {
      name: 'Paul',
      age: 18,
    },
  ];


  const oldEnough = people.filter(person => person.age >= 21);
  console.log(oldEnough);

  const paul = people.filter(p => p.name === "Paul")[0];
  console.log(paul);

  // Complex Filtering
  const students = [
    {
      id: 1,
      name: 'Mark',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 5 },
        { name: 'css', yrsExperience: 3 },
      ]
    },
    {
      id: 2,
      name: 'Ariel',
      profession: 'Developer',
      skills: [
        { name: 'javascript', yrsExperience: 0 },
        { name: 'html', yrsExperience: 4 },
        { name: 'css', yrsExperience: 2 },
      ]
    },
    {
      id: 3,
      name: 'Jason',
      profession: 'Designer',
      skills: [
        { name: 'javascript', yrsExperience: 1 },
        { name: 'html', yrsExperience: 1 },
        { name: 'css', yrsExperience: 5 },
      ]
    },
  ];

  // Filter out the candidates with less than 5 years of experience in any field. That will return Mark & Jason.
  const has5yearsExp = skill => skill.yrsExperience >= 5;
  const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;
  const candidates = students.filter(hasStrongSkills)
  console.log(candidates);

  // Using map to get only the names of the qualifying candidates
  const candidateNames = candidates.map(candidate=> candidate.name);
  console.log(candidateNames);
