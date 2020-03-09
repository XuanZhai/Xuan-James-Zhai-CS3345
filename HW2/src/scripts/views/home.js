(app => {

    var isLoaded;
    // Add the following method to app.calendarView....
    // ** load()
    //      - if !isLoaded
    //            - get list of tutors from app.scheduler
    //            - select profiles container from html
    //            - select profiles template from html
    //            - iterate through tutors
    //                  for each tutur:
    //                  - create clone of profile template's content
    //                      - hint: let newNode = profileTemplate.content.cloneNode(true);
    //                  - select and populate clone's h2 element with tutor's name
    //                  - select and populate clone's p element with tutor's skills array
    //                      - hint: tutor.skills.map(x => `<span>${x}</span>`).join('')
    //                          - (individual spans allow for styling) 
    //                  - select clone's button element and bind click event to app.calendarView.load() (passing tutorId)
    //                  - append clone to profiles container
    //            - set isLoaded to true so the const list does not have to be loaded again 
    //      - invoke app._changeView to show homeView (regardless of isLoaded status)

    app.homeView = {
        load(){
            if(!isLoaded){
                var tutorlist = app.scheduler.getTutors();
                var profilecontainer = document.getElementById("profilecardscontainer");
                var profileTemplate = document.getElementById("profilecardstemplate");  
                tutorlist.forEach(tutor => {
                    let newNode = profileTemplate.content.cloneNode(true);
                    var carp = newNode.querySelector("p");
                    var carh2 = newNode.querySelector("h2");
                    var carbu = newNode.querySelector("button");
                    carh2.innerHTML = tutor.name;
                    carp.innerHTML = tutor.skills.map(x => `<span id = "seperate">${x}</span>`).join(" ");
                    carbu.onclick = () => {
                        app.calendarView.load(tutor.id);       
                    }
                    profilecontainer.appendChild(newNode);
                });
                isLoaded = true;
            }
            app._changeView("homeView");         
        }
    }

})(app || (app = {}));