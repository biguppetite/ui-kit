import React, { useState } from "react";

export interface tabProps {
  items: { id: string; name: string }[];
  activeId: string;
  onChange?: (id: string) => void;
  className?:string
}

const Tab: React.FunctionComponent<tabProps> = ({
  activeId,
  items,
  onChange,
  className
}) => {
  const [activeTab, setActiveTab] = useState(activeId);

  const changeSelectedItem = (id: string) => {
    if (onChange) onChange(id);
    setActiveTab(id);
  };

  const getIndex = () => {
    for (let i in items) if (items[i].id === activeTab) return i;
    return 0;
  };

  return (
    <div className={`tab ${className}`}>
      {items?.map((item) => (
        <div
          className={`tabItem ${item.id === activeTab && "tabItemActive"}`}
          key={item.id}
          onClick={() => changeSelectedItem(item.id)}
        >
          {item.name}
        </div>
      ))}
      <div
        style={{
          width: `calc(100% / ${items?.length})`,
          left: `calc( 100% / ${items?.length} * ${getIndex()}) `,
        }}
        className={`tabViewer`}
      />
    </div>
  );
};

export default Tab;
