{
  class Gear {
    _chainRing: number;
    _cog: number;
    _rim: number;
    _tire: number;

    constructor(chainRing: number, cog: number, rim: number, tire: number) {
      this._chainRing = chainRing;
      this._cog = cog;
      this._rim = rim;
      this._tire = tire;
    }

    get chainRing(): number {
      return this._chainRing;
    }

    get cog(): number {
      return this._cog;
    }

    get rim(): number {
      return this._rim;
    }

    get tire(): number {
      return this._tire;
    }

    ratio(): number {
      return this.chainRing / this.cog;
    }

    gearInches(): number {
      return this.ratio() * (this.rim + this.tire * 2);
    }
  }

  console.log(new Gear(52, 11, 26, 1.5).gearInches());
  console.log(new Gear(52, 11, 24, 1.25).gearInches());

  // ! 다음 코드는 에러가 발생한다. (이전에 작성한 코드)
  console.log(new Gear(52, 11).ratio());
}
