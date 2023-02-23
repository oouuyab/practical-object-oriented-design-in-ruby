// p30
{
  class Gear {
    _chainRing: number;
    _cog: number;

    constructor(chainRing: number, cog: number) {
      this._chainRing = chainRing;
      this._cog = cog;
    }

    ratio(): number {
      return this._chainRing / this._cog; // <-- 멸망의 길
    }
  }
}

{
  class Gear {
    _chainRing: number;
    _cog: number;

    constructor(chainRing: number, cog: number) {
      this._chainRing = chainRing;
      this._cog = cog;
    }

    get chainRing(): number {
      return this._chainRing;
    }

    get cog(): number {
      return this._cog;
    }

    ratio(): number {
      return this.chainRing / this.cog;
    }
  }
}

{
  class Gear {
    _cog: number;

    // attr_reader를 통해 구현
    get cog(): number {
      return this._cog;
    }
  }
}

// p31
{
  class Gear {
    _cog: number;

    get cog(): number {
      let unanticipatedAdjustmentFactor: any;
      return this._cog * unanticipatedAdjustmentFactor;
    }
  }
}

{
  class Gear {
    _cog: number;

    get cog(): number {
      let foo: any, barAdjustment: any, bazAdjustment: any;

      return this._cog * (foo ? barAdjustment : bazAdjustment);
    }
  }
}
