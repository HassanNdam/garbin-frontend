/******* Types & ENUM*********** */

export type Garnment = {
  name: string;
  brand: string;
  size: string;
  colors: string[];
  image: File;
} & Categories;

export type EditedGarment = {
  name: string;
  colors: string[];
  size: string;
  brand: string;
};

export type GarnmentAPI = {
  uuid: string;
  name: string;
  brand: string;
  size: { value: string };
  colors: string[];
  imageUrl: string;
  createdAt: string;
  updatedAt: string | null;
} & Categories;

export type OutFit = {
  uuid ?: string;
  name: string;
  garments: {
    mainTop?: Pick<GarnmentAPI, 'name' | 'imageUrl'>;
    shoes: Pick<GarnmentAPI, 'name' | 'imageUrl'>;
    subTop?: Pick<GarnmentAPI, 'name' | 'imageUrl'>;
    bottom?: Pick<GarnmentAPI, 'name' | 'imageUrl'>;
  };
};

export type OutfitPlanInCommingType = {
  eventName: string;
  date: string;
  location: string;
  uuid: string;
};

export type outfitsWithHistoryType = {
  history: OutfitPlanType[];
} & OutFit;

export type OutfitPlanType = {
  name: string;
  date: string;
  location: string;
  uuid?: string;
};
export interface ClothingItem {
  id: string;
  categoryLabel: CategoryLabelEnum;
  imageUrl: string;
  name: string;
  usageCount?: number;
  color: string;
}
export enum CategoryLabelEnum {
  MAIN_TOP = 'MAIN_TOP',
  SUB_TOP = 'SUB_TOP',
  BOTTOM = 'BOTTOM',
  SHOES = 'SHOES',
}

export type CategoryLabelType = keyof typeof categories;

// type ToUnion<T extends object> = { [K in keyof T]: {
//   categoryLabel: K,
//   subCategoryLabel: T[K]
// } }[keyof T];



// export type Categories = ToUnion<typeof categories>;

/*******END Types & ENUM*********** */


/*********Constantes********** */

// type CarouselCardProps = {
//   categoryLabel: Categories['categoryLabel']
// }

// const C = (props: CarouselCardProps) => {
//   const subCategories = categories[props.categoryLabel];

//   return <Carousel>
//     {subCategories.map(subCategory => <CarouselItem subCategory={subCategory} />)}
//   </Carousel>
// }

export const categories = {
  MAIN_TOP: [
    'Dress',
    'Jacket',
    'Coat',
    'Bomber',
    'Vest',
    'Sweater',
    'Sweatshirt',
    'Down_jacket',
  ],
  SUB_TOP: [
    'Shirt',
    'T-shirt',
    'Polo',
    'TankTop',
    'Short_sleeve_shirt',
    'Sport_top',
    'Sleeveless_top',
  ],
  BOTTOM: [
    'Pants',
    'Skirt',
    'Shorts',
    'Leggings',
    'Jeans',
    'Bermuda_shorts',
    'Jogging_pants',
    'Overalls',
    'Cargo_pants',
  ],
  SHOES: [
    'Sneakers',
    'Sandals',
    'Boots',
    'Dress_shoes',
    'Loafers',
    'Espadrilles',
    'Flip-flops',
    'Ankle_boots',
    'Sports_shoes',
    'Hiking_shoes',
    'Flats',
  ],
} as const;

export type Categories = { [K in keyof typeof categories]: {
  categoryLabel: K,
  subCategoryLabel:(typeof categories) [K ][number]
} }[keyof typeof categories];

// export const subCategoryLabels = {
//   MAIN_TOP: [
//     {
//       original: 'Dress',
//       fr: 'Robe',
//     },
//     {
//       original: 'Jacket',
//       fr: 'Veste',
//     },
//     {
//       original: 'Coat',
//       fr: 'Manteau',
//     },
//     {
//       original: 'Bomber',
//       fr: 'Blouson',
//     },
//     {
//       original: 'Vest',
//       fr: 'Gilet',
//     },
//     {
//       original: 'Sweater',
//       fr: 'Pull',
//     },
//     {
//       original: 'Sweatshirt',
//       fr: 'Sweatshirt',
//     },
//     {
//       original: 'Down_jacket',
//       fr: 'Doudoune',
//     },
//   ],
//   SUB_TOP: [
//     {
//       original: 'Shirt',
//       fr: 'Chemise',
//     },
//     {
//       original: 'T-shirt',
//       fr: 'T-shirt',
//     },
//     {
//       original: 'Polo',
//       fr: 'Polo',
//     },
//     {
//       original: 'TankTop',
//       fr: 'Débardeur',
//     },
//     {
//       original: 'Short_sleeve_shirt',
//       fr: 'Chemise à manches courtes',
//     },
//     {
//       original: 'Sport_top',
//       fr: 'Haut de sport',
//     },
//     {
//       original: 'Sleeveless_top',
//       fr: 'Haut sans manches',
//     },
//   ],
//   BOTTOM: [
//     {
//       original: 'Pants',
//       fr: 'Pantalon',
//     },
//     {
//       original: 'Skirt',
//       fr: 'Jupe',
//     },
//     {
//       original: 'Shorts',
//       fr: 'Short',
//     },
//     {
//       original: 'Leggings',
//       fr: 'Legging',
//     },
//     {
//       original: 'Jeans',
//       fr: 'Jean',
//     },
//     {
//       original: 'Bermuda_shorts',
//       fr: 'Bermuda',
//     },
//     {
//       original: 'Jogging_pants',
//       fr: 'Jogging',
//     },
//     {
//       original: 'Overalls',
//       fr: 'Salopette',
//     },
//     {
//       original: 'Cargo_pants',
//       fr: 'Pantalon cargo',
//     },
//   ],
//   SHOES: [
//     {
//       original: 'Sneakers',
//       fr: 'Baskets',
//     },
//     {
//       original: 'Sandals',
//       fr: 'Sandales',
//     },
//     {
//       original: 'Boots',
//       fr: 'Bottes',
//     },
//     {
//       original: 'Dress_shoes',
//       fr: 'Chaussures habillées',
//     },
//     {
//       original: 'Loafers',
//       fr: 'Mocassins',
//     },
//     {
//       original: 'Espadrilles',
//       fr: 'Espadrilles',
//     },
//     {
//       original: 'Flip-flops',
//       fr: 'Tongs',
//     },
//     {
//       original: 'Ankle_boots',
//       fr: 'Bottines',
//     },
//     {
//       original: 'Sports_shoes',
//       fr: 'Chaussures de sport',
//     },
//     {
//       original: 'Hiking_shoes',
//       fr: 'Chaussures de randonnée',
//     },
//     {
//       original: 'Flats',
//       fr: 'Chaussures plates',
//     },
//   ],
// };

export const frenchCategoryLabels = {
  MAIN_TOP: 'Haut principal',
  SUB_TOP: 'Haut secondaire',
  BOTTOM: 'Bas',
  SHOES: 'Chaussures',
};

export const frenchSubCategoryLabels = {
  Dress: 'Robe',
  Jacket: 'Veste',
  Coat: 'Manteau',
  Bomber: 'Blouson',
  Vest: 'Gilet',
  Sweater: 'Pull',
  Sweatshirt: 'Sweatshirt',
  Down_jacket: 'Doudoune',
  Shirt: 'Chemise',
  'T-shirt': 'T-shirt',
  Polo: 'Polo',
  TankTop: 'Débardeur',
  Short_sleeve_shirt: 'Chemise à manches courtes',
  Sport_top: 'Haut de sport',
  Sleeveless_top: 'Haut sans manches',
  Pants: 'Pantalon',
  Skirt: 'Jupe',
  Shorts: 'Short',
  Leggings: 'Legging',
  Jeans: 'Jean',
  Bermuda_shorts: 'Bermuda',
  Jogging_pants: 'Jogging',
  Overalls: 'Salopette',
  Cargo_pants: 'Pantalon cargo',
  Sneakers: 'Baskets',
  Sandals: 'Sandales',
  Boots: 'Bottes',
  Dress_shoes: 'Chaussures habillées',
  Loafers: 'Mocassins',
  Espadrilles: 'Espadrilles',
  'Flip-flops': 'Tongs',
  Ankle_boots: 'Bottines',
  Sports_shoes: 'Chaussures de sport',
  Hiking_shoes: 'Chaussures de randonnée',
  Flats: 'Chaussures plates',
};
