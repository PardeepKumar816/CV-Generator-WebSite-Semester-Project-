const education = [];
const skills = [];
const experience = [];
const projects = [];
const objective = [];
var cv = false;


function addField(n, event) {
	event.preventDefault();

	if (n == 'education') {
		education.push(document.getElementsByName(n)[0].value);
		document.getElementsByName(n)[0].value = '';
	}
	if (n == 'experience') {
		experience.push(document.getElementsByName(n)[0].value);
		document.getElementsByName(n)[0].value = '';
	}
	if (n == 'skill') {
		skills.push(document.getElementsByName(n)[0].value);
		document.getElementsByName(n)[0].value = '';
	}
	if (n == 'projects') {
		projects.push(document.getElementsByName(n)[0].value);
		document.getElementsByName(n)[0].value = '';
	}
	if (n == 'objective') {
		objective.push(document.getElementsByName(n)[0].value);
		document.getElementsByName(n)[0].value = '';
	}

}



function generateCV() {



	// Get the input values
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var phone = document.getElementById("phone").value;
	var address = document.getElementById("address").value;





	var educationHTML = '';
	for (var i = 0; i < education.length; i++) {
		educationHTML += '<p>' + education[i] + '</p>';
	}

	var experienceHTML = '';
	for (var i = 0; i < experience.length; i++) {
		experienceHTML += '<p>' + experience[i] + '</p>';
	}

	var skillsHTML = '';
	for (var i = 0; i < skills.length; i++) {
		skillsHTML += '<p>' + skills[i] + '</p>';
	}

	var projectsHTML = '';
	for (var i = 0; i < projects.length; i++) {
		projectsHTML += '<p>' + projects[i] + '</p>';
	}

	var objectiveHTML = '';
	for (var i = 0; i < objective.length; i++) {
		objectiveHTML += '<p>' + objective[i] + '</p>';
	}

	if (name === '' || email === '' || phone === '' || address === '' || education.length === 0 || experience.length === 0 || skills.length === 0 || projects.length === 0 || objective.length === 0) {
		alert('Please fill in all the required fields.');
		return false;
	}

	//var cv1 = false;
	if (cv) {
		var html = generateCV1(name, email, phone, address, educationHTML, experienceHTML, objectiveHTML, skillsHTML, projectsHTML);
	} else {
		var html = generateCV2(name, email, phone, address, educationHTML, experienceHTML, objectiveHTML, skillsHTML, projectsHTML);
	}


	// Open a new window with the CV HTML
	var cvWindow = window.open("", "CV");
	cvWindow.document.write(html);
	cvWindow.document.close();
}

function generateCV1(name, email, phone, address, educationHTML, experienceHTML, objectiveHTML, skillsHTML, projectsHTML) {
	var html = `
	<!DOCTYPE html>
	<html>
	<head>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
	
		<title>CV Preview</title>
		<style>
			.hero {
				background-color: rgb(85, 85, 85);
				text-align: center;
				padding: 10px;
				color:white
			}
	
			.main {
				display: flex;
				justify-content: space-around;
				padding: 10px;
				background-color: rgb(68, 218, 255);
			}
	
			.main h2 {
				border-bottom: 2px solid rgb(7, 7, 7);
				width: max-content;
				color:white
			}
	
			.btn {
				text-align: center;
				margin: 20px;
				
			}
	
	
		</style>
	</head>
	<body>
		<div class="hero">
			<h1>${name}</h1>
		</div>
		<div class="main">
			<div>
				<h2>OBJECTIVE</h2>
				<p>${objectiveHTML}</p>
				<h2>SKILLS</h2>
				<p>${skillsHTML}</p>
				<h2>CONTACT</h2>
				<p>${address} | ${phone} | ${email}</p>
			</div>
			<div>
				<h2>WORK EXPERIENCE</h2>
				${experienceHTML}
				<h2>EDUCATION</h2>
				<div id="myArrayContainer">
				${educationHTML}
				</div>
				
				<h2>PROJECTS</h2>
				<p>${projectsHTML}</p>
			</div>
		</div>
		<div class="btn" id="download">
		<button onclick="downloadPDF()">Download PDF</button>
	  </div>
	
	  <script>
		function downloadPDF() {
			document.getElementById("download").style.display = "none";
		  var element = document.body;
		  html2pdf()
			.from(element)
			.save().then(function(){
				document.getElementById("download").style.display = "block";
			});
			
		}
	  </script>
	</body>
	</html>
	`;

	return html;

}

function generateCV2(name, email, phone, address, educationHTML, experienceHTML, objectiveHTML, skillsHTML, projectsHTML) {
	var html = `
	<!DOCTYPE html>
	<html>
	<head>
	<link href='https://fonts.googleapis.com/css?family=Lato:400,300,700' rel='stylesheet' type='text/css'>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.2/html2pdf.bundle.min.js"></script>
		<title>CV Preview</title>
		<style>
 
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  height: 100%;  
}

body {
  min-height: 100%;  
  background: #eee;
  font-family: 'Lato', sans-serif;
  font-weight: 400;
  color: #222;
  font-size: 14px;
  line-height: 26px;
  padding-bottom: 50px;
}

.container {
  max-width: 700px;   
  background: #fff;
  margin: 0px auto 0px; 
  box-shadow: 1px 1px 2px #DAD7D7;
  border-radius: 3px;  
  padding: 40px;
  margin-top: 50px;
}

.header {
  margin-bottom: 30px;
}

.header .full-name {
  font-size: 40px;
  text-transform: uppercase;
  margin-bottom: 5px;
}

.header .first-name {
  font-weight: 700;
}

.header .last-name {
  font-weight: 300;
}

.header .contact-info {
  margin-bottom: 20px;
}

.header .email,
.header .phone {
  color: #999;
  font-weight: 300;
}

.header .separator {
  height: 10px;
  display: inline-block;
  border-left: 2px solid #999;
  margin: 0px 10px;
}

.header .position {
  font-weight: bold;
  display: inline-block;
  margin-right: 10px;
  text-decoration: underline;
}

.details {
  line-height: 20px;
}

.details .section {
  margin-bottom: 40px;  
}

.details .section:last-of-type {
  margin-bottom: 0px;  
}

.details .section__title {
  letter-spacing: 2px;
  color: #54AFE4;
  font-weight: bold;
  margin-bottom: 10px;
  text-transform: uppercase;
}

.details .section__list-item {
  margin-bottom: 40px;
}

.details .section__list-item:last-of-type {
  margin-bottom: 0;
}

.details .left,
.details .right {
  vertical-align: top;
  display: inline-block;
}

.details .left {
  width: 60%;    
}

.details .right {
  text-align: right;
  width: 39%;    
}

.details .name {
  font-weight: bold;
}

.details a {
  text-decoration: none;
  color: #000;
  font-style: italic;
}

.details a:hover {
  text-decoration: underline;
  color: #000;
}

.details .skills__item {
  margin-bottom: 10px;  
}

.details .skills__item .right input {
  display: none;
}

.details .skills__item .right label {
  display: inline-block;  
  width: 20px;
  height: 20px;
  background: #C3DEF3;
  border-radius: 20px;
  margin-right: 3px;
}

.details .skills__item .right input:checked + label {
  background: #79A9CE;
}


		  		  
		</style>
	</head>
	<body>
	<div class="container">
	  <div class="header">
		<div class="full-name">
		  <span class="first-name">${name}</span> 
		</div>
		<div class="contact-info">
		  <span class="email">Email: </span>
		  <span class="email-val">${email}</span>
		  <span class="separator"></span>
		  <span class="phone">Phone: </span>
		  <span class="phone-val">${phone}</span>
		</div>
	  </div>
	   <div class="details">
		<div class="section">
		  <div class="section__title">Experience</div>
		  <div class="section__list">
			<div class="section__list-item">
			  <div class="left">
				${experienceHTML}
			  </div>
			</div>
		  </div>
		</div>
		<div class="section">
		  <div class="section__title">Education</div>
		  <div class="section__list">
			<div class="section__list-item">
			  <div class="left">
				${educationHTML}
			  </div> 
	  </div>
		 <div class="section">
		  <div class="section__title">Projects</div> 
		   <div class="section__list">
			 <div class="section__list-item">
			  ${projectsHTML}
			 </div>
		   </div>
		</div>
		 <div class="section">
		   <div class="section__title">Skills</div>
		   <div class="skills">
			 <div class="skills__item">
			 ${skillsHTML}
			 </div>
		   </div>
		 <div class="section">
		 <div class="section__title">
		   Objective
		   </div>
		   <div class="section__list">
			 <div class="section__list-item">
					  ${objectiveHTML}
			  </div>
		   </div>
		 </div>
		 </div>
	  </div>
	</div>
	<div class="btn" id="download">
		<button onclick="downloadPDF()">Download PDF</button>
	  </div>
	
	  <script>
		function downloadPDF() {
			document.getElementById("download").style.display = "none";
		  var element = document.body;
		  html2pdf()
			.from(element)
			.save().then(function(){
				document.getElementById("download").style.display = "block";
			});
			
		}
	  </script>
	</body>
	</html>

`;


	return html;

}


function setNavigate(value){
	cv = value;

  window.location.href = "index.html";
}