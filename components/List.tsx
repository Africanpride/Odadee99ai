
import React from 'react';

type Props = {
    items?: string[] | null;
    children?: React.ReactNode | null;
    color?: string | null;
}

const List = (props: Props) => {
  return (
    <ul className={`divide-y ${props.color ? props.color : 'divide-slate-500/20'}`}>
      {props.children}
    </ul>
  )
}

export default List;