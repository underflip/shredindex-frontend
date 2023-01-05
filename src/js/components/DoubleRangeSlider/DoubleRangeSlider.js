import React, { useState } from 'react';
import {
  CFormRange, CFormInput, CFormLabel, CCol, CRow,
} from '@coreui/react';
import PropTypes from 'prop-types';
import RangeRheostatGraph from '../Rheostat/RangeRheostatGraph';

const DoubleRangeSlider = ({
  resortList, sliderMin, sliderMax, scoreType, useGraph, tickerQuantity, className,
}) => {
  const [lowerValue, setLowerValue] = useState(50);
  const [upperValue, setUpperValue] = useState(500);
  const [lowerFieldValue, setLowerFieldValue] = useState(50);
  const [upperFieldValue, setUpperFieldValue] = useState(500);

  const widthSpanPercent = 100 / (sliderMax - sliderMin);
  const leftPosition = (lowerValue - sliderMin) * widthSpanPercent;
  const rightPosition = (upperValue - sliderMin) * widthSpanPercent;
  const rangeWidth = (rightPosition + sliderMin) - (leftPosition + sliderMin);

  function setLowerSlider(targetUpperValue) {
    if ((lowerValue > targetUpperValue - 8) || (targetUpperValue < lowerValue + 8)) {
      if (targetUpperValue >= sliderMax) {
        setLowerValue(parseInt(sliderMax, 10) - 8);
        setLowerFieldValue(parseInt(sliderMax, 10) - 8);
      }
      setLowerValue(Math.max(targetUpperValue - 8, sliderMin));
      setLowerFieldValue(Math.max(targetUpperValue - 8, sliderMin));
      if (targetUpperValue <= sliderMin + 8) {
        setUpperValue(sliderMin + 8);
        setUpperFieldValue(sliderMin + 8);
      }
    }
  }

  function setUpperSlider(targetLowerValue) {
    if ((targetLowerValue > upperValue - 8) || (upperValue < targetLowerValue + 8)) {
      if (targetLowerValue < sliderMax - 8) {
        setUpperValue(targetLowerValue + 8);
        setUpperFieldValue(targetLowerValue + 8);
      }
      setUpperValue(Math.min(targetLowerValue + 8, sliderMax));
      setUpperFieldValue(Math.min(targetLowerValue + 8, sliderMax));
      if (targetLowerValue >= sliderMax - 8) {
        setLowerValue(sliderMax - 8);
        setLowerFieldValue(sliderMax - 8);
      }
    }
  }

  function limitInput(target) {
    if (target > sliderMax) {
      return parseInt(sliderMax, 10);
    } if (target < sliderMin) {
      return parseInt(sliderMin, 10);
    }
    return parseInt(target, 10);
  }

  function handleLowerRangeSliderChange(target) {
    setLowerValue(limitInput(target));
    setLowerFieldValue(limitInput(target));
    setUpperSlider(parseInt(target, 10));
  }

  function handleRangeSliderUpperChange(target) {
    setUpperValue(limitInput(target));
    setUpperFieldValue(limitInput(target));
    setLowerSlider(parseInt(target, 10));
  }

  return (
    <div className={`double-range-slider ${className}`}>
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
        className="range-slider range-slider-lower"
        steps={1}
        min={sliderMin}
        max={sliderMax}
        onChange={(e) => handleLowerRangeSliderChange(e.target.value)}
        value={lowerValue}
      />
      <CFormRange
        id="upper"
        className="range-slider range-slider-upper"
        steps={1}
        min={sliderMin}
        max={sliderMax}
        onChange={(e) => handleRangeSliderUpperChange(e.target.value)}
        value={upperValue}
      />
      <CRow className="mt-5 d-flex justify-content-between p-3">
        <CCol xl={5} lg={5} xs={5}>
          <div className="input-wrap">

            <CFormLabel htmlFor="lowerInput" className="w-100 label-inside-input resort-card__small-label">
              Min
            </CFormLabel>
            <CFormInput
              className="lower-input label-inside-input-padding"
              type="number"
              id="lowerInput"
              label="Min"
              placeholder="0"
              min={sliderMin}
              max={sliderMax}
              onBlur={
              (e) => handleLowerRangeSliderChange(e.target.value)
            }
              onChange={(e) => setLowerFieldValue(parseInt(e.target.value, 10))}
              value={lowerFieldValue}
            />
          </div>
        </CCol>
        <CCol xl={2} lg={2} xs={2} className="d-flex justify-content-center align-items-center">
          -
        </CCol>
        <CCol xl={5} lg={5} xs={5}>
          <div className="input-wrap">
            <CFormLabel htmlFor="upperInput" className="w-100 label-inside-input resort-card__small-label">
              Max
            </CFormLabel>
            <CFormInput
              className="upper-input label-inside-input-padding"
              type="number"
              id="upperInput"
              label="Max"
              placeholder="0"
              min={sliderMin}
              max={sliderMax}
              onBlur={
              (e) => handleRangeSliderUpperChange(e.target.value)
            }
              onChange={(e) => setUpperFieldValue(parseInt(e.target.value, 10))}
              value={upperFieldValue}
            />
          </div>
        </CCol>
      </CRow>
    </div>
  );
};

DoubleRangeSlider.defaultProps = {
  resortList: [],
  sliderMin: 0,
  sliderMax: 100,
  useGraph: false,
  tickerQuantity: 20,
  className: '',
};

DoubleRangeSlider.propTypes = {
  resortList: PropTypes.arrayOf(PropTypes.shape({})),
  sliderMin: PropTypes.number,
  sliderMax: PropTypes.number,
  useGraph: PropTypes.bool,
  tickerQuantity: PropTypes.number,
  scoreType: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DoubleRangeSlider;
