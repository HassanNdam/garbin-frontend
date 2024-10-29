import React, { useState } from 'react';
import { X, MapPin } from 'lucide-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { OutfitPlanType } from '@/types';

type CreateOrEditEventPopUpProps = {
  isOpen: boolean;
  onClose: () => void;
  onSave: (event: OutfitPlanType) => Promise<void>;
  event: OutfitPlanType;
  setEvent: (event: OutfitPlanType) => void;
  newEventDate: Date | string;
  onDateChange: (date: Date | null) => void;
};
const CreateOrEditEventPopUp = ({
  isOpen,
  onClose,
  onSave,
  event,
  setEvent,
  newEventDate,
  onDateChange,
}: CreateOrEditEventPopUpProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    // @ts-ignore: Unreachable code error
    setEvent((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (date: Date) => {
    onDateChange(date);
    // @ts-ignore: Unreachable code error
    setEvent((prev) => ({ ...prev, date: date.toISOString().split('T')[0] }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await onSave(event);
  };

  if (!isOpen) return null;
  const eventName = event.name;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full">
        <button
          onClick={onClose}
          className="text-gray-500 hover:text-gray-700 block ml-auto p-4"
        >
          <X size={24} />
        </button>

        <h2 className="text-xl font-semibold text-center">
          {event.uuid ? `Modifier  ${eventName}` : 'Créer un événement'}
        </h2>

        <form onSubmit={handleSubmit} className="p-4">
          {/* div gauche */}
          <div className=" flex gap-4">
            <div className="col-span-2 w-1/2 ">
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Titre de l'événement
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={event.name}
                  onChange={handleChange}
                  className="w-full p-2 border rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="location"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Lieu
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="location"
                    name="location"
                    value={event.location}
                    onChange={handleChange}
                    className="w-full p-2 border rounded-md pl-8"
                    required
                  />
                  <MapPin
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={20}
                  />
                </div>
              </div>
              <div className="flex mt-8">
                <button
                  type="submit"
                  className="px-4 py-2  bg-primary text-white rounded hover:bg-red-600 transition-colors "
                >
                  Enregistrer
                </button>
              </div>
            </div>
            {/* div droite */}
            <div className="w-1/2 pl-7">
              <label className="block text-sm font-medium text-gray-700 mb-3 ">
                Date
              </label>
              <Calendar
                value={newEventDate}
                // @ts-ignore: Unreachable code error
                onChange={handleDateChange}
                className="border rounded-lg"
                minDate={new Date()}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateOrEditEventPopUp;
