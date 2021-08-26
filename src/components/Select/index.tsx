import { useSelector } from 'react-redux';
import Select from 'react-select';

import { Label } from './styles';

import IOption from '../../interfaces/option';
import { darkMode, lightMode } from '../../styles/colors';

interface IProps {
  value: IOption | null;
  onChange: any;
  options: IOption[];
  label?: string;
  col?: number;
  minCol?: string;
}
type ITheme = typeof darkMode | typeof lightMode;

function SelectComponent(props: IProps) {
  const theme: ITheme = useSelector((state: any) => state.themeReducer.theme);

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      background: theme.bgSecondary,
      borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
      borderColor: 'transparent',
      paddingTop: 4,
      paddingBottom: 3,
      paddingLeft: 6,
      paddingRight: 6,
      boxShadow: null,
      '&:hover': {
        cursor: 'pointer',
      },
    }),
    placeholder: (provided: any) => ({
      ...provided,
      color: theme.txtSecondary,
      fontSize: 17,
    }),
    singleValue: (provided: any) => ({
      ...provided,
      color: theme.txtPrimary,
    }),
    indicatorSeparator: (base: any) => ({
      ...base,
      display: 'none',
    }),
    indicatorsContainer: () => ({
      '.myDropDown': {
        '&__dropdown-indicator': {
          color: theme.primary,
          '&:hover': {
            opacity: 1,
          },
        },
      },
    }),
    option: (base: any, state: any) => ({
      ...base,
      color: state.isSelected ? theme.txtPrimary : theme.txtSecondary,
      paddingTop: 12,
      paddingBottom: 12,
      background: state.isSelected ? theme.cardActive : theme.bgSecondary,
      '&:hover': {
        background: theme.cardActive,
        cursor: 'pointer',
      },
    }),
    menu: (base: any) => ({
      ...base,
      borderRadius: 0,
      marginTop: 5,
      background: theme.bgSecondary,
    }),
    menuList: (base: any) => ({
      ...base,
      padding: 0,
    }),
  };

  return (
    <Label col={props.col} minCol={props.minCol}>
      {props.label && <span>{props.label}</span>}
      <Select
        options={props.options}
        value={props.value}
        onChange={props.onChange}
        styles={customStyles}
        placeholder="Selecione..."
        classNamePrefix="myDropDown"
      />
    </Label>
  );
}

SelectComponent.defaultProps = {
  value: null,
};

export default SelectComponent;
