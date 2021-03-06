// Write your package code here!

var blacklist = [
	"404",
	"account",
	"accounts",
	"admin",
	"admins",
	"administrator",
	"administrators",
	"billing",
	"block",
	"blog",
	"bot",
	"bots",
	"bug",
	"bugs",
	"calendar",
	"careers",
	"chat",
	"checkuser",
	"client",
	"clients",
	"comment",
	"comments",
	"contract",
	"contracts",
	"create",
	"customer",
	"customers",
	"customersupport",
	"dev",
	"development",
	"download",
	"downloads",
	"ecommerce",
	"enquiries",
	"error",
	"errors",
	"event",
	"events",
	"faq",
	"feedback",
	"flock",
	"form",
	"forms",
	"forum",
	"github",
	"help",
	"herd",
	"home",
	"info",
	"internal",
	"invoice",
	"invoices",
	"issue",
	"issues",
	"job",
	"jobs",
	"log",
	"mail",
	"manual",
	"new",
	"news",
	"office",
	"press",
	"print",
	"recruit",
	"script",
	"scripts",
	"service",
	"services",
	"shepherd",
	"shepherdess",
	"staff",
	"staging",
	"support",
	"sysop",
	"team",
	"training",
	"trainings",
	"troll",
	"version",
	"video",
	"videos",
	"webmail",
	"wiki",
	"test",
	"testing",
	"tester",
	"beta",
	"mobile",
	"list",
	"site",
	"friend",
	"member"
];

Accounts.onCreateUser(function(options, user) {
  
	if(user.username && blacklist.indexOf(user.username) >= 0) throw new Meteor.Error(500, 'Username not allowed', 'The username you have chosen cannot be registered on this website');

	return user;
});