import React, { useState } from 'react';
import {
  CFormRange, CFormInput, CFormLabel, CCol, CRow,
} from '@coreui/react';
import PropTypes from 'prop-types';
import RangeRheostatGraph from '../Rheostat/RangeRheostatGraph';

const DoubleRangeSlider = ({
  resortList, sliderMin, sliderMax, scoreType, useGraph, tickerQuantity,
}) => {
  const [lowerValue, setLowerValue] = useState(50);
  const [upperValue, setUpperValue] = useState(500);
  const [lowerFieldValue, setLowerFieldValue] = useState(50);
  const [upperFieldValue, setUpperFieldValue] = useState(500);

  const widthSpanPercent = 100 / (sliderMax - sliderMin);
  const leftPosition = (lowerValue - sliderMin) * widthSpanPercent;
  const rightPosition = (upperValue - sliderMin) * widthSpanPercent;
  const rangeWidth = (rightPosition + sliderMin) - (leftPosition + sliderMin);

  if (lowerValue > upperValue - 8) {
    if (lowerValue < sliderMax - 8) {
      setUpperValue(lowerValue + 8);
      setUpperFieldValue(lowerValue + 8);
    }

    if (upperValue === sliderMax) {
      setLowerValue(parseInt(sliderMax, 10) - 8);
      setLowerFieldValue(parseInt(sliderMax, 10) - 8);
    }
  }

  if (upperValue < lowerValue + 8) {
    if (lowerValue <= sliderMin) {
      setUpperValue(lowerValue + 8);
      setUpperFieldValue(lowerValue + 8);
    } else {
      setLowerValue(Math.max(upperValue - 8, sliderMin));
      setLowerFieldValue(Math.max(upperValue - 8, sliderMin));
    }
  }

  function limitInput(target) {
    if (target > sliderMax) {
      return sliderMax;
    } if (target < sliderMin) {
      return sliderMin;
    }
    return target;
  }

  return (
    <div className="double-range-slider">
      {useGraph
        && (
        <RangeRheostatGraph
          scoreType={scoreType}
          resortList={resortList}
          leftPosition={leftPosition}
          rightPosition={rightPosition}
          sliderMin={sliderMin}
          sliderMax={sliderMax}
          upperValue={upperValue}
          lowerValue={lowerValue}
          graphTickerQuantity={tickerQuantity}
        />
        )}
      <div className="range-slider-wrap">
        <div className="range-slider-range" style={{ left: `${leftPosition.toString()}%`, width: `${rangeWidth.toString()}%` }} />
      </div>
      <CFormRange
        id="lower"
        className="range-slider"
        steps={1}
        min={sliderMin}
        max={sliderMax}
        onChange={(e) => {
          setLowerValue(parseInt(limitInput(e.target.value), 10));
          setLowerFieldValue(parseInt(limitInput(e.target.value), 10));
        }}
        value={lowerValue}
      />
      <CFormRange
        id="upper"
        className="range-slider"
        steps={1}
        min={sliderMin}
        max={sliderMax}
        onChange={(e) => {
          setUpperValue(parseInt(limitInput(e.target.value), 10));
          setUpperFieldValue(parseInt(limitInput(e.target.value), 10));
        }}
        value={upperValue}
      />
      <CRow className="mt-5 d-flex justify-content-between p-3">
        <CCol xl={5} lg={5} xs={5}>
          <CFormLabel htmlFor="lowerInput" className="w-100 label-inside-input resort-card__small-label">
            Min
          </CFormLabel>
          <CFormInput
            className="label-inside-input-padding"
            type="number"
            id="lowerInput"
            label="Min"
            placeholder="0"
            min={sliderMin}
            max={sliderMax}
            onBlur={
              (e) => {
                setLowerValue(parseInt(limitInput(e.target.value), 10));
                setLowerFieldValue(parseInt(limitInput(e.target.value), 10));
              }
            }
            onChange={(e) => setLowerFieldValue(parseInt(e.target.value, 10))}
            value={lowerFieldValue}
          />
        </CCol>
        <CCol xl={2} lg={2} xs={2} className="d-flex justify-content-center align-items-center">
          -
        </CCol>
        <CCol xl={5} lg={5} xs={5}>
          <CFormLabel htmlFor="maxInput" className="w-100 label-inside-input resort-card__small-label">
            Max
          </CFormLabel>
          <CFormInput
            className="label-inside-input-padding"
            type="number"
            id="maxInput"
            label="Max"
            placeholder="0"
            min={sliderMin}
            max={sliderMax}
            onBlur={
              (e) => {
                setUpperFieldValue(parseInt(limitInput(e.target.value), 10));
                setUpperValue(parseInt(limitInput(e.target.value), 10));
              }
            }
            onChange={(e) => setUpperFieldValue(parseInt(e.target.value, 10))}
            value={upperFieldValue}
          />
        </CCol>
      </CRow>
    </div>
  );
};

DoubleRangeSlider.defaultProps = {
  resortList: [],
  sliderMin: 0,
  sliderMax: 100,
  useGraph: true,
  tickerQuantity: 20,
};

DoubleRangeSlider.propTypes = {
  resortList: PropTypes.arrayOf(PropTypes.shape({})),
  sliderMin: PropTypes.number,
  sliderMax: PropTypes.number,
  useGraph: PropTypes.bool,
  tickerQuantity: PropTypes.number,
  scoreType: PropTypes.string.isRequired,
};

export default DoubleRangeSlider;
