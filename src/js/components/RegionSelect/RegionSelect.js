import React, { useCallback, useEffect, useState } from 'react';
import { CImage } from '@coreui/react';
import { useRecoilState } from 'recoil';
import { currentFilterState } from '../../hooks/useQueryTypes';
import { getContinent } from '../../hooks/getContinent';
import worldMap from '../../../images/continent-world-map-2d.svg';
import asia from '../../../images/continent-asia-map-2d.svg';
import oceania from '../../../images/continent-oceania-map-2d.svg';
import southAmerica from '../../../images/continent-south-america-map-2d.svg';
import northAmerica from '../../../images/continent-north-america-map-2d.svg';
import europe from '../../../images/continent-europe-map-2d.svg';
import africa from '../../../images/continent-africa-map-2d.svg';

const RegionSelect = () => {
  const [formData, setFormData] = useRecoilState(currentFilterState);
  const [selectedContinents, setSelectedContinents] = useState([]);
  const [initialLoading, setInitialLoading] = useState(true);

  useEffect(() => {
    if (formData.locationType.continentId) {
      setSelectedContinents(formData.locationType.continentId);
    } else {
      setSelectedContinents([]);
    }
    setInitialLoading(false); // Set initial loading to false once data is loaded
  }, [formData.locationType]);

  const handleChange = useCallback((value) => {
    setSelectedContinents((prevContinents) => {
      if (value === 'worldwide') {
        setFormData((prevData) => ({
          ...prevData,
          locationType: {},
        }));
        return [];
      }

      let newContinents = [...prevContinents];

      if (newContinents.includes(value)) {
        newContinents = newContinents.filter((id) => id !== value);
      } else {
        newContinents.push(value);
      }

      setFormData((prevData) => ({
        ...prevData,
        locationType: newContinents.length === 0 ? {} : { continentId: newContinents },
      }));

      return newContinents;
    });
  }, [setFormData]);

  const isSelected = (value) => selectedContinents.includes(value);

  const isWorldwide = selectedContinents.length === 0 && !initialLoading;

  const renderCheckbox = (id, value, image, label, loading) => {
    const continentId = value === 'worldwide' ? value : getContinent(value).continent_id;
    const checked = value === 'worldwide' ? isWorldwide : isSelected(continentId);

    return (
      <label htmlFor={id} key={id}>
        <input
          name="region"
          id={id}
          type="checkbox"
          value={value}
          checked={loading ? false : checked}
          onChange={() => handleChange(continentId)}
        />
        <div className={`region-item ${checked ? 'selected' : ''}`}>
          <div className="region-image-wrap">
            <CImage
              className="region-image"
              src={image}
            />
          </div>
          <span>{label}</span>
        </div>
      </label>
    );
  };

  return (
    <div className="region-select">
      {initialLoading ? (
        renderCheckbox('worldwide', 'worldwide', worldMap, 'Worldwide', true)
      ) : (
        renderCheckbox('worldwide', 'worldwide', worldMap, 'Worldwide')
      )}
      {renderCheckbox('asia', 'AS', asia, 'Asia')}
      {renderCheckbox('northAmerica', 'NA', northAmerica, 'North America')}
      {renderCheckbox('southAmerica', 'SA', southAmerica, 'South America')}
      {renderCheckbox('europe', 'EU', europe, 'Europe')}
      {renderCheckbox('oceania', 'OC', oceania, 'Oceania')}
      {renderCheckbox('africa', 'AF', africa, 'Africa')}
    </div>
  );
};

export default RegionSelect;
