import { FcSearch } from 'react-icons/fc';
import { InputBox, Input } from './SearchString.styled';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { SubmitButton } from './SearchString.styled';
import PropTypes from 'prop-types';

export const SearchString = ({ onSubmit }) => {
  const [searchValue, setSearchValue] = useState('');

  const handleSubmit = event => {
    event.preventDefault();

    if (searchValue.trim() === '') {
      toast.error('Search title of movie', {
        duration: 3000,
        position: 'top-right',
      });
      return;
    }
    if (searchValue) onSubmit(searchValue);
    setSearchValue('');
  };

  const handleInputChange = event => {
    setSearchValue(event.currentTarget.value.toLowerCase());
  };

  return (
    <InputBox>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={searchValue}
          onChange={handleInputChange}
          placeholder="Enter the title of movie..."
        />
        <SubmitButton type="submit">
          <FcSearch />
        </SubmitButton>
      </form>
    </InputBox>
  );
};

SearchString.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
