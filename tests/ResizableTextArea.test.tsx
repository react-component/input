import { render } from '@testing-library/react';
import React from 'react';
import type { ResizableTextAreaRef, TextAreaProps } from '../src';
import { ResizableTextArea } from '../src';

const resizableTextAreaProps = () => (global as any).textAreaProps;

jest.mock('../src/ResizableTextArea', () => {
  const ReactReal: typeof React = jest.requireActual('react');
  const Resizable = jest.requireActual('../src/ResizableTextArea');
  const ResizableComponent = Resizable.default;
  return ReactReal.forwardRef<ResizableTextAreaRef, TextAreaProps>(
    (props, ref) => {
      (global as any).textAreaProps = props;
      return <ResizableComponent {...props} ref={ref} />;
    },
  );
});

it('should have no onPressEnter prop', () => {
  render(<ResizableTextArea defaultValue="test" />);
  expect(resizableTextAreaProps().onPressEnter).toBeUndefined();
});
