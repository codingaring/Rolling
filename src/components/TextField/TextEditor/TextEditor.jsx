import { useState } from 'react';
import ReactQuill from 'react-quill';
import styled from 'styled-components';

export const TextEditor = () => {
  const [value, setValue] = useState('');

  const modules = {
    toolbar: {
      container: [
        [{ header: [1, 2, 3, 4, 5, false] }],
        ['bold', 'italic', 'underline', 'strike'],
        [{ color: [] }, { background: [] }],
        [{ align: [] }],
        [{ list: 'ordered' }, { list: 'bullet' }],
      ],
    },
  };

  const handleChange = (content) => {
    setValue(content);
  };

  return <Quill modules={modules} value={value} onChange={handleChange} />;
};

const Quill = styled(ReactQuill)`
  width: 72rem;
  height: 26rem;
`;