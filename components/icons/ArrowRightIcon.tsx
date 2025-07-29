import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={25}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16 12.88a1.002 1.002 0 0 0-.29-.71l-6-6a1.004 1.004 0 1 0-1.42 1.42l5.3 5.29-5.29 5.29a1 1 0 0 0 1.41 1.41l6-6a1 1 0 0 0 .29-.7Z"
      fill="#fff"
      fillOpacity={0.6}
    />
  </svg>
);

export default SvgComponent;
