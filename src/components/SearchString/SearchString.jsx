import { FcSearch } from 'react-icons/fc';
import { InputBox, Input } from './SearchString.styled'; 

export const SearchString = ({value, onChange}) => {
    return (
      <InputBox>
        <Input
          type="text"
          value={value}
                onChange={e => onChange(e.target.value)}
                placeholder='Enter the title of movie...'
        />
        <FcSearch />
      </InputBox>
    );
}