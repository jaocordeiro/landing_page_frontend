import { GridTwoColumns } from '.';

export default {
  title: 'GridTwoColumns',
  component: GridTwoColumns,
  args: {
    title: 'Grid Two Columns',
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt voluptates provident, nam, omnis aliquid libero perspiciatis illum laudantium magnam repudiandae eum ut alias nisi quo porro quaerat? Animi, itaque ratione!`,
    srcImg: 'assets/images/javascript.svg',
  },

  argTypes: {
    children: { type: 'string' },
  },
};

export const Template = (args) => {
  return (
    <div>
      <GridTwoColumns {...args} />
    </div>
  );
};
