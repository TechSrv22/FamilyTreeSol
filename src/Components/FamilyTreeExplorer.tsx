import React, { useState } from 'react';
import FamilyTree from './FamilyTree';
import { FamilyMember } from './types';

function FamilyTreeExplorer({ rootMembers }: { rootMembers: FamilyMember }) {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input
        type='text'
        placeholder='Search for a family member...'
        value={searchTerm}
        onChange={handleSearchChange}
        style={{ padding: '5px' }}
      />
      <FamilyTree members={rootMembers} searchTerm={searchTerm} />
    </div>
  );
}

export default FamilyTreeExplorer;
