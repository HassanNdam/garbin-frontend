import styles from '../assets/garments.module.css';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getGarmentsAPI, postGarmentAPI } from '@/lib/axios';
import {
  categories,
  frenchSubCategoryLabels,
  Garnment,
  GarnmentAPI,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z
  .object({
    name: z.string().min(1, 'Obligatoire'),
    brand: z.string().min(1, 'Obligatoire'),
    size: z.string().min(1, 'Obligatoire').max(10, 'Trop long'),
    color: z.string().nullable(),
  })
  .and(
    z.union([
      z.object({
        category: z.literal('MAIN_TOP'),
        subCategory: z.enum(categories.MAIN_TOP),
      }),
      z.object({
        category: z.literal('BOTTOM'),
        subCategory: z.enum(categories.BOTTOM),
      }),
      z.object({
        category: z.literal('SHOES'),
        subCategory: z.enum(categories.SHOES),
      }),
      z.object({
        category: z.literal('SUB_TOP'),
        subCategory: z.enum(categories.SUB_TOP),
      }),
    ]),
  );

interface AddGarmentModalProps {
  setGarments: (garments: GarnmentAPI[]) => void;
}

const AddGarmentModal = ({ setGarments }: AddGarmentModalProps) => {
  const [colors, setColors] = useState<string[]>([]);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [previewImageError, setPreviewImageError] = useState<string | null>(
    null,
  );
  const [imageFile, setImageFile] = useState<File | null>(null);

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const addGarmentForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: '',
      brand: '',
      size: '',
      color: '',
    },
  });

  const { watch, resetField } = addGarmentForm;

  async function onSubmit(form: z.infer<typeof formSchema>) {
    // error no image
    if (!previewImage) {
      setPreviewImageError('Veuillez ajouter une image');
      return;
    }

    if (imageFile) {
      setDialogIsOpen(false);

      // @ts-ignore: Unreachable code error
      const garment: Garnment = {
        name: form.name,
        brand: form.brand,
        size: form.size,
        categoryLabel: form.category,
        subCategoryLabel: form.subCategory,
        image: imageFile,
        colors: colors,
      };

      await postGarmentAPI(garment).then(async () => {
        await getGarmentsAPI().then((res) => {
          setGarments(res);
        });
      });
    }
  }

  // Colors management
  const addColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const color = addGarmentForm.getValues('color');
    if (color) {
      setColors([...colors, color]);
    }
    addGarmentForm.setValue('color', '');
  };
  const removeColor = (color: string) => () => {
    setColors(colors.filter((c) => c !== color));
  };

  // Image management (Preview and File)
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
      setImageFile(file);
    } else {
      setPreviewImage(null);
      setImageFile(null);
    }
  };

  console.log({ addGarmentForm });

  // Resetting subcategories on category change
  const selectedCategory = watch('category');
  useEffect(() => {
    if (selectedCategory) {
      resetField('subCategory');
    }
  }, [selectedCategory]);

  // Resetting PreviewImageError if image is added
  useEffect(() => {
    if (previewImage) {
      setPreviewImageError(null);
    }
  }, [previewImage]);

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>
        <Button className="flex gap-3">
          <i className="fa fa-plus"></i>
          Ajouter un vêtement
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-white max-w-2xl">
        <DialogHeader className="sm:text-center my-6">
          <DialogTitle>Ajouter un vêtement</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="my-5">
          <div className="flex flex-col-reverse sm:flex-row">
            <Form {...addGarmentForm}>
              <form
                onSubmit={addGarmentForm.handleSubmit(onSubmit)}
                className="space-y-4 sm:w-1/2"
              >
                <FormField
                  control={addGarmentForm.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className={styles.input}
                          placeholder="Nom de l'article"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-3">
                  <FormField
                    control={addGarmentForm.control}
                    name="brand"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Marque" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={addGarmentForm.control}
                    name="size"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input placeholder="Taille" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <div>
                  <FormLabel className="text-stone-500 mx-2">
                    Couleurs
                  </FormLabel>

                  <div className="flex gap-3 mb-3 mx-1 flex-wrap">
                    {colors.map((color, index) => (
                      <div key={index}>
                        <Badge variant={'secondary'} className="flex gap-3">
                          {color}
                          <i
                            onClick={removeColor(color)}
                            className="fas fa-xmark cursor-pointer"
                          ></i>
                        </Badge>
                      </div>
                    ))}
                  </div>

                  <FormField
                    control={addGarmentForm.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem className="flex align-middle justify-middle space-y-0 gap-2">
                        <FormControl>
                          <Input
                            placeholder="Noir, Blanc..."
                            {...field}
                            value={field.value ?? ''}
                          />
                        </FormControl>
                        <FormMessage />
                        <Button onClick={addColor}>
                          <i className="fa fa-plus"></i>
                        </Button>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <FormField
                    control={addGarmentForm.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange} // Update form field on change
                            defaultValue={field.value} // Default value for Select
                          >
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Catégorie" />
                            </SelectTrigger>
                            <SelectContent
                              onChange={(event) =>
                                addGarmentForm.setValue(
                                  'subCategory',
                                  // @ts-ignore: Unreachable code error
                                  categories[''],
                                )
                              }
                            >
                              <SelectItem value="MAIN_TOP">
                                Haut principal
                              </SelectItem>
                              <SelectItem value="SUB_TOP">
                                Haut secondaire
                              </SelectItem>
                              <SelectItem value="BOTTOM">Bas</SelectItem>
                              <SelectItem value="SHOES">Chaussures</SelectItem>
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={addGarmentForm.control}
                    name="subCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Select
                            onValueChange={field.onChange} // Update form field on change
                            defaultValue={field.value} // Default value for Select
                          >
                            <SelectTrigger className="bg-white">
                              <SelectValue placeholder="Sous-catégorie" />
                            </SelectTrigger>
                            <SelectContent>
                              {addGarmentForm.getValues('category') &&
                                categories[
                                  addGarmentForm.getValues('category')
                                ].map((label, k: number) => {
                                  return (
                                    <SelectItem key={k} value={label}>
                                      {frenchSubCategoryLabels[label]}
                                    </SelectItem>
                                  );
                                })}
                            </SelectContent>
                          </Select>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex mt-0 justify-center">
                  <Button type="submit" className="w-full sm:w-fit px-10">
                    Ajouter
                  </Button>
                </div>
              </form>
            </Form>

            {/* Garment Preview */}
            <div className="sm:w-1/2 flex flex-col items-center space-y-3 mb-3 sm:mx-3">
              <div
                className={`w-52 bg-gray-100 h-52 rounded-xl flex justify-center items-center ${previewImageError && 'border-2 border-red-500'}`}
              >
                {previewImage ? (
                  <img
                    src={previewImage}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <i className="fas fa-image text-zinc-300 text-7xl"></i>
                )}
              </div>
              {previewImageError && (
                <p className="text-red-500 text-sm">{previewImageError}</p>
              )}
              <div className="items-center gap-1.5">
                <Input
                  id="picture"
                  type="file"
                  className="cursor-pointer"
                  onChange={handleImageChange}
                />
              </div>
              <Button className="w-fit gap-3 sm:hidden">
                <i className="fa fa-camera"></i>
                Prendre une photo
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AddGarmentModal;
