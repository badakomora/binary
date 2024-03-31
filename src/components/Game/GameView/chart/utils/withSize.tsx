import * as React from "react";
import  { AutoSizerProps } from "react-virtualized-auto-sizer"; 
import { FC } from "react";
import { AutoSizer as _AutoSizer } from "react-virtualized";
// import AutoSizer  from "react-virtualized/dist/es/AutoSizer";


export interface WithSizeProps {
    readonly width: number;
    readonly height: number;
}

const AutoSizer = _AutoSizer as unknown as FC<AutoSizerProps>;

export const withSize = (props?: Omit<AutoSizerProps, "children">) => {
    return <TProps extends WithSizeProps>(OriginalComponent: React.ComponentClass<TProps>) => {
        return class WithSize extends React.Component<Omit<TProps, "width" | "height">> {
            public render() {
                return (
                    <AutoSizer {...props}>
                        {({ height, width }) => {
                            return <OriginalComponent {...(this.props as TProps)} height={height} width={width} />;
                        }}
                    </AutoSizer>
                );
            }
        };
    };
};
