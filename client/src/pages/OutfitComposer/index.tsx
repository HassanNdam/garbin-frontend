import React, { useEffect, useReducer, useState } from 'react';
import ClothingSearch from './components/SearchGarnment';
import {
  Categories,
  CategoryLabelEnum,
  CategoryLabelType,
  GarnmentAPI,
  Garnment,
} from '@/types';
import NoGarmentSelected from './NoGarmentSelected';
import { DisplayButtonCategory } from './components/DisplayButtonCategory/DisplayButtonCategory';
import {
  OutfitComposeDispatchContext,
  OutfitComposerStateContext,
  useComposerReducer,
} from './OutfitComposer.state';
import { getALLGraments, saveMyOutFit } from '@/lib/axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
type OutfitComposited = {
  MAIN_TOP?: { uuid: string };
  SUB_TOP?: { uuid: string };
  BOTTOM?: { uuid: string };
  SHOES?: { uuid: string };
};

const OutfitComposer = () => {
  const [composerState, composerDispatch] = useComposerReducer();
  const [error, setError] = useState<string | null>(null);

  const checkOutfitToSave = (
    outfitName: string,
    outfitWithOutName: OutfitComposited,
  ) => {
    // Condition: Il doit y avoir au moins un MAIN_TOP ou un SUB_TOP
    if (
      !outfitWithOutName?.MAIN_TOP?.uuid &&
      !outfitWithOutName?.SUB_TOP?.uuid
    ) {
      setError(
        "Vous devez avoir au moins un MAIN_TOP ou SUB_TOP pour sauvegarder l'outfit.",
      );
      return false;
    }

    // Condition: Les chaussures sont obligatoires
    else if (!outfitWithOutName?.SHOES?.uuid) {
      setError("Les chaussures  sont obligatoires pour sauvegarder l'outfit.");
      return false;
    }

    // Condition: Si un SUB_TOP est présent, il doit y avoir un BOTTOM et des SHOES
    else if (
      outfitWithOutName?.SUB_TOP?.uuid &&
      (!outfitWithOutName?.BOTTOM?.uuid || !outfitWithOutName?.SHOES?.uuid)
    ) {
      setError(
        'Pour un haut, vous devez aussi avoir un dessous et des chaussures.',
      );
      return false;
    }

    // Condition: Ne peut pas avoir uniquement MAIN_TOP, BOTTOM et SHOES sans SUB_TOP
    else if (
      outfitWithOutName?.MAIN_TOP?.uuid &&
      outfitWithOutName?.BOTTOM?.uuid &&
      outfitWithOutName?.SHOES?.uuid &&
      !outfitWithOutName?.SUB_TOP?.uuid
    ) {
      setError(
        'Vous ne pouvez pas avoir uniquement un haut principal, un bas, et une chaussure sans un autre haut sous le haut principal.',
      );
      return false;
    } else if (!outfitName) {
      setError('ça serait sympa si vous lui attribuez un petit nom !');
      return false;
    }
    // tout se passe bien on repasse error à null
    setError(null);
    return true;
  };

  const [outfitName, setOutfitName] = useState('');
  const [allGarment, setAllGarment] = useState<any>([]);
  const navigate = useNavigate();
  const onSave = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    //composite my outfit for api
    const dataToSave = {
      name: outfitName,
      mainTopUuid: composerState?.MAIN_TOP?.uuid,
      subTopUuid: composerState?.SUB_TOP?.uuid,
      shoesUuid: composerState?.SHOES?.uuid,
      bottomUuid: composerState?.BOTTOM?.uuid,
    };
    // check potential combinaison before save
    if (checkOutfitToSave(outfitName, composerState)) {
      const response = await saveMyOutFit(dataToSave);
      if (response?.status === 201) {
        toast.success('votre tenue a été créé avec succès');
        navigate('/my-outfits');
      }
    }

    // composerState : toutes les dats sont là
  };
  console.log({ composerState });
  const groupByCategory = (allGarments: GarnmentAPI[]) => {
    const data: Record<CategoryLabelType, GarnmentAPI[]> = {
      MAIN_TOP: [],
      SHOES: [],
      SUB_TOP: [],
      BOTTOM: [],
    };

    allGarments.forEach((garment) => {
      const category = garment.categoryLabel as CategoryLabelType;
      if (data[category]) {
        data[category].push(garment);
      }
    });

    return data;
  };

  const getAllGarments = async () => {
    // const response = await get
    const response = await getALLGraments();
    setAllGarment(groupByCategory(response?.data?.garments));
  };
  useEffect(() => {
    getAllGarments();
  }, []);

  const isOutfitComplete = false;
  const selectedBottom = false;
  return (
    <OutfitComposerStateContext.Provider value={composerState}>
      <OutfitComposeDispatchContext.Provider value={composerDispatch}>
        <div
          style={{
            width: '60%',
          }}
          className="mx-auto flex flex-col item-center  p-6 rounded-lg max-w-114 w-fit"
        >
          <div className="flex justify-center mb-6  p-5 w-full">
            <div className="pr-4 space-y-4">
              <DisplayButtonCategory
                items={allGarment[CategoryLabelEnum.MAIN_TOP]}
                categoryLabel={'MAIN_TOP'}
                label="HAUT N°1"
              />

              <DisplayButtonCategory
                items={allGarment[CategoryLabelEnum.SUB_TOP]}
                categoryLabel={'SUB_TOP'}
                label="HAUT N°2"
              />
              <DisplayButtonCategory
                items={allGarment[CategoryLabelEnum.BOTTOM]}
                categoryLabel={'BOTTOM'}
                label="BAS"
              />
              <DisplayButtonCategory
                items={allGarment[CategoryLabelEnum.SHOES]}
                categoryLabel={'SHOES'}
                label="CHAUSSURE"
              />
            </div>

            <div className="bg-white rounded-lg flex items-start justify-center p-4 min-w-[450px]">
              {composerState.selectedCategoryLabel !== undefined ? (
                <>
                  <ClothingSearch
                    items={
                      allGarment[
                        composerState.selectedCategoryLabel
                      ] as unknown as GarnmentAPI[]
                    }
                    categoryLabel={composerState.selectedCategoryLabel}
                  />
                </>
              ) : (
                <div className="flex justify-center w-full h-full items-center">
                  <NoGarmentSelected />
                </div>
              )}
            </div>
          </div>

          <form
            className="flex items-center justify-center mx-auto mb-4 min-w-[600px] gap-3"
            onSubmit={onSave}
          >
            <input
              type="text"
              placeholder="Été détente"
              className="flex-grow border rounded-l py-2 px-4 focus:outline-none focus:ring-2 focus:ring-pink-300"
              onChange={(e) => setOutfitName(e.target.value)}
            />
            <button
              className={`py-2 px-6 rounded-r text-white bg-primary hover:bg-red-600`}
              // disabled={!isOutfitComplete}
            >
              Enregistrer
            </button>
          </form>
          {/* TODO : avoir un composant à qui on lui passe une pour qu'elle l'affiche */}
          {error && (
            <p className="text-primary text-sm text-center">
              {error?.toString()}
            </p>
          )}
        </div>
      </OutfitComposeDispatchContext.Provider>
    </OutfitComposerStateContext.Provider>
  );
};

export default OutfitComposer;
