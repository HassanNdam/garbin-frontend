import React from 'react';
import { Pencil } from 'lucide-react';
import { formatDate } from '@/lib/utils';

type EventCardProps = {
  eventName: string;
  location: string;
  date: string;
  onEdit: (eventId: string) => void;
  eventId?: string;
  isEditable: boolean;
};

const EventCard = ({
  eventName,
  location,
  date,
  onEdit,
  eventId,
  isEditable = false,
}: EventCardProps) => {
  return (
    <div className="bg-gray-100 rounded-lg p-5 flex items-start justify-between max-w-[300px] w-full mt-4 mr-4 mb-4">
      <div className="flex flex-col">
        <h3 className="text-black text-sm">{eventName}</h3>
        <p className="text-xs text-black">
          Le <span className="font-semibold">{formatDate(date, 'fr')}</span>{' '}
        </p>
        <p className="text-xs text-black">
          à <span className="font-semibold">{location}</span>
        </p>
      </div>
      {isEditable && (
        <div className="flex items-start space-x-2">
          <button
            // @ts-ignore: Unreachable code error
            onClick={() => onEdit(eventId)}
            className="text-gray-400 hover:text-gray-600"
            aria-label="Modifier l'événement"
          >
            <Pencil size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default EventCard;
