import { events } from '../../lib/utils';

const today = new Date();
const day = today.getDate();
const month = today.toLocaleString('pt-BR', { month: 'long' }).toUpperCase();
const year = today.getFullYear();
const formattedDate = `${day} DE ${month} DE ${year}`;

const event = events[day] || { title: '', description: '' };

const EventDescription = () => (
    <div className="text-left">
        <div className="text-sm text-gray-500 mb-1">
            {formattedDate}
        </div>
        <h1 className="font-bold text-2xl mb-2">
            {event.title}
        </h1>
        <p className="text-base m-0">
            {event.description}
        </p>
    </div>
);

export default EventDescription;