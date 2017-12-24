import * as React from 'react';

interface Props {
ViewItem: React.ComponentClass<any> | React.SFC<any>;
  items: (Object & { id: string | number })[];
}

const ListView: React.SFC<Props> = ({ ViewItem, items }): JSX.Element => {
  const listItems = items.map(item => (
    <li className="list-group-item" key={item.id}>
      <ViewItem item={item} />
    </li>
  ));

  return (
    <ul className="list-group">
      {listItems}
    </ul>
  );
};

export default ListView;
