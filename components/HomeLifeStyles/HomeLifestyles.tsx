import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import HomeRankedResortList from '../RankedResortList/HomeRankedResortList';
import HomeLifeStylesFilterButtons from '../RankedResortList/HomeLifeStylesFilterButtons';

type Lifestyle = 'Family' | 'Beginner' | 'Advanced' | 'Powder' | 'Nightlife'; // Add other lifestyle options as needed

const HomeLifeStyles: React.FC = () => {
  const [selectedLifestyle, setSelectedLifestyle] = useState<Lifestyle>('Family');

  const handleSetLifeStyle = (lifestyle: Lifestyle) => {
    setSelectedLifestyle(lifestyle);
  };

  return (
    <div className="home-lifestyles mb-4">
      <div className="home-lifestyles-title mb-4">
        <h4>
          <FormattedMessage
            id="shredindex.filter.LIFESTYLES"
            defaultMessage="Lifestyles"
          />
        </h4>
      </div>
      <div className="home-lifestyles-buttons mb-4">
        <HomeLifeStylesFilterButtons setLifeStyle={handleSetLifeStyle} />
      </div>
      <div className="home-lifestyles-cards">
        <HomeRankedResortList lifestyle={selectedLifestyle} cardLimit={3} />
      </div>
    </div>
  );
};

export default HomeLifeStyles;
