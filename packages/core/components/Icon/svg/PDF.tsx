import { IconProps } from '../type';

export function PDF({ width = '24px', ...props }: IconProps) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M14.5 2c1.38 0 2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5h-9c-1.38 0-2.5-1.12-2.5-2.5v-15c0-1.38 1.12-2.5 2.5-2.5h9zM6 11.5h4v1h-4v-1zm0 3h4v1h-4v-1zm6-5h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1zm0 2h4v1h-4v-1z" />
    </svg>
  );
}
