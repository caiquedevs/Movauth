import React, { ReactElement } from 'react';

import { BtnCheck } from './styled';

interface Props {
  data: any;
}

export default function index({ data }: Props): ReactElement {
  return (
    <BtnCheck htmlFor={data.name}>
      <div className="flex direction-column">
        <input type="checkbox" id={data.name} name={data.name} />
        <span className="container-check" />
        <span className="circle" />
      </div>

      <span className="color-secondary cursor-pointer">{data.label!}</span>
    </BtnCheck>
  );
}
