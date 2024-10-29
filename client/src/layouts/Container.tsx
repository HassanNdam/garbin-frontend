interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`${className} container bg-white mx-auto p-20 rounded-2xl border border-gray-300`}
      style={{ width: 'fit-content' }}
    >
      {children}
    </div>
  );
};
