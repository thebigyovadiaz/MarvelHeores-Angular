export class Heroe {
  constructor(
    public id: string,
    public name: string,
    public description: string,
    public modified: Date,
    public thumbnail: object,
    public resourceURI: string,
    public teamColor: string
  ) {}
}
