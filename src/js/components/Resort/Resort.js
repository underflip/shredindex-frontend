import React from 'react';
import { useParams } from 'react-router';
import ResortHeader from '../ResortHeader/ResortHeader';
import Ratings from '../Ratings/Ratings';
import Description from '../Description/Description';
import ResortMainInfo from '../config/resort-main-config';

const Resort = () => {
  const resortName = useParams().name;
  const foundResort = ResortMainInfo.find((name) => name.path === resortName);
  return (
    foundResort
      ? (
        <div className="container">
          <ResortHeader resortInfo={foundResort} />
          <Description description={foundResort.description} />
          <Ratings scores={foundResort.scores} />
        </div>
      )
      : <p> No Resort Found </p>
  );
};

export default Resort;
