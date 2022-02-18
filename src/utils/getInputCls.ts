import classNames from 'classnames';

const getInputCls = (prefixCls?: string, disabled?: boolean) => {
  return classNames(prefixCls, {
    [`${prefixCls}-disabled`]: disabled,
  });
};

export default getInputCls;
