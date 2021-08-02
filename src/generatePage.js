// create Manager card
const generateManager = manager => {
	return `
	<div class="col-sm-4">
		<div class="card text-white bg-primary mb-5 shadow-lg bg-white-rounded"
			style="max-width: 25rem;">
			<div class="card-header">
				<h4>${manager.name}</h4>
				<h5>Manager</h5>
			</div>

			<div class="card-body">
				<p class="id">ID: ${manager.id}</p>
				<p class="email">Email: <a
					href="mailto: ${manager.email}">${manager.email}</a>
				</p>
				<p class="office-num">Office Number: ${manager.officeNumber}</p>
			</div>
		</div>
	</div>
	`};

// create Engineer card
const generateEngineer = engineer => {
	return `
	<div class="col-sm-4">
		<div class="card text-white bg-success mb-5 shadow-lg bg-white-rounded"
			style="max-width: 25rem;">
			<div class="card-header">
				<h4>${engineer.name}</h4>
				<h5>Engineer</h5>
			</div>

			<div class="card-body">
				<p class="id">ID: ${engineer.id}</p>
				<p class="email">Email: <a href="mailto: ${engineer.email}">
					${engineer.email}</a></p>
				<p class="github">Github: <a
					href="https://www.github.com/${engineer.github}">${engineer.github}</a>
				</p>
			</div>
		</div>
	</div>
	`};

// create Intern card 
const generateIntern = intern => {
	return `
	<div class="col-sm-4">
		<div class="card text-white bg-warning mb-5 shadow-lg bg-white-rounded"
			style="max-width: 25rem;">
			<div class="card-header">
				<h4>${intern.name}</h4>
				<h5>Intern</h5>
			</div>

			<div class="card-body">
				<p class="id">ID: ${intern.id}</p>
				<p class="email">Email: <a
					href="mailto: ${intern.email}">
					${intern.email}</a></p>
				<p class="school">School: ${intern.school}</p>
			</div>
		</div>
	</div>
	`};

// push array to page 
generateHTML = (fullTeam) => {

	// array for cards 
	cardArray = [];

	for (let i = 0; i < fullTeam.length; i++) {
		const teamMember = fullTeam[i];
		const role = teamMember.getRole();


		// call manager function
		if (role === 'Manager') {
			const managerCard = generateManager(teamMember);

			cardArray.push(managerCard);
		}

		// call engineer function
		if (role === 'Engineer') {
			const engineerCard = generateEngineer(teamMember);

			cardArray.push(engineerCard);
		}

		// call intern function 
		if (role === 'Intern') {
			const internCard = generateIntern(teamMember);

			cardArray.push(internCard);
		}

	}

	// joining strings 
	const teamMemberCards = cardArray.join('')

	// return to generated page
	const Team = generateTeamPage(teamMemberCards);
	return Team;

}

// generate html page 
const generateTeamPage = (teamMemberCards) => {
	return `
	<!DOCTYPE html>
	<html lang="en">
	
	<head>
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title>Team Profile Generator</title>
		<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
			crossorigin="anonymous">
		<link rel="stylesheet" href="style.css">
	</head>
	
	<body>
		<header>
			<nav class="navbar fw-" id="navbar">
				<span class="navbar-brand mb-0 h1 w-100 text-center" id="navbar-text">
					<h1>TEAM ORG CHART</h1>
				</span><br>
			</nav>
		</header>
	
		<main>
			<div class="container">
				<div class="row justify-content-center" id="employee-cards">

				<!-- TEAM CARDS BEING BUILT HERE -->
		      ${teamMemberCards}
		  </div>
	      </div>
	  </main>

	<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
	  integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
	  crossorigin="anonymous"></script>
  	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
	  integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
	  crossorigin="anonymous"></script>
  	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
	  integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
	  crossorigin="anonymous"></script>
</body>

</html>
    `};

// export to index
module.exports = generateHTML;
