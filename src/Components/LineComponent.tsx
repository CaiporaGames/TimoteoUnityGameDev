import React from 'react';

interface LineProps {
    orientation: 'horizontal' | 'vertical';
    width?: string;
    height?: string;
    color?: string;
    top?: string;
    left?: string;
    marginTop?:string;
    bottom?:string;
    zIndex?:string;
}

const LineComponent: React.FC<LineProps> = ({
    orientation,
    width = '100%',
    height = '2px',
    color = '#333',
    top = '0',
    left = '0',
    marginTop = '0',
    zIndex = '0'
}) => {
    const isHorizontal = orientation === 'horizontal';

    // Define inline styles with correct type
    const lineStyles: React.CSSProperties = {
        position: 'absolute',
        backgroundColor: color,
        width: isHorizontal ? width : height,
        height: isHorizontal ? height : width,
        top: top,
        left: left,
        marginTop:marginTop,
        zIndex:zIndex,
        transform: isHorizontal ? 'none' : 'translateX(-50%)',
    };

    return <div style={lineStyles} />;
};

export default LineComponent;
