// MOCK DATABASE
var skillsDb = [    
    {
		skill: "Blockchain Technology",
        start: "17.11.2017",		
        end: "Current",
        years: "1.5"

    },
    {
		skill: "Solodity",
        start: "17.11.2017",		
        end: "Current",
        years: "1.5"

    },
    {
		skill: "Node.js",
        start: "17.11.2017",		
        end: "Current",
        years: "1.5"

    },
    {
        skill: "JavaScript",
        start: "17.11.2017",		
        end: "Current",
        years: "1.5"
	},
    {
        skill: "React.js",
        start: "10.08.2018",		
        end: "Current",
        years: "0.6"
        
        // get start() {
        //     var start = new Date('02/03/2016');
        //     return start;
        // },
		// // start: new Date('02/03/2018'),		
        // end: new Date('02/01/2019'),	
        // get years() {
        //     var timeDiff = Math.abs(this.end.getTime() - this.start.getTime());
        //     var days =  Math.ceil(timeDiff / (1000 * 3600 * 24));              
        //     return days/30;
            
        // }
	},
	{
		skill: "Express.js",
        start: "10.08.2018",		
        end: "Current",
        years: "0.6"

    },
    {
        skill: "Jenkins",
        start: "12.01.2014",		
        end: "10.11.2017",
        years: "3.9"
	},{
        skill: "AWS",
        start: "12.01.2014",		
        end: "10.11.2017",
        years: "3.9"
    },
    {
        skill: "Git/Github",
        start: "12.01.2014",		
        end: "10.11.2017",
        years: "3.9"
    },
    {
        skill: "Docker",
        start: "12.01.2016",		
        end: "10.11.2016",
        years: "0.9"
	},

];

var mainDiv = document.getElementById("skills");

skillsDb.forEach(skill => {

    var div = document.createElement('div');

    var span = document.createElement('span');    
    div.appendChild(span);
    var bold = document.createElement('strong');
    bold.innerHTML = skill.skill;
    span.appendChild(bold);

    var span2 = document.createElement('span');
    div.appendChild(span2);
    span2.innerHTML = " (" + skill.start + " - " + skill.end + ")";

    mainDiv.appendChild(div);

    // var row = document.createElement('div');
    // row.className = 'row';
    // mainDiv.appendChild(row);

    // var description = document.createElement('div');
    // description.className = 'col-md-4 col-xs-7';
    // description.innerHTML = skill.skill;
    // row.appendChild(description);

    // var start = document.createElement('div');
    // start.className = 'col-md-3 col-xs-5';
    // start.innerHTML = skill.start;
    // row.appendChild(start);

    // var end = document.createElement('div');
    // end.className = 'col-md-3 col-xs-4';
    // end.innerHTML = skill.end;
    // row.appendChild(end);

    // var years = document.createElement('div');
    // years.className = 'col-md-2 col-xs-4';
    // years.innerHTML = skill.years;
    // row.appendChild(years);
});

// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}




