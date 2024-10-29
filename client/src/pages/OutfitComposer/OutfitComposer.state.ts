import { Categories, GarnmentAPI } from '@/types';
import React, { useContext, useReducer } from 'react';

type OutfitComposerGarnments = {
  [key in Categories['categoryLabel']]?: GarnmentAPI;
};

type OutfitComposerState = {
  name?: string;
  selectedCategoryLabel?: Categories['categoryLabel'];
} & OutfitComposerGarnments;

const intialComposerState = {};
export const OutfitComposerStateContext =
  React.createContext<OutfitComposerState>(intialComposerState);
type OutfitComposerDispatch = React.Dispatch<OutfitComposerActions>;
type OutfitComposerActions =
  | {
      type: 'SELECT_GARNMENT';
      payload: {
        categoryLabel: keyof OutfitComposerGarnments;
        garnment: GarnmentAPI;
      };
    }
  | {
      type: 'DESELECT_GARNMENT';
      payload:{
        categoryLabel: keyof OutfitComposerGarnments;
      }
    }
  | {
      type: 'SET_NAME';
      payload:{
        name:string;
      }
    };
export const OutfitComposeDispatchContext =
  React.createContext<OutfitComposerDispatch | null>(null);

const composerReducers = (
  state: OutfitComposerState,
  action: OutfitComposerActions,
) => {
  switch (action.type) {
    case 'SELECT_GARNMENT':
      return {
        ...state,
        selectedCategoryLabel: action.payload.categoryLabel,
        [action.payload.categoryLabel]: action.payload.garnment,
      };
    case 'DESELECT_GARNMENT':
      console.log({action})
      return {
        ...state,
        selectedCategoryLabel:undefined,
        [action.payload.categoryLabel]:undefined
        
        
      }
      // return state;
    case 'SET_NAME':
      console.log({action})
      return {
        ...state,
        name:action.payload.name
      };
      default:
      return state;
  }
};

export const useComposerReducer = () => {
  return useReducer(composerReducers, intialComposerState);
};

export const useComposerState = () => {
  return useContext(OutfitComposerStateContext);
};

export const useComposerDispatch = () => {
  return useContext(OutfitComposeDispatchContext);
};

export const selectCategoryGarnments =
  (category: keyof OutfitComposerGarnments) => (state: OutfitComposerState) => {
    return state[category];
  };
