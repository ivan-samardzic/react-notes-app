import React, { createContext } from 'react'

const NoteContext = createContext({
    notes: [
        {
          id: 1,
          title : "Important Dentist Appointment",
          text : "Go to the dentist and check if there are any changes in the dental saliva after removing the braces, don't forget to pay the last installment for the braces. Ask for another dental gums pack. ",
          date : "2 Jun"
        },
        {
          id: 2,
          title : "Parent Meeting At School",
          text : "Meeting on the topic of the excursion for Mihael, presentation of the trip, presentation of the excursion payment plan and awarding of commendations for this school year.",
          date : "4 Jun"
        },
        {
          id: 3,
          title : "Going Out With Friends",
          text : "Have a good time and when you come home, be sure to kiss her. Enjoy in the time with the friends, help them meet some girls. Joke about girls, sport and alcohol, you know you will talk about politics at the end.",
          date : "5 Jun"
        }
      ],
      addNote: note => {},
      deleteNote: deletedNote => {}
  });

  export default NoteContext;