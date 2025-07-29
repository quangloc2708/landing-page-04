import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={20}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      y={0.5}
      width={24}
      height={3}
      rx={1.5}
      fill="#fff"
      fillOpacity={0.8}
    />
    <rect
      y={8.5}
      width={24}
      height={3}
      rx={1.5}
      fill="#fff"
      fillOpacity={0.8}
    />
    <rect
      y={16.5}
      width={16}
      height={3}
      rx={1.5}
      fill="#fff"
      fillOpacity={0.8}
    />
  </svg>
);

export default SvgComponent;
