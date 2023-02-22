class Gear23 {
  private _chainRing: number;
  private _cog: number;

  constructor(chainRing: number, cog: number) {
    this._chainRing = chainRing;
    this._cog = cog;
  }

  ratio(): number {
    return this._chainRing / this._cog;
  }
}

console.log(new Gear23(52, 11).ratio());
console.log(new Gear23(30, 27).ratio());
