import React from "react";
export interface tabProps {
    items: {
        id: string;
        name: string;
    }[];
    activeId: string;
    onChange?: (id: string) => void;
    className?: string;
}
declare const Tab: React.FunctionComponent<tabProps>;
export default Tab;
