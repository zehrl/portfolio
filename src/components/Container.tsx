interface ContainerI {
  children: React.ReactNode;
  theme?: 'light' | 'dark';
}

const Container: React.FC<ContainerI> = ({ children, theme = 'light' }) => {
  return (
    <div className={`${theme === 'light' ? 'bg-primary text-dark' : 'bg-dark text-primary'}`}>
      <div className="container max-w-xl mx-auto py-4">
        {children}
      </div>
    </div>
  );
}

export default Container