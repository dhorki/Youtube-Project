import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from '../../hooks/useForm';

describe('useForm', () => {
  it('should return default data', () => {
    const initialState = {};

    const { result } = renderHook(() => useForm(initialState));
    const [values, handleInputChange, reset] = result.current;

    expect(values).toEqual(initialState);
    expect(handleInputChange).toBeInstanceOf(Function);
    expect(reset).toBeInstanceOf(Function);
  });

  it('should handle an input change', () => {
    const initialState = {};

    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange] = result.current;

    const event = {
      target: {
        name: 'key',
        value: 'value',
      },
    };

    act(() => {
      handleInputChange(event);
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialState, [event.target.name]: event.target.value });
  });

  it('should handle a values reset', () => {
    const initialState = {};

    const { result } = renderHook(() => useForm(initialState));
    const [, handleInputChange, reset] = result.current;

    const event = {
      target: {
        name: 'key',
        value: 'value',
      },
    };

    act(() => {
      handleInputChange(event);
    });

    const [values] = result.current;
    expect(values).toEqual({ ...initialState, [event.target.name]: event.target.value });

    act(() => {
      reset();
    });

    const [resetedValues] = result.current;

    expect(resetedValues).toEqual(initialState);
  });
});
