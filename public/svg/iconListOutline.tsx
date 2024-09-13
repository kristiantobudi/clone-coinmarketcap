interface IconListOutlineProps {
  fill?: string;
}

export const IconListOutline: React.FC<IconListOutlineProps> = () => {
  return (
    <svg viewBox="0 0 512 512" fill="currentColor" className="w-6 h-6">
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M160 144h288M160 256h288M160 368h288"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M96 144 A16 16 0 0 1 80 160 A16 16 0 0 1 64 144 A16 16 0 0 1 96 144 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M96 256 A16 16 0 0 1 80 272 A16 16 0 0 1 64 256 A16 16 0 0 1 96 256 z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
        d="M96 368 A16 16 0 0 1 80 384 A16 16 0 0 1 64 368 A16 16 0 0 1 96 368 z"
      />
    </svg>
  );
};
