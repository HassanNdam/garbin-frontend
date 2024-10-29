import CreateOrEditEventPopUp from '@/components/CreateOrEditEventPopUp/CreateOrEditEventPopUp';
import EventCard from '@/components/EventCard/EventCard';
import {
  createUserOutFitPlan,
  getUserOutfitByUuid,
  getUserOutFitPlansByUuid,
  putUserOutFitPlanByUuid,
} from '@/lib/axios';
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import { Value } from 'react-calendar/dist/cjs/shared/types';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { formatDate } from '@/lib/utils';
import { toast } from 'react-toastify';
import {
  OutfitPlanInCommingType,
  OutfitPlanType,
  outfitsWithHistoryType,
} from '@/types';
import GarnmentDetailInOutFit from './GarnmentDetailInOutFit';
import styles from './outfitPlan.module.css';

const OutFitPlan = () => {
  const { id } = useParams();

  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [incommingEvents, setIncommingEvents] = useState<
    OutfitPlanInCommingType[]
  >([]);
  const [newEventDate, setNewEventDate] = useState<Date | string>(new Date());

  const [currentEvent, setCurrentEvent] = useState<OutfitPlanType>({
    name: '',
    date: '',
    location: '',
  });

  const [outfitsWithHistory, setOutfitWithHistory] = useState<
    outfitsWithHistoryType | undefined
  >();

  const getUserOutfitByUuid_ = async (id: string) => {
    const data = await getUserOutfitByUuid(id);
    setOutfitWithHistory(data);
  };

  const getUserOutFitPlansByUuid_ = async (uuid: string) => {
    const data = await getUserOutFitPlansByUuid(uuid);
    setIncommingEvents(data?.incomingPlans);
  };

  const handleEdit = (eventId: string | undefined) => {
    if (eventId) {
      const eventToEdit: OutfitPlanInCommingType | undefined =
        // @ts-ignore: Unreachable code error
        incommingEvents.find((event: OutfitPlanType) => event?.uuid == eventId);
      if (eventToEdit) {
        const eventTopUpdate: OutfitPlanType = {
          name: eventToEdit.eventName,
          date: eventToEdit?.date,
          location: eventToEdit?.location,
          uuid: eventToEdit?.uuid,
        };
        setNewEventDate(eventToEdit?.date);
        setCurrentEvent(eventTopUpdate);
        setIsPopupOpen(true);
      }
    }
  };
  console.log({ outfitsWithHistory });
  const handleSave = async (newEvent: OutfitPlanType) => {
    const dataToSave = {
      name: newEvent.name,
      location: newEvent.location,
      date: formatDate(newEventDate, 'en'),
    };

    if (newEvent?.uuid) {
      const response = await putUserOutFitPlanByUuid(
        newEvent?.uuid,
        dataToSave,
      );
      if (response?.status == 204) {
        toast.success('votre planification a été mis à jour');
        const reintialiseData = {
          name: '',
          date: '',
          location: '',
        };
        setCurrentEvent(reintialiseData);
        setIsPopupOpen(false);
      }
    } else {
      const response = await createUserOutFitPlan(
        outfitsWithHistory?.uuid as string,
        dataToSave,
      );
      if (response?.status === 201) {
        toast.success('votre outfit a été bien planifié');
        const reintialiseData = {
          name: '',
          date: '',
          location: '',
        };
        setCurrentEvent(reintialiseData);
        setIsPopupOpen(false);
      }
    }
  };

  useEffect(() => {
    if (id !== undefined) {
      getUserOutfitByUuid_(id);
      getUserOutFitPlansByUuid_(id);
    }
  }, [id, isPopupOpen]);

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) {
      setNewEventDate(value);
    }
  };

  return (
    <div className="w-full lg:w-4/5 max-w-8xl mx-auto p-12 bg-white rounded-lg shadow-lg my-6">
      <div className="flex items-center mb-6">
        <h1 className="text-3xl font-bold mr-3">{outfitsWithHistory?.name}</h1>
        <Link
          className="px-4 py-2 rounded bg-primary text-white text-lg font-semibold"
          to={`/out-fit-compositor/${outfitsWithHistory?.uuid}`}
        >
          Modifier la tenue
        </Link>
      </div>

      <div className="md:flex  gap-6 ">
        {/* div gauche */}
        <div className="lg:w-2/3 w-full md:w-1/2 ">
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Vêtements (
              {outfitsWithHistory &&
                Object.keys(outfitsWithHistory?.garments).length.toString()}
              )
            </h2>
            <div className="flex flex-wrap gap-8">
              {outfitsWithHistory?.garments && (
                <>
                  {/* <Garment garment={outfitsWithHistory?.garments?.mainTop}/> */}
                  {outfitsWithHistory?.garments?.mainTop && (
                    <GarnmentDetailInOutFit
                      imageUrl={outfitsWithHistory?.garments?.mainTop?.imageUrl}
                      name={outfitsWithHistory?.garments?.mainTop?.name}
                    />
                  )}
                  {outfitsWithHistory?.garments?.subTop && (
                    <GarnmentDetailInOutFit
                      imageUrl={outfitsWithHistory?.garments?.subTop?.imageUrl}
                      name={outfitsWithHistory?.garments?.subTop?.name}
                    />
                  )}
                  {outfitsWithHistory?.garments?.bottom && (
                    <GarnmentDetailInOutFit
                      imageUrl={outfitsWithHistory?.garments?.bottom?.imageUrl}
                      name={outfitsWithHistory?.garments?.bottom?.name}
                    />
                  )}
                  {outfitsWithHistory?.garments?.shoes && (
                    <GarnmentDetailInOutFit
                      imageUrl={outfitsWithHistory?.garments?.shoes?.imageUrl}
                      name={outfitsWithHistory?.garments?.shoes?.name}
                    />
                  )}
                </>
              )}
            </div>
          </div>
          <div className="h-94 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">
              Déjà portée {outfitsWithHistory?.history?.length} fois
            </h2>
            <div className="flex flex-wrap">
              {outfitsWithHistory?.history?.map((event, index) => {
                return (
                  <EventCard
                    eventName={event?.name}
                    location={event?.location}
                    date={event?.date}
                    onEdit={handleEdit}
                    key={index}
                    isEditable={false}
                  />
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4 mt-7">A venir</h2>

            <div className="flex flex-wrap">
              {incommingEvents?.map((event, index) => {
                return (
                  <EventCard
                    eventName={event?.eventName}
                    location={event?.location}
                    date={event?.date}
                    onEdit={handleEdit}
                    key={event.uuid}
                    eventId={event.uuid}
                    isEditable
                  />
                );
              })}
            </div>
          </div>
        </div>
        {/* div gauche */}
        <div className={`${styles.blocCalendar} lg:w-1/3 md:w-1/2 w-full `}>
          <h2 className="text-xl font-semibold mb-4">Détails</h2>
          <div className="h-94 rounded-lg">
            <div className="p-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="col-span-2">
                  <div className="mb-4">
                    <p className="block text-sm font-medium text-gray-700 mb-1">
                      Nom de la tenue
                    </p>
                    <p className="w-full p-2 border rounded-md ">
                      {outfitsWithHistory?.name}
                    </p>
                  </div>
                </div>
              </div>
              {/* <div>
                <Link
                  to={`/out-fit-compositor/${outfitsWithHistory?.uuid}`}
                  className="px-4 py-2  bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Enregistrer
                </Link>
              </div> */}
            </div>
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1 text-center">
                  Date
                </label>
                <div className="flex justify-center">
                  <Calendar
                    value={newEventDate}
                    onChange={handleDateChange}
                    className="border rounded-lg"
                    minDate={new Date()}
                  />
                </div>
              </div>
            </div>
            <CreateOrEditEventPopUp
              isOpen={isPopupOpen}
              onClose={() => setIsPopupOpen(false)}
              onSave={handleSave}
              event={currentEvent}
              setEvent={setCurrentEvent}
              newEventDate={newEventDate}
              onDateChange={handleDateChange}
            />
            <button
              onClick={() => setIsPopupOpen(true)}
              className="px-4 py-2 rounded bg-primary text-white text-lg font-semibold mt-5 block ml-auto"
            >
              Planifier cette tenue
            </button>
          </div>
        </div>
      </div>
      <div className="text-right mt-3">
        <button
          onClick={() => setIsPopupOpen(true)}
          className="px-4 py-2 rounded bg-primary text-white text-lg font-semibold"
        >
          Partager
        </button>
      </div>
    </div>
  );
};

export default OutFitPlan;
