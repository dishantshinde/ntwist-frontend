// Get references to the name list and buttons
const nameList = document.getElementById("nameList");
const sortBtn = document.getElementById("sortBtn");
const resetBtn = document.getElementById("resetBtn");

// Store the original order of list items (text only)
const originalItems = Array.from(nameList.children).map((li) => li.textContent);

// Event listener for the "Sort" button
sortBtn.addEventListener("click", () => {
  // Create a sorted copy of the original names array
  const sorted = [...originalItems].sort();

  // Clear the current list
  nameList.innerHTML = "";

  // Append sorted names back to the list
  sorted.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
});

// Event listener for the "Reset" button
resetBtn.addEventListener("click", () => {
  // Clear the current list
  nameList.innerHTML = "";

  // Append names in their original order
  originalItems.forEach((name) => {
    const li = document.createElement("li");
    li.textContent = name;
    nameList.appendChild(li);
  });
});
