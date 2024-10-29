import styles from '../features/auth/assets/auth.module.css';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '../components/ui/form';
import { Container } from '../layouts/Container';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

const formSchema = z
  .object({
    username: z.string().min(1, 'Trop court').max(50, 'Trop long'),
    email: z
      .string()
      .email('Adresse e-mail incorrecte')
      .min(1, 'Trop court')
      .max(50, 'Trop long'),
    password: z.string().min(8, 'Trop court').max(50, 'Trop long'),
    confirmPassword: z.string().min(8, 'Trop court').max(50, 'Trop long'),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas',
    path: ['confirmPassword'], // Set the error path to confirmPassword
  });

const Register = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const { registerUser, isLoggedIn } = useAuth();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    registerUser(values.username, values.email, values.password);
  }

  if (isLoggedIn()) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="mt-20 text-center">
      <div className="header mb-10">
        <h3 className="font-semibold">Inscrivez-vous</h3>
        <Link to={'/login'}>
          <small>Déjà un compte ?</small>
        </Link>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className={styles.input}
                    placeholder="E-mail *"
                    {...field}
                    style={{ minWidth: '300px' }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Nom d'utilisateur *" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Mot de passe *"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Confirmez le mot de passe *"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col mt-0">
            <Button type="submit">Créer un compte</Button>
          </div>
        </form>
      </Form>
    </Container>
  );
};

export default Register;
