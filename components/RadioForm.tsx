"use client"
import React, { useState } from 'react';
import styled from 'styled-components';
import 'tailwindcss/tailwind.css';

const StyledLabel = styled.label<{ checked: boolean }>`
  border-color: ${({ checked }) => (checked ? 'black' : 'gray')};
  box-shadow: ${({ checked }) =>
    checked
      ? '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
      : 'none'};
`;

const RadioForm: React.FC = () => {
  const [selected, setSelected] = useState('radio_1');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(event.target.id);
  };

  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <form className="grid grid-cols-3 gap-2 w-full max-w-screen-sm">
        <div>
          <input
            className="hidden"
            id="radio_1"
            type="radio"
            name="radio"
            checked={selected === 'radio_1'}
            onChange={handleChange}
          />
          <StyledLabel
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="radio_1"
            checked={selected === 'radio_1'}
          >
            <span className="text-xs font-semibold uppercase">Small</span>
            <span className="text-xl font-bold mt-2">$10/mo</span>
            <ul className="text-sm mt-2">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </StyledLabel>
        </div>
        <div>
          <input
            className="hidden"
            id="radio_2"
            type="radio"
            name="radio"
            checked={selected === 'radio_2'}
            onChange={handleChange}
          />
          <StyledLabel
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="radio_2"
            checked={selected === 'radio_2'}
          >
            <span className="text-xs font-semibold uppercase">Medium</span>
            <span className="text-xl font-bold mt-2">$40/mo</span>
            <ul className="text-sm mt-2">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </StyledLabel>
        </div>
        <div>
          <input
            className="hidden"
            id="radio_3"
            type="radio"
            name="radio"
            checked={selected === 'radio_3'}
            onChange={handleChange}
          />
          <StyledLabel
            className="flex flex-col p-4 border-2 border-gray-400 cursor-pointer"
            htmlFor="radio_3"
            checked={selected === 'radio_3'}
          >
            <span className="text-xs font-semibold uppercase">Big</span>
            <span className="text-xl font-bold mt-2">$100/mo</span>
            <ul className="text-sm mt-2">
              <li>Thing 1</li>
              <li>Thing 2</li>
            </ul>
          </StyledLabel>
        </div>
      </form>
    </div>
  );
};

export default RadioForm;
