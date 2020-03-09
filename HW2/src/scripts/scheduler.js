(app => {

    // The "scheduler" is in charge of managing tutor schedules.

    // set properties: id, name, skills and appointments
    class Tutor{
        id;
        name;
        skills;
        appointments;
        constructor(id,name,skills,appointments){
            this.id = id;
            this.name = name;
            this.skills = skills;
            this.appointments = appointments;
        }
    }

    // set properties: tutorId, day, name and notes
    class Appointment {
        tutorId;
        day;
        name;
        notes;
        constructor(tutorId,day,name,notes){
            this.tutorId = tutorId;
            this.day = day;
            this.name = name;
            this.notes = notes;
        }
    }

    app.Tutor = Tutor;
    app.Appointment = Appointment;

    const tutors = [
        new Tutor(1, "John", [".NET", "Angular"]),
        new Tutor(2, "David", ["React", "Node"]),
        new Tutor(3, "Karen", ["Angular", "View"]),
        new Tutor(4, "Janet", ["REST Services", "SQL"]),
        new Tutor(5, "David", [".NET"])
    ];

    let appointments = [
        new Appointment(1, "Monday", "Sally", "I need lots of Angular help!"),
        new Appointment(1, "Tuesday", "James", "I don't need help!"),
        new Appointment(2, "Tuesday", "Tom", "I need help!")
    ];
    
    app.scheduler = {
        getTutors(){return tutors;},
        getTutor(tutorId){return tutors.find(Tutor => Tutor.id === tutorId);},
        getAppointments(){return appointments;},
        getAppointment(tutorId, day){
            var item = appointments.find(Appointment => (Appointment.tutorId === tutorId && Appointment.day === day));
            return item;
        },
        saveAppointment(appt){
            appointments.push(appt); }
    };

    // Add the following methods to app.scheduler....
    // ** getTutors() - returns all tutors
    // ** getTutor(tutorId) - return tutor with given Id
    // ** getAppointments() - return all appointments
    // ** getAppointment(tutorId, day) - return all appointments for given tutor and day
    // ** saveAppointment(appt) - add passed appointment to local variable

})(app || (app = {}));