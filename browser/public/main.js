var app = angular.module('Craylist', []);
app.controller('HomeController', function ($scope) {
	$scope.portfolio = [{ name: 'Jamurai', href: 'http://www.jamurai.io/', description: "A real-time, collaborative playlist app for crowdsourcing music selection at parties." }, { name: 'Morning Pages', href: 'http://www.morningpages.io/', description: "A simple daily journaling app." }, { name: '90sBay', href: 'http://so90sbay.herokuapp.com/', description: "An Amazon clone that only sells the dopest 90s nostalgia." }, { name: 'EverKindle', href: 'https://github.com/nmadd/ever-kindle', description: "A web scraper that transforms your Kindle highlights into Evernotes." }, { name: 'FratMusic', href: 'http://www.fratmusic.com/', description: "A playlist based streaming music app for college students." }, { name: 'No Color No Sound', href: 'http://nocolornosound.com/', description: "A curated selection of high quality new music." }];

	$scope.socialProfiles = [{ name: 'Linkedin', icon: 'http://image005.flaticon.com/28/svg/34/34227.svg', href: "https://www.linkedin.com/in/natemaddrey" }, { name: 'Github', icon: 'http://image005.flaticon.com/23/svg/23/23957.svg', href: "https://www.github.com/nmadd" }, { name: 'ncmaddrey@gmail.com', icon: "http://image005.flaticon.com/1/svg/20/20061.svg", href: "mailto:ncmaddrey@gmail.com" }];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsImhvbWUvaG9tZS1jb250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQUEsTUFBQSxRQUFBLE1BQUEsQ0FBQSxVQUFBLEVBQUEsRUFBQSxDQUFBO0FDQUEsSUFBQSxVQUFBLENBQUEsZ0JBQUEsRUFBQSxVQUFBLE1BQUEsRUFBQTtBQUNBLFFBQUEsU0FBQSxHQUFBLENBQ0EsRUFBQSxNQUFBLFNBQUEsRUFBQSxNQUFBLHdCQUFBLEVBQUEsYUFBQSx1RkFBQSxFQURBLEVBRUEsRUFBQSxNQUFBLGVBQUEsRUFBQSxNQUFBLDZCQUFBLEVBQUEsYUFBQSxnQ0FBQSxFQUZBLEVBR0EsRUFBQSxNQUFBLFFBQUEsRUFBQSxNQUFBLGdDQUFBLEVBQUEsYUFBQSwyREFBQSxFQUhBLEVBSUEsRUFBQSxNQUFBLFlBQUEsRUFBQSxNQUFBLHNDQUFBLEVBQUEsYUFBQSxzRUFBQSxFQUpBLEVBS0EsRUFBQSxNQUFBLFdBQUEsRUFBQSxNQUFBLDJCQUFBLEVBQUEsYUFBQSw0REFBQSxFQUxBLEVBTUEsRUFBQSxNQUFBLG1CQUFBLEVBQUEsTUFBQSw0QkFBQSxFQUFBLGFBQUEsZ0RBQUEsRUFOQSxDQUFBLENBREE7O0FBVUEsUUFBQSxjQUFBLEdBQUEsQ0FDQSxFQUFBLE1BQUEsVUFBQSxFQUFBLE1BQUEsa0RBQUEsRUFBQSxNQUFBLHlDQUFBLEVBREEsRUFFQSxFQUFBLE1BQUEsUUFBQSxFQUFBLE1BQUEsa0RBQUEsRUFBQSxNQUFBLDhCQUFBLEVBRkEsRUFHQSxFQUFBLE1BQUEscUJBQUEsRUFBQSxNQUFBLGlEQUFBLEVBQUEsTUFBQSw0QkFBQSxFQUhBLENBQUEsQ0FWQTtDQUFBLENBQUEiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnQ3JheWxpc3QnLCBbXSk7IiwiYXBwLmNvbnRyb2xsZXIoJ0hvbWVDb250cm9sbGVyJywgZnVuY3Rpb24oJHNjb3BlKXtcblx0JHNjb3BlLnBvcnRmb2xpbyA9IFtcblx0e25hbWU6ICdKYW11cmFpJywgaHJlZjogJ2h0dHA6Ly93d3cuamFtdXJhaS5pby8nLCBkZXNjcmlwdGlvbjogXCJBIHJlYWwtdGltZSwgY29sbGFib3JhdGl2ZSBwbGF5bGlzdCBhcHAgZm9yIGNyb3dkc291cmNpbmcgbXVzaWMgc2VsZWN0aW9uIGF0IHBhcnRpZXMuXCJ9LFxuXHR7bmFtZTogJ01vcm5pbmcgUGFnZXMnLCBocmVmOiAnaHR0cDovL3d3dy5tb3JuaW5ncGFnZXMuaW8vJywgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgZGFpbHkgam91cm5hbGluZyBhcHAuXCJ9LFxuXHR7bmFtZTogJzkwc0JheScsIGhyZWY6ICdodHRwOi8vc285MHNiYXkuaGVyb2t1YXBwLmNvbS8nLCBkZXNjcmlwdGlvbjogXCJBbiBBbWF6b24gY2xvbmUgdGhhdCBvbmx5IHNlbGxzIHRoZSBkb3Blc3QgOTBzIG5vc3RhbGdpYS5cIn0sXG5cdHtuYW1lOiAnRXZlcktpbmRsZScsIGhyZWY6ICdodHRwczovL2dpdGh1Yi5jb20vbm1hZGQvZXZlci1raW5kbGUnLCBkZXNjcmlwdGlvbjogXCJBIHdlYiBzY3JhcGVyIHRoYXQgdHJhbnNmb3JtcyB5b3VyIEtpbmRsZSBoaWdobGlnaHRzIGludG8gRXZlcm5vdGVzLlwifSxcblx0e25hbWU6ICdGcmF0TXVzaWMnLCBocmVmOiAnaHR0cDovL3d3dy5mcmF0bXVzaWMuY29tLycsIGRlc2NyaXB0aW9uOiBcIkEgcGxheWxpc3QgYmFzZWQgc3RyZWFtaW5nIG11c2ljIGFwcCBmb3IgY29sbGVnZSBzdHVkZW50cy5cIn0sXG5cdHtuYW1lOiAnTm8gQ29sb3IgTm8gU291bmQnLCBocmVmOiAnaHR0cDovL25vY29sb3Jub3NvdW5kLmNvbS8nLCBkZXNjcmlwdGlvbjogXCJBIGN1cmF0ZWQgc2VsZWN0aW9uIG9mIGhpZ2ggcXVhbGl0eSBuZXcgbXVzaWMuXCJ9XG5cdF07XG5cblx0JHNjb3BlLnNvY2lhbFByb2ZpbGVzID0gW1xuXHRcdHtuYW1lOiAnTGlua2VkaW4nLCBpY29uOiAnaHR0cDovL2ltYWdlMDA1LmZsYXRpY29uLmNvbS8yOC9zdmcvMzQvMzQyMjcuc3ZnJywgaHJlZjogXCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vbmF0ZW1hZGRyZXlcIn0sXG5cdFx0e25hbWU6ICdHaXRodWInLCBpY29uOiAnaHR0cDovL2ltYWdlMDA1LmZsYXRpY29uLmNvbS8yMy9zdmcvMjMvMjM5NTcuc3ZnJywgaHJlZjogXCJodHRwczovL3d3dy5naXRodWIuY29tL25tYWRkXCJ9LFxuXHRcdHtuYW1lOiAnbmNtYWRkcmV5QGdtYWlsLmNvbScsIGljb246IFwiaHR0cDovL2ltYWdlMDA1LmZsYXRpY29uLmNvbS8xL3N2Zy8yMC8yMDA2MS5zdmdcIiwgaHJlZjogXCJtYWlsdG86bmNtYWRkcmV5QGdtYWlsLmNvbVwifVxuXG5cdF1cbn0pIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
