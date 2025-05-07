document.addEventListener("DOMContentLoaded", () => {
  const profile = {
    firstName: "RICHARD",
    lastName: "SANCHEZ",
    title: "MARKETING MANAGER",
    contact: {
      phone: "+123-456-7890",
      email: "hello@site.com",
      address: "123 Anywhere",
      website: "www.site.com"
    },
    education: [
      {
        year: "2029 - 2030",
        university: "WARDIERE UNIVERSITY",
        degrees: ["Master of Business Management"]
      },
      {
        year: "2025 - 2029",
        university: "WARDIERE UNIVERSITY",
        degrees: ["Bachelor of Business", "GPA: 3.8 / 4.0"]
      }
    ],
    skills: [
      "Project Management", "Public Relations", "Teamwork", "Time Management", "Leadership", "Effective Communication", "Critical Thinking"
    ],
    languages: [
      "English (Fluent)", "French (Fluent)", "German (Basics)", "Spanish (Basic)"
    ],
    workExperience: [
      {
        company: "Borcelle Studio",
        date: "2030 - PRESENT",
        position: "Marketing Manager & Specialist",
        responsibilities: [
          "Develop and execute comprehensive marketing strategies",
          "Lead, mentor, and manage a marketing team",
          "Monitor brand consistency across marketing channels"
        ]
      },
      {
        company: "Fauget Studio",
        date: "2025 - 2029",
        position: "Marketing Manager & Specialist",
        responsibilities: [
          "Create and manage the marketing budget",
          "Oversee market research",
          "Monitor brand consistency across channels"
        ]
      },
      {
        company: "Studio Shodwe",
        date: "2024 - 2025",
        position: "Marketing Manager & Specialist",
        responsibilities: [
          "Develop and maintain strong partner relationships",
          "Maintain brand consistency across all marketing channels"
        ]
      }
    ],
    references: [
      {
        name: "Estelle Darcy",
        position: "Wardiere Inc. / CTO",
        phone: "123-456-7890",
        email: "hello@site.com"
      },
      {
        name: "Harper Richard",
        position: "Wardiere Inc. / CEO",
        phone: "123-456-7890",
        email: "hello@site.com"
      }
    ],
    profileDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
  };
  function makeEditable(element) {
    element.addEventListener("click", () => {
      const input = document.createElement("input");
      input.type = "text";
      input.value = element.innerText;
      input.style.width = "100%";
      element.replaceWith(input);
      input.focus();
  
      function save() {
        const value = input.value.trim();
        if (value === "") {
          const parent = input.closest("li, p, h3");
          if (parent) {
            parent.remove();
            return;
          }
        }
        const newSpan = document.createElement("span");
        newSpan.innerText = value;
        newSpan.className = element.className;
        makeEditable(newSpan);
        input.replaceWith(newSpan);
      }
  
      input.addEventListener("blur", save);
      input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") save();
      });
    });
  }
  
  const h1 = document.querySelector("h1");
  h1.innerHTML = `<span class="editable bold">${profile.firstName}</span> <span class="editable" style="color: #163853;">${profile.lastName}</span>`;
  document.querySelector("h2.market").innerHTML = `<span class="editable">${profile.title}</span>`;

  const contactDiv = document.querySelector(".contact");
  contactDiv.innerHTML = `
    <h2>CONTACT</h2>
    <p>📞 <span class="editable">${profile.contact.phone}</span></p>
    <p>📧 <span class="editable">${profile.contact.email}</span></p>
    <p>📍 <span class="editable">${profile.contact.address}</span></p>
    <p>🌐 <span class="editable">${profile.contact.website}</span></p>
  `;

  const educationList = document.getElementById("education-list");
  educationList.innerHTML = "";
  profile.education.forEach(edu => {
    const div = document.createElement("div");
    div.classList.add("div1");
    div.innerHTML = `
      <h3 style="font-size: 13px;"><p style="margin-bottom: 10px;"><span class="editable">${edu.year}</span><br><span class="editable">${edu.university}</span></p></h3>
      <ul style="margin-top: 0;">
        ${edu.degrees.map(degree => `<li><span class="editable">${degree}</span></li>`).join("")}
      </ul>
    `;
    educationList.appendChild(div);
  });

  const skillsList = document.querySelector(".skills ul");
  skillsList.innerHTML = "";
  profile.skills.forEach(skill => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="editable">${skill}</span>`;
    skillsList.appendChild(li);
  });

  const languagesList = document.querySelector(".languages ul");
  languagesList.innerHTML = "";
  profile.languages.forEach(language => {
    const li = document.createElement("li");
    li.innerHTML = `<span class="editable">${language}</span>`;
    languagesList.appendChild(li);
  });

  const workTimeline = document.querySelector(".work-experience .timeline");
  workTimeline.innerHTML = "";
  profile.workExperience.forEach(job => {
    const div = document.createElement("div");
    div.classList.add("entry");
    div.innerHTML = `
      <div class="dot"></div>
      <div class="content">
        <h3><strong><span class="editable">${job.company}</span></strong> <span class="date editable">${job.date}</span></h3>
        <p><span class="editable">${job.position}</span></p>
        <ul>
          ${job.responsibilities.map(task => `<li><span class="editable">${task}</span></li>`).join("")}
        </ul>
      </div>
    `;
    workTimeline.appendChild(div);
  });

  const referenceContainer = document.querySelector(".reference-container");
  referenceContainer.innerHTML = "";
  profile.references.forEach(ref => {
    const div = document.createElement("div");
    div.classList.add("reference-box");
    div.innerHTML = `
      <p style="color: #545454;"><strong><span class="editable">${ref.name}</span></strong></p>
      <p><span class="editable">${ref.position}</span></p>
      <p><span class="label">Phone:</span> <span class="editable">${ref.phone}</span></p>
      <p><span class="label">Email:</span> <span class="editable">${ref.email}</span></p>
    `;
    referenceContainer.appendChild(div);
  });

  const description = document.querySelector(".profile-description");
  description.innerHTML = `<span class="editable">${profile.profileDescription}</span>`;

  document.querySelectorAll(".editable").forEach(el => makeEditable(el));

  function styleButton(button, type) {
    button.style.padding = "8px 14px";
    button.style.marginTop = "15px";
    button.style.border = "2px solid #163853";
    button.style.borderRadius = "6px";
    button.style.fontSize = "14px";
    button.style.cursor = "pointer";
    button.style.display = "block";
    button.style.backgroundColor = type === "blue" ? "#163853" : "white";
    button.style.color = type === "blue" ? "white" : "#163853";
  }

  function addEducation() {
    const year = prompt("Enter year range (e.g. 2021 - 2025):");
    const university = prompt("Enter university name:");
    if (year && university) {
      const degrees = [];
      let another = true;
      while (another) {
        const degree = prompt("Enter a degree/program:");
        if (degree) {
          degrees.push(degree);
          another = confirm("Add another degree for this university?");
        } else {
          another = false;
        }
      }
      if (degrees.length > 0) {
        const div = document.createElement("div");
        div.classList.add("div1");
        div.innerHTML = `
          <h3 style="font-size: 13px;"><p style="margin-bottom: 10px;"><span class="editable">${year}</span><br><span class="editable">${university}</span></p></h3>
          <ul style="margin-top: 0;">
            ${degrees.map(degree => `<li><span class="editable">${degree}</span></li>`).join("")}
          </ul>
        `;
        document.getElementById("education-list").appendChild(div);
        div.querySelectorAll(".editable").forEach(el => makeEditable(el));
      }
    }
  }

  function addSkill() {
    const skill = prompt("Enter a new skill:");
    if (skill) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="editable">${skill}</span>`;
      skillsList.appendChild(li);
      li.querySelector(".editable").addEventListener("click", () => makeEditable(li.querySelector(".editable")));
    }
  }

  function addWorkExperience() {
    const company = prompt("Enter company name:");
    const dateRange = prompt("Enter date range (e.g. 2022 - 2024):");
    const position = prompt("Enter your position/title:");
    if (company && dateRange && position) {
      const responsibilities = [];
      let another = true;
      while (another) {
        const task = prompt("Enter a responsibility/task:");
        if (task) {
          responsibilities.push(task);
          another = confirm("Add another responsibility?");
        } else {
          another = false;
        }
      }
      if (responsibilities.length > 0) {
        const entry = document.createElement("div");
        entry.classList.add("entry");
        entry.innerHTML = `
          <div class="dot"></div>
          <div class="content">
            <h3><strong><span class="editable">${company}</span></strong> <span class="date editable">${dateRange}</span></h3>
            <p><span class="editable">${position}</span></p>
            <ul>
              ${responsibilities.map(task => `<li><span class="editable">${task}</span></li>`).join("")}
            </ul>
          </div>
        `;
        workTimeline.appendChild(entry);
        entry.querySelectorAll(".editable").forEach(el => makeEditable(el));
      }
    }
  }

  function addLanguage() {
    const language = prompt("Enter a new language (e.g. Italian (Fluent)):");
    if (language) {
      const li = document.createElement("li");
      li.innerHTML = `<span class="editable">${language}</span>`;
      languagesList.appendChild(li);
      li.querySelector(".editable").addEventListener("click", () => makeEditable(li.querySelector(".editable")));
    }
  }

  
  function makeDropdown(sectionSelector) {
    const section = document.querySelector(sectionSelector);
    const title = section.querySelector("h2");
    const content = Array.from(section.children).filter(child => child !== title);

    const arrow = document.createElement("span");
    arrow.textContent = "▼";
    arrow.style.marginRight = "8px";
    arrow.style.display = "inline-block";
    arrow.style.transition = "transform 0.2s ease";
    title.prepend(arrow);

    title.style.cursor = "pointer";
    title.addEventListener("click", () => {
      const isHidden = content[0].style.display === "none";
      content.forEach(el => el.style.display = isHidden ? "" : "none");
      arrow.textContent = isHidden ? "▼" : "▶";
    });
  }

  makeDropdown(".education");
  makeDropdown(".skills");
  makeDropdown(".languages");
  makeDropdown(".work-experience");
  makeDropdown(".reference-section");
  makeDropdown(".contact");
  makeDropdown(".profile");

  
  const addEduBtn = document.createElement("button");
  addEduBtn.textContent = "Add Education";
  styleButton(addEduBtn, "white");
  addEduBtn.addEventListener("click", addEducation);
  document.querySelector(".education").appendChild(addEduBtn);

  const addSkillBtn = document.createElement("button");
  addSkillBtn.textContent = "Add Skill";
  styleButton(addSkillBtn, "white");
  addSkillBtn.addEventListener("click", addSkill);
  document.querySelector(".skills").appendChild(addSkillBtn);

  const addWorkBtn = document.createElement("button");
  addWorkBtn.textContent = "Add Work Experience";
  styleButton(addWorkBtn, "blue");
  addWorkBtn.addEventListener("click", addWorkExperience);
  document.querySelector(".work-experience").appendChild(addWorkBtn);

  const addLangBtn = document.createElement("button");
  addLangBtn.textContent = "Add Language";
  styleButton(addLangBtn, "white");
  addLangBtn.addEventListener("click", addLanguage);
  document.querySelector(".languages").appendChild(addLangBtn);
});



  
