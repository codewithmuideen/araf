'use client';

import { useTheme } from 'next-themes';
import { Button, ButtonProps } from '@/components/button';
import { Icons } from '@/components/icons';

export const ThemeToggle = ({ className }: ButtonProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      className={className}
      variant="outline"
      size="icon"
      aria-label="theme toggle"
      onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
    >
      <Icons.sun className="w-5 h-5 dark:hidden" />
      <Icons.moon className="w-5 h-5 hidden dark:block" />
    </Button>
  );
};
