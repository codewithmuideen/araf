import { ReactNode } from 'react';

type TProps = {
  heading: string;
  content?: string | ReactNode | undefined;
};

export const SectionHeading = ({ heading, content }: TProps) => {
  return (
    <div
      className="mb-10 text-center"
      style={{ fontFamily: 'Montserrat, sans-serif' }}
    >
      <h2
        style={{ fontFamily: 'Montserrat, sans-serif' }}
        className="font-heading text-3xl font-semibold"
      >
        {heading}
      </h2>
      {content && (
        <p
          style={{ fontFamily: 'Montserrat, sans-serif' }}
          className="text-muted-foreground mt-3 text-sm"
        >
          {content}
        </p>
      )}
    </div>
  );
};
