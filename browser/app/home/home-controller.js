app.controller('HomeController', function($scope){
	$scope.portfolio = [
	{name: 'Jamurai', href: 'http://www.jamurai.io/', description: "A real-time, collaborative playlist app for crowdsourcing music selection at parties."},
	{name: 'Morning Pages', href: 'http://www.morningpages.io/', description: "A simple daily journaling app."},
	{name: '90sBay', href: 'http://so90sbay.herokuapp.com/', description: "An Amazon clone that only sells the dopest 90s nostalgia."},
	{name: 'EverKindle', href: 'https://github.com/nmadd/ever-kindle', description: "A web scraper that transforms your Kindle highlights into Evernotes."},
	{name: 'FratMusic', href: 'http://www.fratmusic.com/', description: "A playlist based streaming music app for college students."},
	{name: 'No Color No Sound', href: 'http://nocolornosound.com/', description: "A curated selection of high quality new music."}
	];

	$scope.socialProfiles = [
		{name: 'Linkedin', icon: 'http://image005.flaticon.com/28/svg/34/34227.svg', href: "https://www.linkedin.com/in/natemaddrey"},
		{name: 'Github', icon: 'http://image005.flaticon.com/23/svg/23/23957.svg', href: "https://www.github.com/nmadd"},
		{name: 'ncmaddrey@gmail.com', icon: "http://image005.flaticon.com/1/svg/20/20061.svg", href: "mailto:ncmaddrey@gmail.com"}

	]
})