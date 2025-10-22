const data = {
  name: "",
  email: "",
  phone: "",
  linkedin: "",
  institution: "",
  startDate: "",
  endDate: "",
  institutionExtraData: "",
  jobTitle: "",
  company: "",
  period: "",
  achievements: "",
  languages: "",
  tools: "",
};

function GeneralInfo() {
  return (
    <div className="GeneralInfo input-form">
      <h1>General Information</h1>

      <div className="input-wrapper">
        <input
          id="Name"
          type="text"
          className="nice-input"
          placeholder="Name"
          defaultValue={data.name}
        />
        <span id="error-Name" className="error-text"></span>
      </div>

      <div className="input-wrapper">
        <input
          id="Email"
          type="email"
          className="nice-input"
          placeholder="Email"
          defaultValue={data.email}
        />
        <span id="error-Email" className="error-text"></span>
      </div>

      <div className="input-wrapper">
        <input
          id="Phone"
          type="tel"
          className="nice-input"
          placeholder="Phone"
          defaultValue={data.phone}
        />
        <span id="error-Phone" className="error-text"></span>
      </div>

      <div className="input-wrapper">
        <input
          id="Linkedin"
          type="text"
          className="nice-input"
          placeholder="LinkedIn"
          defaultValue={data.linkedin}
        />
        <span id="error-Linkedin" className="error-text"></span>
      </div>
    </div>
  );
}

function Education() {
  return (
    <div className="Education input-form">
      <h1>Education</h1>

      <div className="input-wrapper">
        <input
          id="Institution"
          type="text"
          className="nice-input"
          placeholder="Institution"
          defaultValue={data.institution}
        />
        <span id="error-Institution" className="error-text"></span>
      </div>

      <div className="date-parent input-wrapper">
        <label htmlFor="Institution-start">Start date</label>
        <input
          id="Institution-start"
          type="date"
          className="nice-input"
          defaultValue={data.startDate}
        />
        <span id="error-Institution-start" className="error-text"></span>
      </div>

      <div className="date-parent input-wrapper">
        <label htmlFor="Institution-end">End date</label>
        <input
          id="Institution-end"
          type="date"
          className="nice-input"
          defaultValue={data.endDate}
        />
        <span id="error-Institution-end" className="error-text"></span>
      </div>

      <textarea
        id="Institution-extra-data"
        className="nice-input"
        placeholder="Write extra details about your education here..."
        defaultValue={data.institutionExtraData}
      ></textarea>
      <span id="error-Institution-extra-data" className="error-text"></span>
    </div>
  );
}

function WorkExperience() {
  return (
    <div className="WorkExperience input-form">
      <h1>Work Experience</h1>

      <div className="input-wrapper">
        <input
          id="jobTitle"
          type="text"
          className="nice-input"
          placeholder="Job Title"
          defaultValue={data.jobTitle}
        />
        <span id="error-jobTitle" className="error-text"></span>
      </div>

      <div className="input-wrapper">
        <input
          id="company"
          type="text"
          className="nice-input"
          placeholder="Company"
          defaultValue={data.company}
        />
        <span id="error-company" className="error-text"></span>
      </div>

      <div className="input-wrapper">
        <input
          id="period"
          type="text"
          className="nice-input"
          placeholder="Employment Period"
          defaultValue={data.period}
        />
        <span id="error-period" className="error-text"></span>
      </div>

      <textarea
        id="achievements"
        className="nice-input"
        placeholder="Write about your achievements here..."
        defaultValue={data.achievements}
      ></textarea>
      <span id="error-achievements" className="error-text"></span>
    </div>
  );
}

function YourSkills() {
  return (
    <div className="skills input-form">
      <h1>Your Skills</h1>

      <textarea
        id="languages"
        className="nice-input"
        placeholder="List the languages you know..."
        defaultValue={data.languages}
      ></textarea>
      <span id="error-languages" className="error-text"></span>

      <textarea
        id="tools"
        className="nice-input"
        placeholder="List the tools or technologies you can use..."
        defaultValue={data.tools}
      ></textarea>
      <span id="error-tools" className="error-text"></span>
    </div>
  );
}

function isFormValid() {
  const requiredFields = [
    "Name",
    "Email",
    "Phone",
    "Linkedin",
    "Institution",
    "Institution-start",
    "Institution-end",
    "jobTitle",
    "company",
    "period",
    "achievements",
    "languages",
    "tools",
  ];

  let valid = true;

  // Clear all previous errors
  document.querySelectorAll(".error-text").forEach((e) => (e.textContent = ""));

  for (const id of requiredFields) {
    const el = document.getElementById(id);
    const errorEl = document.getElementById(`error-${id}`);

    if (!el) continue; // skip if element missing
    if (!el.value.trim()) {
      if (errorEl) errorEl.textContent = "This field is required";
      valid = false;
    }
  }

  const emailEl = document.getElementById("Email");
  const phoneEl = document.getElementById("Phone");
  const startEl = document.getElementById("Institution-start");
  const endEl = document.getElementById("Institution-end");

  if (emailEl && emailEl.value && !/\S+@\S+\.\S+/.test(emailEl.value)) {
    const err = document.getElementById("error-Email");
    if (err) err.textContent = "Invalid email address";
    valid = false;
  }

  if (phoneEl && phoneEl.value && !/^\+?\d{7,15}$/.test(phoneEl.value)) {
    const err = document.getElementById("error-Phone");
    if (err) err.textContent = "Invalid phone number";
    valid = false;
  }

  if (
    startEl &&
    endEl &&
    startEl.value &&
    endEl.value &&
    new Date(startEl.value) > new Date(endEl.value)
  ) {
    const err = document.getElementById("error-Institution-end");
    if (err) err.textContent = "End date cannot be before start date";
    valid = false;
  }

  return valid;
}

function saveTheData(formPart) {
  if (formPart === 1) {
    data.name = document.getElementById("Name").value;
    data.email = document.getElementById("Email").value;
    data.phone = document.getElementById("Phone").value;
    data.linkedin = document.getElementById("Linkedin").value;
  } else if (formPart === 2) {
    data.institution = document.getElementById("Institution").value;
    data.startDate = document.getElementById("Institution-start").value;
    data.endDate = document.getElementById("Institution-end").value;
    data.institutionExtraData = document.getElementById(
      "Institution-extra-data",
    ).value;
  } else if (formPart === 3) {
    data.jobTitle = document.getElementById("jobTitle").value;
    data.company = document.getElementById("company").value;
    data.period = document.getElementById("period").value;
    data.achievements = document.getElementById("achievements").value;
  } else if (formPart === 4) {
    data.languages = document.getElementById("languages").value;
    data.tools = document.getElementById("tools").value;
  }
}

export {
  data,
  GeneralInfo,
  Education,
  WorkExperience,
  YourSkills,
  isFormValid,
  saveTheData,
};
