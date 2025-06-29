import Select, {
  components,
  type OptionProps,
  type SingleValue,
  type SingleValueProps,
} from 'react-select';
import { useTranslation } from 'react-i18next';

import { FLAG_MAP, type SupportedLanguages } from '@/config';
import { changeLanguage } from '@/utils';

type LanguageOption = {
  label: string;
  value: string;
  flag: string;
};

const options: LanguageOption[] = Object.entries(FLAG_MAP).map((item) => ({
  label: item[1].name,
  value: item[0],
  flag: item[1].icon,
}));

const SingleValue = (props: SingleValueProps<LanguageOption>) => (
  <components.SingleValue {...props} className="flex items-center gap-1">
    <div className="flex items-center gap-1">
      <span className={props.data.flag} />
      {props.data.label}
    </div>
  </components.SingleValue>
);

const Option = (props: OptionProps<LanguageOption>) => (
  <components.Option {...props}>
    <div className="flex items-center gap-1">
      <span className={props.data.flag} />
      {props.data.label}
    </div>
  </components.Option>
);

export const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleLanguageChange = (selected: SingleValue<LanguageOption>) => {
    if (selected) changeLanguage(selected.value as SupportedLanguages);
  };

  const defaultValue = options.find(({ value }) =>
    i18n.language.startsWith(value)
  );

  return (
    <Select<LanguageOption>
      options={options}
      components={{ SingleValue, Option }}
      isSearchable={false}
      onChange={handleLanguageChange}
      defaultValue={defaultValue}
      styles={{
        option: (provided) => ({
          ...provided,
          borderRadius: 5,
        }),
        menu: (provided) => ({
          ...provided,
          paddingInline: 3,
        }),
        menuList: (provided) => ({
          ...provided,
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
        }),
      }}
    />
  );
};
