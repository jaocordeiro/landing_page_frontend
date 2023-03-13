import { GridContent } from '../../components/GridContent';

export const NotFound = () => {
  return (
    <GridContent
      title="Error 404"
      html='<p>Página buscada não encontrada. <a href="/">Volte para Home</a></a></p>'
    />
  );
};
