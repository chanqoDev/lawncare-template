import React from "react";
import styled from "styled-components";

const ColumnsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  width: 100%;
  background-color: #92998d;
  height: 300px;

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

const NumberText = styled.span`
  font-size: 60px;
  color: #f5f5f5;

  @media (max-width: 768px) {
    font-size: 40px;
  }
`;

const DescriptionText = styled.p`
  && {
    font-size: 22px;
    color: #f5f5f5;

    @media (max-width: 768px) {
      font-size: 18px;
    }
  }
`;

const IncrementingNumber = ({ initialValue, increment, interval }) => {
  const [number, setNumber] = React.useState(initialValue);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setNumber((prevNumber) => prevNumber + increment);
    }, interval);

    return () => {
      clearInterval(timer);
    };
  }, [increment, interval]);

  return <NumberText>{number}</NumberText>;
};

const ColumnStats = () => {
  return (
    <ColumnsContainer>
      <Column>
        <NumberText>100%</NumberText>
        <DescriptionText>Client satisfaction</DescriptionText>
      </Column>
      <Column>
        <IncrementingNumber
          initialValue={377}
          increment={3}
          interval={9 * 24 * 60 * 60 * 1000}
        />
        <DescriptionText>Maintenanced Landscape</DescriptionText>
      </Column>
      <Column>
        <NumberText>26</NumberText>
        <DescriptionText>Landscape Design Projects</DescriptionText>
      </Column>
      <Column>
        <NumberText>11</NumberText>
        <DescriptionText>Contractors Appointed</DescriptionText>
      </Column>
    </ColumnsContainer>
  );
};

export default ColumnStats;
