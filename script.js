const studentDetails = [
  {
    rollNo: "1",
    Name: "NilakshiBen",
  },
  {
    rollNo: "2",
    Name: "Farhan",
  },
  {
    rollNo: "3",
    Name: "NikitaBen",
  },
  {
    rollNo: "4",
    Name: "Yashsvi",
  },
  {
    rollNo: "5",
    Name: "RiyaBen",
  },
  {
    rollNo: "6",
    Name: "KeyurBhai",
  },
  {
    rollNo: "7",
    Name: "Pinal",
  },
  {
    rollNo: "8",
    Name: "Tanuj",
  },
  {
    rollNo: "9",
    Name: "DhruviBen",
  },
  {
    rollNo: "10",
    Name: "AyushKumar",
  },
  {
    rollNo: "11",
    Name: "DiyaBen",
  },
  {
    rollNo: "12",
    Name: "Vimlesh",
  },
  {
    rollNo: "13",
    Name: "Dhruv",
  },
  {
    rollNo: "14",
    Name: "Sefali",
  },
  {
    rollNo: "15",
    Name: "Vishnu",
  },
  {
    rollNo: "16",
    Name: "TwinkalBen",
  },
  {
    rollNo: "17",
    Name: "KavitaBen",
  },
  {
    rollNo: "18",
    Name: "Hiren",
  },
  {
    rollNo: "19",
    Name: "PriteshBhai",
  },
  {
    rollNo: "20",
    Name: "Yash",
  },
  {
    rollNo: "25",
    Name: "Tufel",
  },
  {
    rollNo: "26",
    Name: "Jiya",
  },
  {
    rollNo: "27",
    Name: "Mihir",
  },
  {
    rollNo: "28",
    Name: "Nisha",
  },
  {
    rollNo: "29",
    Name: "Dhruv",
  },
  {
    rollNo: "30",
    Name: "Nikita",
  },
  {
    rollNo: "31",
    Name: "Pooja",
  },
  {
    rollNo: "32",
    Name: "Nency",
  },
  {
    rollNo: "33",
    Name: "Tanvi R.",
  },
  {
    rollNo: "34",
    Name: "Shreyansh",
  },
  {
    rollNo: "35",
    Name: "Nirali",
  },
  {
    rollNo: "36",
    Name: "Tanvi B.",
  },
  {
    rollNo: "37",
    Name: "Meet",
  },
  {
    rollNo: "38",
    Name: "Prashvi",
  },
];
let clickCount = 0;
let btn = document.getElementById("btn");
let showname = document.getElementById("showname");

btn.addEventListener("click", (event) => {
  clickCount++;

  let randomArray = Array.from(
    { length: 5 },
    () => Math.floor(Math.random() * 33) + 1
  );
  console.log(randomArray);

  function hasDuplicate(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
          console.log("Duplicate found: " + arr[i]);
          let removedElement = arr.splice(j, 1)[0]; // Pop the duplicate value
          console.log("Removed Element: " + removedElement);
          let newRandomValue = Math.floor(Math.random() * 32 + 1);
          arr.push(newRandomValue); // Add a new random value
          console.log("New Value Added: " + newRandomValue);
          return true; // Found a duplicate
        }
      }
    }
    return false; // No duplicates
  }

  console.log(hasDuplicate(randomArray));

  if (clickCount % 2 === 0) {
    while (showname.firstChild) {
      showname.removeChild(showname.firstChild);
    }
    clickCount = 1;
    // console.log(clickCount);
  }

  const listOfStudent = randomArray.map((value, index) => {
    let studentName = studentDetails[value].Name;
    let li = document.createElement("li");
    li.textContent = studentName;
    showname.appendChild(li);
    console.log(studentName);
    return studentName;
  });

  // console.log(listOfStudent);

  const history = document.getElementById("history");

  const storeData = listOfStudent.map((value, index) => {
    const li = document.createElement("li");
    li.textContent = `${value}`;
    history.appendChild(li);
  });

  
});
const SaveData = () => {
  localStorage.setItem("data", history.innerHTML);
};
SaveData();
const showData = () => {
  history.innerHTML = localStorage.getItem("data");
};

showData();