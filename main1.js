/* Codes used to add typewriter effect on the three paragraphs by using typeIt plugin -Gowtham K */
function Utils() {

}

Utils.prototype = {
    constructor: Utils,
    isElementInView: function (element, fullyInView) {
        var pageTop = $(window).scrollTop();
        var pageBottom = pageTop + $(window).height();
        var elementTop = $(element).offset().top;
        var elementBottom = elementTop + $(element).height();

        if (fullyInView === true) {
            return ((pageTop < elementTop) && (pageBottom > elementBottom));
        } else {
            return ((elementTop <= pageBottom) && (elementBottom >= pageTop));
        }
    }
};
var Utils = new Utils();
var p1 = true;
var p2 = true;
var p3 = true;
$(window).scroll(function(){
var isElementInView = Utils.isElementInView($('#example1'), true);

if (isElementInView && p1) {
    new TypeIt('#example1', {
        strings: "SSN Institutions, founded by Dr. Shiv Nadar, Chairman, HCL Technologies, stands out as a premier center of higher learning with a mission of pursuing excellence in education and research. The institutions, with their diverse and dynamic community of students offer a distinctive combination of some of the finest graduate, undergraduate and research programs, accomplished faculty, world class facilities and a residential campus set on a sprawling 250 acres of sylvan surroundings.",
        speed: 50,
        autoStart: false
      });
    p1 = false;
} 
var isElementInView = Utils.isElementInView($('#p2'), true);

if (isElementInView && p2) {
    new TypeIt('#p2', {
        strings: "The Department of Information Technology was established in the year 1999. Our Mission is to provide quality education to the students and impart IT excellence in them. Apart from making them good technocrats, we also provide individual attention to make them good citizens of our nation to serve the industry and society constructively.",
        speed: 50,
        autoStart: false
      });
    p2 = false;
} 
var isElementInView = Utils.isElementInView($('#p3'), true);

if (isElementInView && p3) {
    new TypeIt('#p3', {
        strings: "The IEEE Student Branch of SSN College of Engineering was established in the year 1998. The objective of SSN IEEE Student Branch is to create awareness about latest technological developments, to make them to utilize the resources available in IEEE and to involve student members in publishing research papers and projects through IEEE.  It has organized many events to provide outstanding value to its members.",
        speed: 50,
        autoStart: false
      });
    p3 = false;
} 
});
/* TypeWriter effect code ends here -Gowtham K */



