interface CustomizeOutlineProps {
  fill?: string;
}

export const CustomizeOutline: React.FC<CustomizeOutlineProps> = () => {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM13 5V19H9V5H13ZM5 5H7V19H5V5ZM15 19V5H19V19H15Z" />
    </svg>
  );
};
