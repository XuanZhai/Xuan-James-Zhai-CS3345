(app => {

    const days = ["Monday", "Tuesday", "Wednesday", "Thursday"];

    // Add the following method to app.calendarView....
    // ** load(tutorId)
    //      - load tutor from app.scheduler using tutorId 
    //      - select h2 tag and set it's text to 'Schedule for [[Tutor Name]]'
    //      - select table body from html
    //      - iteral through days collection (above)
    //            for each day:
    //              - get appointment (if there is one) from app.scheduler using tutor.id and day
    //              - select td from DOM (day should be the ID)
    //              - if appt exists, bind name and notes to td's innerHTML
    //                  - else add 'Book Appointment' button to td that call app.appointmentView.load() (with tutorId and day)
    //      - invoke app._changeView to show calendarView
    app.calendarView = {
        load(tutorId){
            var tutor = app.scheduler.getTutor(tutorId);
            var h2tag = document.getElementById("calendarhead");
            days.forEach(day => {
                h2tag.innerHTML = "SCHEDULE FOR " + tutor.name.toUpperCase();
                var Gappointment = app.scheduler.getAppointment(tutorId,day);
                var tdd = document.getElementById(day);
                if(Gappointment !== undefined){
                    tdd.innerHTML = ` <ul id = "nameul"><li>${Gappointment.name}</li><li">${Gappointment.notes}</li><ul>`;
                }
                else{
                    tdd.innerHTML = "";
                    var newbutton = document.createElement("BUTTON");
                    var textonbutton = document.createTextNode("Book Appointment");
                    newbutton.appendChild(textonbutton);
                    newbutton.setAttribute("id","movetoappointment");
                    newbutton.onclick = () => {app.appointmentView.load(tutorId,day)};
                    tdd.appendChild(newbutton);
                }
            });
            app._changeView("calendarView");
        }
    };

})(app || (app = {}));