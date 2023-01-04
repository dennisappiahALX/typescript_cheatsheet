// rsf
import React from 'react';
import Reminder from '../models/Reminder';

// ReminderList is only responsible for rendering reminders, so 
// functionality for handling the event is done in the in the compnent with the state which App
// list of reminders
interface ReminderListProps {
    items : Reminder[]
    onRemoveReminder: (id: number) => void
}

function ReminderList({items, onRemoveReminder}: ReminderListProps):JSX.Element {
    return (
        <ul className='list-group'>
            {items.map( item => <li className='list-group-item' key={item.id}>
                {item.title}
                <button onClick={()=> onRemoveReminder(item.id)} className="btn btn-outline-danger mx-2 rounded-pill">Delete</button>
            </li>)}
        </ul>
    );
}

export default ReminderList;