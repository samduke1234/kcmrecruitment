const applicationData = {
  "KCM1984GRD013132": {
    name: "Hruthik M",
    post: "Group D",
    dob: "10-09-2003",
    status: "Application Received and Under Review"
  },
  "KCM1984GRD012743": {
    name: "Darshan A",
    post: "Group D",
    dob: "06-06-1999",
    status: "Application Received and Under Review"
  },
  "KCM1984GRD011407": {
    name: "Vivek P",
    post: "Group D",
    dob: "-",
    status: "Application Received and Under Review"
  },
  "KCM1984GRD013566": {
    name: "Sandeepa H S",
    post: "Group D",
    dob: "28-02-2001",
    status: "Application Received and Under Review"
  },
  "KCM1984GRD012920": {
    name: "Sandeepa H S",
    post: "Group D",
    dob: "09-01-1991",
    status: "Application Received and Under Review"
  },
  "KCM1984GRD012951": {
    name: "Aadarsh KP",
    post: "Group D",
    dob: "",
    status: "Application Received and Under Review"
  }
};

function getDetails() {
  const input = document.getElementById("applicationNumber").value.trim().toUpperCase();
  const result = document.getElementById("resultMessage");

  if (!input) {
    result.textContent = "Please enter a valid Application Number.";
    result.style.color = "red";
    return;
  }

  const data = applicationData[input];

  if (data) {
    result.innerHTML = `
      <strong>Application Number:</strong> ${input}<br>
      <strong>Name:</strong> ${data.name}<br>
      <strong>Applied Post:</strong> ${data.post}<br>
      <strong>Date of Birth:</strong> ${data.dob || "N/A"}<br>
      <strong>Status:</strong> ${data.status}
    `;
    result.style.color = "green";
  } else {
    result.textContent = "No record found for the entered Application Number.";
    result.style.color = "red";
  }
}
function getDetails() {
  const input = document.getElementById("applicationNumber").value.trim().toUpperCase();
  const result = document.getElementById("resultMessage");

  if (!input) {
    result.textContent = "Please enter a valid Application Number.";
    result.style.color = "red";
    return;
  }

  // Optional: list of known application numbers
  const validApplications = ["KCM1984GRD013132", "KCM1984GRD012743", "KCM1984GRD011407", "KCM1984GRD013566", "KCM1984GRD012920", "KCM1984GRD012951"];

  if (validApplications.includes(input)) {
    // Redirect to individual HTML page
    window.location.href = `${input}.html`;
  } else {
    result.textContent = "No record found for the entered Application Number.";
    result.style.color = "red";
  }
}
