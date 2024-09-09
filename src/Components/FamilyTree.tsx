import React, { useCallback } from 'react';
import { FamilyMember } from './types';
import './FamilyTree.css';

interface FamilyTreeProps {
  members: FamilyMember; // An array of members
  searchTerm: string;
}

const memo: { [key: number]: number } = {};

export const countDescendants = (members: FamilyMember): number => {
  let totalDescendants = 0;

  for (const member of members) {
    if (memo[member.id] !== undefined) {
      totalDescendants += memo[member.id];
      continue;
    }

    // Count immediate children
    let count = member.children.length;

    // Recursively count all descendants of each child
    if (member.children.length > 0) {
      count += countDescendants(member.children);
      console.log(count);
    }

    // Memoize the result for this member
    memo[member.id] = count;
    totalDescendants += count;
  }

  return totalDescendants;
};

const FamilyTree = React.memo(({ members, searchTerm }: FamilyTreeProps) => {
  const shouldHighlight = useCallback(
    (name: string, searchTerm: string) => {
      return (
        searchTerm !== '' &&
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    },
    [searchTerm]
  );

  return (
    <>
      {members.map((member) => (
        <div key={member.id} style={{ marginLeft: '20px', marginTop:'20px' }}>
          <div
            key={member.id}
            className={
              shouldHighlight(member.name, searchTerm)
                ? 'highlighted'
                : 'member'
            }
          >
            {member.name}({countDescendants([member])} descendants)
          </div>
          {member.children && member.children.length > 0 && (
            <FamilyTree members={member.children} searchTerm={searchTerm} />
          )}
        </div>
      ))}
    </>
  );
});

export default FamilyTree;
