(app => {

    let selected;

    // Add the following methods to app.appointmentView....
    // ** load(tutorId, day)
    //      - store tutorId and day on selected variable above 
    //      - load appointmentView using app._changeView 
    // ** save()
    //      - select DOM elements for name (input) and notes (textarea)
    //      - create new Appointment using values on selected variables and the form values submitted 
    //      - pass appointment to app.scheduler.saveAppointment
    //      - clear the two form element values
    //      - navigate back to calendar using app.calendarView.load with the selected tutorId
    app.appointmentView = {
        load(tutorId, day) {
            selected = [tutorId,day];
            app._changeView("appointmentView"); 
        },
        save(){
            var newname = document.getElementById("name").value;
            var newnote = document.getElementById("note").value;
            var newappoint = new app.Appointment(selected[0], selected[1], newname, newnote);
            app.scheduler.saveAppointment(newappoint);
            app.calendarView.load(selected[0]);
        }
    };

})(app || (app = {}));