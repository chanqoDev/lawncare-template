import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 100px 0;
  width: 100%;
  maxwidth: "1200px";
  background-color: #92998d;
  height: 200px;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    height: auto;
    padding-top: 25px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  border-right: 1px solid #f5f5f5;
  padding-right: 20px;

  &:last-child {
    border-right: none;
    padding-right: 0;
  }

  @media (max-width: 768px) {
    flex-basis: 50%;
    border-bottom: 1px solid #f5f5f5;
    padding-right: 0;
    padding-bottom: 20px;
    border-right: none;

    &:last-child {
      border-bottom: none;
    }
  }
`;

const NumberText = styled(animated.span)`
  font-size: 52px;
  color: #f5f5f5;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const DescriptionText = styled(animated.p)`
  && {
    font-size: 22px;
    color: #f5f5f5;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const IncrementingNumber = ({ initialValue, finalValue, interval }) => {
  // eslint-disable-next-line
  const [number, setNumber] = React.useState(0);
  const numberProps = useSpring({
    number: finalValue,
    from: { number: 0 },
    config: { duration: interval },
    onRest: () => {
      setNumber(finalValue);
    },
  });

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setNumber(finalValue);
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [setNumber, finalValue, interval]);

  return (
    <NumberText>
      {numberProps.number.interpolate((val) => Math.floor(val))}
    </NumberText>
  );
};

const ColumnStats = () => {
  return (
    <ColumnsContainer>
      <Column>
        <NumberText>100%</NumberText>
        <DescriptionText>Client satisfaction</DescriptionText>
      </Column>
      <Column>
        <IncrementingNumber initialValue={0} finalValue={377} interval={3000} />
        <DescriptionText>Maintained Landscape</DescriptionText>
      </Column>
      <Column>
        <IncrementingNumber initialValue={0} finalValue={26} interval={3000} />
        <DescriptionText>Landscape Design Projects</DescriptionText>
      </Column>
      <Column>
        <IncrementingNumber initialValue={0} finalValue={11} interval={3000} />
        <DescriptionText>Contractors Appointed</DescriptionText>
      </Column>
    </ColumnsContainer>
  );
};

export default ColumnStats;
