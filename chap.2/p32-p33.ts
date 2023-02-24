// p32
{
  class ObscuringReferences {
    _data: number[][];

    constructor(data: number[][]) {
      this._data = data;
    }

    get data(): number[][] {
      return this._data;
    }

    diameters(): number[] {
      // 0은 바퀴테(rim), 1은 타이어 높이(tire)
      return this.data.map((cell: number[]) => cell[0] + cell[1] * 2);
    }
  }

  // 밀리미터로 표시된 바퀴테와 타이어 높이의 2차원 배열
  const obscuringReferences = new ObscuringReferences([
    [622, 20],
    [622, 23],
    [559, 30],
    [559, 40],
  ]);

  console.log(obscuringReferences._data); // [[622, 20], [622, 23], [559, 30], [559, 40]];
}

// p33
// * Ruby의 Struct Class를 어떻게 표현하면 좋을지 고민했습니다.
// * 1. rim과 tire라는 프로퍼티를 constructor에서 초기화해주는 Wheel 클래스로 표현
// * 2. rim과 tire라는 프로퍼티를 갖고 있는 Wheel 객체로 표현
// * Ruby의 Struct 클래스는 Typescript의 클래스와 다르게 상속이나 메서드를 정의하는 기능이 제한적이라고 합니다.
// * Struct Class는 Typescript의 Class와 대응은 되지 않지만 Class의 일종이라 생각하며 Class로 작성했습니다.
// * (책 이후 내용에 해당 내용을 Class로 승격 시키는 부분이 나오는 이유이기도 합니다.)
// * (잘못된 부분이나 더 좋은 의견 있으시면 Issues에 남겨주세요🙏)
{
  class RevealingReferences {
    _wheels: Wheel[];

    constructor(data: number[][]) {
      this._wheels = this.wheelify(data);
    }

    get wheels(): Wheel[] {
      return this._wheels;
    }

    diameters(): number[] {
      return this.wheels.map((wheel: Wheel) => wheel.rim + wheel.tire * 2);
    }
    // ... now everyone can sen rim/tire to wheel

    wheelify(data: number[][]): Wheel[] {
      return data.map((cell: number[]) => new Wheel(cell[0], cell[1]));
    }
  }

  // Wheel에 대한 클래스
  class Wheel {
    _rim: number;
    _tire: number;

    constructor(rim: number, tire: number) {
      this._rim = rim;
      this._tire = tire;
    }

    get rim(): number {
      return this._rim;
    }

    get tire(): number {
      return this._tire;
    }
  }
}
