import * as React from 'react';
import { SVGProps } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.06 2.94a1.5 1.5 0 0 0 0 2.12l14.85 14.85a1.5 1.5 0 1 0 2.121-2.121L5.182 2.939a1.5 1.5 0 0 0-2.121 0Z"
      fill="#fff"
      fillOpacity={0.8}
    />
    <path
      d="M3.06 20.06a1.5 1.5 0 0 1 0-2.12L17.91 3.09a1.5 1.5 0 1 1 2.121 2.121L5.182 20.061a1.5 1.5 0 0 1-2.121 0Z"
      fill="#fff"
      fillOpacity={0.8}
    />
  </svg>
);

export default SvgComponent;
