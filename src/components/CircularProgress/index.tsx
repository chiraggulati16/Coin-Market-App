import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Animated, View, Text, Image} from 'react-native';
import {Svg, Path, G, Circle as SvgCircle} from 'react-native-svg';
import {Images} from '../../assets/ImageProperties';

interface CircleProps {
  size: number | Animated.Value;
  width: number;
  backgroundWidth?: number;
  tintColor?: string;
  tintTransparency?: boolean;
  backgroundColor?: string;
  style?: any;
  rotation?: number;
  lineCap?: string;
  arcSweepAngle?: number;
  fill: number;
  showTulTip?: boolean;
  children?: (fill: number) => React.ReactNode;
  childrenContainerStyle?: object;
  padding?: number;
  renderCap?: (props: {center: {x: number; y: number}}) => React.ReactNode;
  dashedBackground?: {width: number; gap: number};
  dashedTint?: {width: number; gap: number};
}

const Circle: React.FC<CircleProps> = ({
  size,
  width,
  backgroundWidth,
  tintColor = 'black',
  tintTransparency = true,
  backgroundColor,
  style,
  rotation = 90,
  arcSweepAngle = 270,
  fill,
  children,
  childrenContainerStyle,
  padding = 0,
  renderCap,
}) => {
  const [currentFillAngle, setCurrentFillAngle] = useState<number>(
    (arcSweepAngle * Math.min(100, Math.max(0, fill))) / 100,
  );

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleInDegrees: number,
  ) => {
    const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians),
    };
  };

  const circlePath = (
    x: number,
    y: number,
    radius: number,
    startAngle: number,
    endAngle: number,
  ) => {
    const start = polarToCartesian(x, y, radius, endAngle * 0.9999);
    const end = polarToCartesian(x, y, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
    const d = [
      'M',
      start.x,
      start.y,
      'A',
      radius,
      radius,
      0,
      largeArcFlag,
      0,
      end.x,
      end.y,
    ];
    return d.join(' ');
  };

  useEffect(() => {
    setCurrentFillAngle(
      (arcSweepAngle * Math.min(100, Math.max(0, fill))) / 100,
    );
  }, [fill]);

  const sizeWithPadding = (size as number) / 2 + padding / 2;
  const radius =
    (size as number) / 2 -
    Math.max(width, backgroundWidth || 0) / 1.7 -
    padding / 2;

  const backgroundPath = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    tintTransparency ? 0 : currentFillAngle,
    arcSweepAngle,
  );
  const circlePathData1 = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    (arcSweepAngle * Math.min(100, Math.max(0, 20))) / 100,
  );
  const circlePathData2 = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    (arcSweepAngle * Math.min(100, Math.max(0, 40))) / 100,
  );
  const circlePathData3 = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    (arcSweepAngle * Math.min(100, Math.max(0, 60))) / 100,
  );
  const circlePathData4 = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    (arcSweepAngle * Math.min(100, Math.max(0, 80))) / 100,
  );
  const circlePathData5 = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    (arcSweepAngle * Math.min(100, Math.max(0, 100))) / 100,
  );

  const circlePathData6 = circlePath(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    0,
    currentFillAngle,
  );

  const dotCoordinates = polarToCartesian(
    sizeWithPadding,
    sizeWithPadding,
    radius,
    currentFillAngle - 135,
  );

  return (
    <View style={style}>
      <Svg
        width={(size as number) + padding}
        height={(size as number) + padding}>
        <G
          rotation={rotation}
          originX={((size as number) + padding) / 2}
          originY={((size as number) + padding) / 2}>
          {backgroundColor && (
            <Path
              d={backgroundPath}
              stroke={backgroundColor}
              strokeWidth={backgroundWidth || width}
              fill="transparent"
            />
          )}
          {fill > 0 && (
            <Path
              d={circlePathData6}
              stroke={tintColor}
              strokeWidth={width}
              fill="transparent"
            />
          )}

          <Path
            d={circlePathData5}
            stroke={'#16C784'}
            strokeWidth={width}
            fill="transparent"
          />

          <Path
            d={circlePathData4}
            stroke={'#93D900'}
            strokeWidth={width}
            fill="transparent"
          />

          <Path
            d={circlePathData3}
            stroke={'#F3D42F'}
            strokeWidth={width}
            fill="transparent"
          />

          <Path
            d={circlePathData2}
            stroke={'#EA8C00'}
            strokeWidth={width}
            fill="transparent"
          />

          <Path
            d={circlePathData1}
            stroke={'#EA3943'}
            strokeWidth={width}
            fill="transparent"
          />

          {renderCap &&
            renderCap({
              center: polarToCartesian(
                sizeWithPadding,
                sizeWithPadding,
                radius,
                currentFillAngle,
              ),
            })}
          <Image
            source={Images.circleImg}
            resizeMode="contain"
            style={{
              position: 'absolute',
              left: dotCoordinates.x - width / 1.2, // Adjust position of the dot image
              top: dotCoordinates.y - width / 1.2, // Adjust position of the dot image
              width: 10,
              height: 10,
            }}
          />
        </G>
      </Svg>

      {children && (
        <View
          style={{
            ...childrenContainerStyle,
            position: 'absolute',
            left: (size as number) / 4 + 2,
            top: (size as number) / 4 + 3,
          }}>
          {children(fill)}
        </View>
      )}
    </View>
  );
};

Circle.propTypes = {
  style: PropTypes.object,
  size: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.instanceOf(Animated.Value),
  ]).isRequired,
  fill: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
  backgroundWidth: PropTypes.number,
  tintColor: PropTypes.string,
  tintTransparency: PropTypes.bool,
  backgroundColor: PropTypes.string,
  rotation: PropTypes.number,
  lineCap: PropTypes.string,
  arcSweepAngle: PropTypes.number,
  children: PropTypes.func,
  childrenContainerStyle: PropTypes.object,
  padding: PropTypes.number,
  renderCap: PropTypes.func,
  showTulTip: PropTypes.bool,
};

Circle.defaultProps = {
  tintColor: 'black',
  tintTransparency: true,
  rotation: 90,
  lineCap: 'butt',
  arcSweepAngle: 360,
  padding: 0,
  dashedBackground: {width: 0, gap: 0},
  dashedTint: {width: 0, gap: 0},
};

export default Circle;
