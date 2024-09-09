export type FamilyMember = Array<{
  id: number;
  name: string;
  birthYear: number;
  children: FamilyMember;
}>;


