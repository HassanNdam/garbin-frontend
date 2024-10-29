import { Progress } from '@/components/ui/progress';

interface ILoader {
  isLoading: boolean;
}

const Loader = ({ isLoading }: ILoader) => {
  return (
    <div className="loader">
      <Progress value={isLoading ? 33 : 66} className="w-[100%]" />
    </div>
  );
};

export default Loader;
