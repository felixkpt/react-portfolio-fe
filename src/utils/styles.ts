export const reactSelectStyles = {
    control: (base) => ({
      ...base,
      backgroundColor: 'rgb(15 23 42 / 99%)',
      borderColor: '#555',
      color: '#fff',
    }),
    menu: (base) => ({
      ...base,
      backgroundColor: 'rgb(15 23 42 / 99%)',
      color: '#fff',
    }),
    menuList: (base) => ({
      ...base,
      backgroundColor: 'rgb(15 23 42 / 99%)',
      color: '#fff',
    }),
    option: (base, state) => ({
      ...base,
      backgroundColor: state.isFocused ? '#444' : 'rgb(15 23 42 / 99%)',
      color: '#fff',
      ':active': {
        backgroundColor: '#555',
      },
    }),
    singleValue: (base) => ({
      ...base,
      color: '#fff',
    }),
    multiValue: (base) => ({
      ...base,
      backgroundColor: '#555',
      color: '#fff',
    }),
    multiValueLabel: (base) => ({
      ...base,
      color: '#fff',
    }),
    multiValueRemove: (base) => ({
      ...base,
      color: '#fff',
      ':hover': {
        backgroundColor: '#777',
        color: '#fff',
      },
    }),
  }