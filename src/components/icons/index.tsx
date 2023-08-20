import { SVGProps } from 'react';

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'color'> {
  color?: string;
}
export const IconLogout = ({ color, ...rest }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <g clipPath="url(#clip0_24_52)">
      <path
        d="M14.1666 5.83333L12.9916 7.00833L15.1416 9.16667H6.66663V10.8333H15.1416L12.9916 12.9833L14.1666 14.1667L18.3333 10L14.1666 5.83333ZM3.33329 4.16667H9.99996V2.5H3.33329C2.41663 2.5 1.66663 3.25 1.66663 4.16667V15.8333C1.66663 16.75 2.41663 17.5 3.33329 17.5H9.99996V15.8333H3.33329V4.16667Z"
        fill={color ?? 'black'}
      />
    </g>
    <defs>
      <clipPath id="clip0_24_52">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconDownload = ({ color, ...rest }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <g clipPath="url(#clip0_13_109)">
      <path
        d="M15.8333 7.5H12.5V2.5H7.49996V7.5H4.16663L9.99996 13.3333L15.8333 7.5ZM4.16663 15V16.6667H15.8333V15H4.16663Z"
        fill={color ?? 'black'}
      />
    </g>
    <defs>
      <clipPath id="clip0_13_109">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const IconGood = ({ color, ...rest }: IconProps) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <g clipPath="url(#clip0_13_107)">
      <path
        d="M0.833374 17.5H4.16671V7.49999H0.833374V17.5ZM19.1667 8.33333C19.1667 7.41666 18.4167 6.66666 17.5 6.66666H12.2417L13.0334 2.85833L13.0584 2.59166C13.0584 2.24999 12.9167 1.93333 12.6917 1.70833L11.8084 0.833328L6.32504 6.325C6.01671 6.62499 5.83337 7.04166 5.83337 7.49999V15.8333C5.83337 16.75 6.58337 17.5 7.50004 17.5H15C15.6917 17.5 16.2834 17.0833 16.5334 16.4833L19.05 10.6083C19.125 10.4167 19.1667 10.2167 19.1667 9.99999V8.33333Z"
        fill={color ?? 'black'}
      />
    </g>
    <defs>
      <clipPath id="clip0_13_107">
        <rect width="20" height="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const IconCancle = ({ color, ...rest }: IconProps) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="none"
    {...rest}
  >
    <g id="Icon/Cancel">
      <path
        id="Union"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.63618 16.9497C5.24566 17.3403 5.24566 17.9734 5.63618 18.364C6.02671 18.7545 6.65987 18.7545 7.0504 18.364L12.0001 13.4142L16.9499 18.364C17.3404 18.7545 17.9736 18.7545 18.3641 18.364C18.7546 17.9734 18.7546 17.3403 18.3641 16.9498L13.4143 12L18.3641 7.05025C18.7546 6.65972 18.7546 6.02656 18.3641 5.63603C17.9736 5.24551 17.3404 5.24551 16.9499 5.63603L12.0001 10.5858L7.05037 5.63605C6.65984 5.24553 6.02668 5.24553 5.63615 5.63605C5.24563 6.02657 5.24563 6.65974 5.63615 7.05026L10.5859 12L5.63618 16.9497Z"
        fill={color ?? '#080117'}
      />
    </g>
  </svg>
);
