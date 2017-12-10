import * as React from 'react';

interface Props {
  title: string;
}

const Header: React.SFC<Props> = ({ title }) => (
  <h1>{title}</h1>
);

export default Header;
