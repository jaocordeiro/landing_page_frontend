import { GoTo } from '.';

export default {
  title: 'GoTo',
  component: GoTo,
  args: {},
};

export const Template = (args) => {
  return (
    <div style={{ height: '400vh' }}>
      <GoTo {...args} />
    </div>
  );
};
