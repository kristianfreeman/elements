import { withKnobs } from '@storybook/addon-knobs';
import { boolean, text } from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import cn from 'classnames';
import * as React from 'react';

import { Hub, IHub } from '../../containers/Hub';
import { LinkProps, Provider } from '../../containers/Provider';
import { providerKnobs } from './Provider';

export const darkMode = () => boolean('dark mode', false);

export const knobs = (): IHub => ({
  // srn: text('srn', 'sl/acxiom/handcrafted-metal-ball/docs/markdown/basic-syntax.md', 'Hub'),
  srn: text('srn', 'sl/acxiom/handcrafted-metal-ball/reference/todos/openapi.json/paths/~1todos/get', 'Hub'),
});

storiesOf('containers/Hub', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <div
      className={cn('bg-gray-1 dark:bg-gray-8 absolute bottom-0 left-0 right-0 top-0 p-4', {
        'bp3-dark': darkMode(),
      })}
    >
      <Wrapper providerProps={{ ...providerKnobs() }} hubProps={{ ...knobs() }} />
    </div>
  ));

const Wrapper = ({ providerProps, hubProps }: any) => {
  return (
    <Provider {...providerProps} Link={Link}>
      <Hub className="h-full" srn={hubProps.srn} />
    </Provider>
  );
};

const Link: LinkProps = ({ className, srn, children }) => {
  return (
    <a
      className={className}
      onClick={e => {
        e.preventDefault();
        console.log(srn);
      }}
    >
      {children}
    </a>
  );
};
