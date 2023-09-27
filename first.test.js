import { isPrime } from "./first.js";

describe("Проверка функции isPrime", () => {
  it("Проверка чисел на составность", () => {
    expect(isPrime(-11  )).toBe("incorrect arg");
    expect(isPrime( 0   )).toBe("incorrect arg");
    expect(isPrime( 1   )).toBe("incorrect arg");
    expect(isPrime( 9   )).toBe("composite"    );
    expect(isPrime( 10  )).toBe("composite"    );
    expect(isPrime( 17  )).toBe("prime"        );
    expect(isPrime( 777 )).toBe("composite"    );
    expect(isPrime( 800 )).toBe("composite"    );
    expect(isPrime( 1000)).toBe("composite"    );
    expect(isPrime( 1001)).toBe("incorrect arg");
  });
});
