// This Interface declares what properties every Hero should have

// In order for us to use this Interface, we need to export it here
// and import it in the Hero Component class file
export interface Hero {
  id: number;
  name: string;
}