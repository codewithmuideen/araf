import { Button } from '@/components/button';

export const Footer = () => {
  return (
    <footer
      style={{ fontFamily: 'Montserrat, sans-serif' }}
      className='text-muted-foreground my-2 text-sm'
    >
      © {new Date().getFullYear()}{' '}
      <Button variant='link' className='text-muted-foreground p-0 font-medium'>
        <a href='' style={{ fontFamily: 'Montserrat, sans-serif' }}>
          Moshood Arafat
        </a>
      </Button>
      . All rights reserved.
    </footer>
  );
};
