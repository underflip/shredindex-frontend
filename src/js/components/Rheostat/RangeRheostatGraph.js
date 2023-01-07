import React, { useState } from 'react';
import PropTypes from 'prop-types';
import RheostatTicker from './RheostatTicker/RheostatTicker';

const RangeRheostatGraph = ({
  resortList,
  leftPosition,
  rightPosition,
  sliderMin,
  sliderMax,
  scoreType,
  upperValue,
  lowerValue,
  graphTickerQuantity,
}) => {
  const tickerQuantity = Array.from(Array(graphTickerQuantity).keys());
  const spanPercent = 100 / tickerQuantity.length;
  const resortAverages = [];
  const [maxResortInSpan, setMaxResortInSpan] = useState(0);
  let height = 0;
  let tickers = [];

  // Todo: Remove filter to get average from current data,
  //  as each resort will only have a single data point for rating type
  resortList.forEach((resort) => {
    let avg = 0;
    resort.ratings.filter((rating) => rating.title === scoreType).forEach((score) => {
      avg += score.value;
    });
    avg /= resort.ratings.filter((rating) => rating.title === scoreType).length;
    resortAverages.push(avg);
  });

  // Get maxResortInSpan:
  // Finds the most amount of resorts in a single ticker, so we can utilize full height.
  tickerQuantity.forEach((tick) => {
    const spanLow = spanPercent * tick;
    const spanHigh = spanPercent * tick + spanPercent;

    if (resortAverages.some((el) => el >= spanLow && el < spanHigh)) {
      let resortQty = 0;

      resortAverages.forEach((avg) => {
        if (avg >= spanLow && avg <= spanHigh) {
          resortQty += 1;
        }
        if (maxResortInSpan < resortQty) {
          setMaxResortInSpan(resortQty);
        }
      });
    }
  });

  // Set initial tickers
  tickerQuantity.forEach((tick) => {
    const spanLow = spanPercent * tick;
    const spanHigh = spanPercent * tick + spanPercent;
    let resortQty = 0;

    if (resortAverages.some((el) => el >= spanLow && el < spanHigh)) {
      resortQty = 0;

      resortAverages.forEach((avg) => {
        if (avg >= spanLow && avg <= spanHigh) {
          resortQty += 1;
        }
      });
    }

    height = (100 / maxResortInSpan) * resortQty;

    tickers.push({
      key: tick,
      height: height > 1 ? height : 5,
      backgroundColor: 'light',
    });
  });

  // Change color of graph ticks based on the sliders input.
  if (upperValue < sliderMax) {
    const tickersArray = tickers;

    tickers.forEach((tick) => {
      const tickObj = tick;
      if ((tick.key * spanPercent) > rightPosition) {
        tickObj.backgroundColor = 'dark';
      } else {
        tickObj.backgroundColor = 'light';
      }
      if (tick.key !== tickObj.key) {
        tickersArray.push(tickObj);
      }
    });
    tickers = tickersArray;
  }
  if (lowerValue > sliderMin) {
    const tickersArray = tickers;

    tickers.forEach((tick) => {
      const tickObj = tick;
      if ((tick.key * spanPercent) < leftPosition) {
        tickObj.backgroundColor = 'dark';
      } else if ((tick.key * spanPercent) < rightPosition) {
        tickObj.backgroundColor = 'light';
      }
      if (tick.key !== tickObj.key) {
        tickersArray.push(tickObj);
      }
    });
    tickers = tickersArray;
  }

  return (
    <div className="range-rheostat-graph">
      <div className="range-rheostat-graph__ticker-wrap d-flex justify-content-around">
        {tickers && tickers.map((ticker) => (
          <RheostatTicker
            key={ticker.key}
            value={ticker.height}
            backgroundColor={ticker.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
};

RangeRheostatGraph.defaultProps = {
  resortList: [],
};

RangeRheostatGraph.propTypes = {
  resortList: PropTypes.arrayOf(PropTypes.object.isRequired),
  leftPosition: PropTypes.number.isRequired,
  rightPosition: PropTypes.number.isRequired,
  sliderMin: PropTypes.number.isRequired,
  sliderMax: PropTypes.number.isRequired,
  scoreType: PropTypes.string.isRequired,
  upperValue: PropTypes.number.isRequired,
  lowerValue: PropTypes.number.isRequired,
  graphTickerQuantity: PropTypes.number.isRequired,
};

export default RangeRheostatGraph;
