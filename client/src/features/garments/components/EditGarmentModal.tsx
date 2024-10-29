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
import { getGarmentsAPI, putGarmentAPI } from '@/lib/axios';
import {
  EditedGarment,
  frenchCategoryLabels,
  frenchSubCategoryLabels,
  GarnmentAPI,
} from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
  name: z.string().min(1, 'Obligatoire'),
  brand: z.string().min(1, 'Obligatoire'),
  size: z.string().min(1, 'Obligatoire').max(10, 'Trop long'),
  color: z.string(),
  category: z.string().min(1, 'Obligatoire'),
  subCategory: z.string().min(1, 'Obligatoire'),
});

interface EditGarmentModalProps {
  garment: GarnmentAPI;
  setGarments: (garments: GarnmentAPI[]) => void;
  children: React.ReactNode;
}

const EditGarmentModal = ({
  garment,
  setGarments,
  children,
}: EditGarmentModalProps) => {
  const [colors, setColors] = useState<string[]>(garment.colors);

  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  const EditGarmentForm = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    mode: 'onChange',
    defaultValues: {
      name: garment.name,
      brand: garment.brand,
      size: garment.size.value,
      color: '',
      category: garment.categoryLabel,
      subCategory: garment.subCategoryLabel,
    },
  });

  const { resetField } = EditGarmentForm;

  async function onSubmit(form: z.infer<typeof formSchema>) {
    const newGarment: EditedGarment = {
      name: form.name,
      colors: colors,
      brand: form.brand,
      size: form.size,
    };

    await putGarmentAPI(newGarment, garment.uuid).then(async () => {
      await getGarmentsAPI().then((res) => {
        setGarments(res);
        setDialogIsOpen(false);
        // Reset color field
        resetField('color');
      });
    });
  }

  // Colors management
  const addColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const color = EditGarmentForm.getValues('color');
    if (color) {
      setColors([...colors, color]);
    }
    EditGarmentForm.setValue('color', '');
  };
  const removeColor = (color: string) => () => {
    setColors(colors.filter((c) => c !== color));
  };

  return (
    <Dialog open={dialogIsOpen} onOpenChange={setDialogIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="bg-white max-w-2xl">
        <DialogHeader className="sm:text-center my-6">
          <DialogTitle>Modifier un vêtement</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <div className="my-5">
          <div className="flex flex-col-reverse sm:flex-row">
            <Form {...EditGarmentForm}>
              <form
                onSubmit={EditGarmentForm.handleSubmit(onSubmit)}
                className="space-y-4 sm:w-1/2"
              >
                <FormField
                  control={EditGarmentForm.control}
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
                    control={EditGarmentForm.control}
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
                    control={EditGarmentForm.control}
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
                    control={EditGarmentForm.control}
                    name="color"
                    render={({ field }) => (
                      <FormItem className="flex align-middle justify-middle space-y-0 gap-2">
                        <FormControl>
                          <Input placeholder="Noir, Blanc..." {...field} />
                        </FormControl>
                        <FormMessage />
                        <Button onClick={addColor}>
                          <i className="fa fa-plus"></i>
                        </Button>
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid gap-2">
                  <FormField
                    control={EditGarmentForm.control}
                    name="category"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-500 mx-2">
                          Catégorie
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={
                              frenchCategoryLabels[
                                field.value as keyof typeof frenchCategoryLabels
                              ]
                            }
                            disabled
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={EditGarmentForm.control}
                    name="subCategory"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-stone-500 mx-2">
                          Sous-catégorie
                        </FormLabel>
                        <FormControl>
                          <Input
                            defaultValue={
                              frenchSubCategoryLabels[
                                field.value as keyof typeof frenchSubCategoryLabels
                              ]
                            }
                            disabled
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="flex mt-0 justify-center">
                  <Button type="submit" className="w-full sm:w-fit px-10">
                    Sauvegarder
                  </Button>
                </div>
              </form>
            </Form>

            {/* Garment Preview */}
            <div className="sm:w-1/2 flex flex-col items-center space-y-3 mb-3 sm:mx-3">
              <div
                className={`w-52 bg-gray-100 h-52 rounded-xl flex justify-center items-center`}
              >
                {garment.imageUrl ? (
                  <img
                    src={garment.imageUrl}
                    alt="Preview"
                    className="w-full h-full object-cover rounded-xl"
                  />
                ) : (
                  <i className="fas fa-image text-zinc-300 text-7xl"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default EditGarmentModal;
