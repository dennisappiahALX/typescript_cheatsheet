import React, { useEffect, useState } from 'react';
import './App.css';
import ReminderList from './components/ReminderList';
import Reminder from './models/Reminder';
import ReminderService from './services/reminder'
import NewReminder from './components/NewReminder';


function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
   
  ])
 
  useEffect(() => {loadReminders()}, []);

  const loadReminders = async () => {
    const reminders = await ReminderService.getReminders();
    setReminders(reminders);
  }

  const addReminder = async(title: string) => {
    const newReminder = await ReminderService.addReminders(title);
    setReminders([newReminder, ...reminders])
  }

  const removeReminder = (id: number) =>  {
    setReminders(reminders.filter(reminder => reminder.id !== id))
  }
  

  return (
    <div className="App">
      <NewReminder onAddReminder={ addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder}/>
    </div>
  );
}

export default App;


// function App() {
//   const [reminders, setReminders] = useState<Reminder[]>([
//     {id: 1, title: 'Reminder 1'}
//   ])
 
  
//   return (
//     <div className="App">
//       <ReminderList items={reminders}/>
//     </div>
//   );
// }