import React, { useState } from "react";
import "./styles.scss";
import { IExternalApi } from "../../interfaces/IExternalApi";

interface MenuComponentProps {
  selectedItem: string | null;
  setSelectedApi: (value: string) => void;
  availableApis: IExternalApi[];
}
export function MenuComponent({
  selectedItem,
  setSelectedApi,
  availableApis,
}: MenuComponentProps) {
  const getClassNames = (item: string) => {
    if (item === selectedItem) return "menu-item selected";
    return "menu-item";
  };

  const handleButtonClick = (content: string | null) => {
    setSelectedApi(content || "");
  };

  return (
    <>
      <div className="menu">
        {availableApis.map((apiItem) => (
          <button
            onClick={(e) => handleButtonClick(apiItem.identifier)}
            className={getClassNames(apiItem.identifier)}
            key={apiItem.identifier}
          >
            {apiItem.name}
          </button>
        ))}
      </div>
    </>
  );
}

export const Menu = React.memo(MenuComponent);
