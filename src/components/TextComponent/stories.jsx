import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur dolorum, consequuntur veritatis, itaque beatae quis atque neque necessitatibus adipisci possimus doloremque expedita voluptatem sit aliquid obcaecati! Libero nesciunt maxime dicta.`,
  },
  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <TextComponent {...args} />
    </div>
  );
};
