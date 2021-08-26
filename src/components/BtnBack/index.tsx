import { ReactElement } from 'react';
import { useHistory } from 'react-router-dom';

import { Button } from '..';
import { CgArrowLeftR } from 'react-icons/cg';

interface BtnBackProps {}

function BtnBack(props: BtnBackProps): ReactElement {
  const history = useHistory();

  const handleClickBackNavigate = () => {
    history.goBack();
  };

  return (
    <Button
      width="min-content"
      height="min-content"
      type="button"
      className="bg-none"
      onClick={handleClickBackNavigate}
    >
      <CgArrowLeftR size="27px" className="color-secondary" />
    </Button>
  );
}

export default BtnBack;
