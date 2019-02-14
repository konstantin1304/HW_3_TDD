// УСЛОВНЫЕ КОНСТРУКЦИИ


// 1. Условные операторы. Если а – четное посчитать а*б, иначе а+б

describe('getMultipleOrSum', function () {

    it('should return a + b', function () {
        const a = 1;
        const b = 2;
        const expected = 3;

        const actual = getMultipleOrSum(a, b);

        assert.equal(actual, expected);
    });

    it('should return a * b', function () {
        const a = 2;
        const b = 3;
        const expected = 6;

        const actual = getMultipleOrSum(a, b);

        assert.equal(actual, expected);
    });
});

// 2. Условные операторы. Определить какой четверти принадлежит точка с координатами (х,у)

describe('getPointSectionDecart', function (){
    describe( 'should return quarter coordinate', function () {
        const testData = [
            {a: 0, b: 0, expected: 'Coordinate center'},
            {a: 1, b: 1, expected: '1 quarter'},
            {a: -1, b: 1, expected: '2 quarter'},
            {a: -1, b: -1, expected: '3 quarter'},
            {a: 1, b: -1, expected: '4 quarter'},
            {a: 1, b: 0, expected: 'axis X'},
            {a: -1, b: 0, expected: 'axis X'},
            {a: 0, b: 1, expected: 'axis Y'},
            {a: 0, b: -1, expected: 'axis Y'}
        ];
        testData.forEach(function (data) {
            const {a, b, expected} = data;

            it(`should return ${expected} when X = ${a} Y = ${b}`, function () {
                const actual = getPointSectionDecart(a, b);
                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 3. Условные операторы. Найти суммы только положительных из трех чисел

describe('getSumPositiveOfNumber', function () {
    describe('returns sum of positive numbers', function () {
        const testData = [{
            a: 1,
            b: -1,
            c: 0,
            expected: 1
        },
            {
                a: 2,
                b: -2,
                c: 1,
                expected: 3
            },
            {
                a: 5,
                b: 2,
                c: 0,
                expected: 7
            },
            {
                a: -1,
                b: -1,
                c: 2,
                expected: 2
            },
        ];

        testData.forEach(function (params) {
            const {
                a,
                b,
                c,
                expected
            } = params;

            it(`should return ${expected} when a = ${a}, b = ${b}, c = ${c}`, function () {
                const actual = getSumPositiveOfNumber(a, b, c);

                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 4. Условные операторы. Посчитать выражение макс(а*б*с, а+б+с)+3

describe('getMaxExpression', function (){
    describe( 'should return max value', function () {
        const testData = [
            {a: 0, b: 0, c: 0, expected: 3},
            {a: 0, b: 0, c : 1, expected: 4},
            {a: 1, b: 1, c : 1, expected: 6},
            {a: 1, b: 1, c : 0.5, expected: 5.5},
            {a: 1, b: 1, c : 2, expected: 7},
            {a: 1, b: 1, c : -1, expected: 4},
            {a: 1, b: 1, c : -0.5, expected: 4.5},
            {a: 1, b: 1, c : -2, expected: 3}


        ];
        testData.forEach(function (data) {
            const {a, b, c, expected} = data;

            it(`should return ${expected} when a = ${a} b = ${b} c = ${c}` , function () {
                const actual = getMaxExpression(a, b, c);
                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 5. Условные операторы. Написать программу определения оценки студента по его рейтингу

describe('getRankStudent', function () {
    describe('returns student mark by his rating', function () {
        const testData = [{
            rating: 0,
            expected: 'F'
        },
            {
                rating: 1,
                expected: 'F'
            },
            {
                rating: 10,
                expected: 'F'
            },
            {
                rating: 18,
                expected: 'F'
            },
            {
                rating: 19,
                expected: 'F'
            },
            {
                rating: 20,
                expected: 'E'
            },
            {
                rating: 25,
                expected: 'E'
            },
            {
                rating: 29,
                expected: 'E'
            },
            {
                rating: 30,
                expected: 'E'
            },
            {
                rating: 39,
                expected: 'E'
            },
            {
                rating: 40,
                expected: 'D'
            },
            {
                rating: 49,
                expected: 'D'
            },
            {
                rating: 50,
                expected: 'D'
            },
            {
                rating: 59,
                expected: 'D'
            },
            {
                rating: 60,
                expected: 'C'
            },
            {
                rating: 64,
                expected: 'C'
            },
            {
                rating: 70,
                expected: 'C'
            },
            {
                rating: 74,
                expected: 'C'
            },
            {
                rating: 75,
                expected: 'B'
            },
            {
                rating: 79,
                expected: 'B'
            },
            {
                rating: 80,
                expected: 'B'
            },
            {
                rating: 89,
                expected: 'B'
            },
            {
                rating: 90,
                expected: 'A'
            },
            {
                rating: 96,
                expected: 'A'
            },
            {
                rating: 100,
                expected: 'A'
            }

        ];

        testData.forEach(function (params) {
            const {
                rating,
                expected
            } = params;

            it(`should return ${expected} when rating is ${rating}`, function () {

                const actual = getRankStudent(rating);

                assert.strictEqual(actual, expected);
            });
        });
    });
    describe(`throw Error with rating student without of range`, function () {
        const testData = [-1, -100, 101, 202];

        testData.forEach(function (rating) {
            it(`should throw Error when rating is ${rating}`, function () {
                assert.throw(function () {
                    getRankStudent(rating);
                }, 'Error: rating student without of range');
            });
        });
    });

});


//ЦИКЛЫ


// 1. Циклы. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

describe(`getSumOfEvenNumber1_99`, function () {
    describe(`returns sum of even numbers with range between 1 to 99`, function () {
        const testData = [{
            sum: 2450,
            quantity: 50
        }];

        testData.forEach(function (data) {
            const {
                sum,
                quantity
            } = data;
            it(`should return sum = ${sum} when quantity = ${quantity}`, function () {
                const actual = getSumOfEvenNumber1_99();

                assert.equal(actual, sum);
            });
        });
    });
});


// 2. Циклы. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

describe('checkPrimeNumber', function (){
    describe( 'should return checking whether the number is prime', function () {
        const testData = [
            {a: 1, expected: '1 is prime number'},
            {a: 2, expected: '2 is prime number'},
            {a: 3, expected: '3 is prime number'},
            {a: 5, expected: '5 is prime number'},
            {a: 7, expected: '7 is prime number'},
            {a: 11, expected: '11 is prime number'},
            {a: 17, expected: '17 is prime number'},
            {a: 4, expected: '4 is composite number'},
            {a: 10, expected: '10 is composite number'}
        ];
        testData.forEach(function (data) {
            const {a, expected} = data;

            it(`should return ${expected} when a = ${a}` , function () {
                const actual = checkPrimeNumber(a);
                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 3. Циклы.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и
// метод бинарного поиска)

// Вариант последовательного подбора

describe(`checkSqrt`, function () {
    describe(`find the root of a natural number ==> sequential selection`, function () {
        const testData = [{
            a: 0,
            expected: 0
        },
            {
                a: 1,
                expected: 1
            },
            {
                a: 4,
                expected: 2
            },
            {
                a: 9,
                expected: 3
            },
            {
                a: 16,
                expected: 4
            },
            {
                a: 81,
                expected: 9
            },
            {
                a: 121,
                expected: 11
            }
        ];

        testData.forEach(function (params) {
            const {
                a,
                expected
            } = params;

            it(`should return sqrt = ${expected} when number = ${a}`, function () {
                const actual = checkSqrt(a);

                assert.strictEqual(actual, expected);
            });
        });
    });
// метод бинарного поиска ...
    describe(`find the root of a natural number ==> binary search`, function () {
        const testData = [{
            a: 0,
            expected: 0
        },
            {
                a: 1,
                expected: 1
            },
            {
                a: 4,
                expected: 2
            },
            {
                a: 9,
                expected: 3
            },
            {
                a: 16,
                expected: 4
            },
            {
                a: 81,
                expected: 9
            },
            {
                a: 121,
                expected: 11
            }
        ];

        testData.forEach(function (params) {
            const {
                a,
                expected
            } = params;

            it(`should return sqrt = ${expected} when number = ${a}`, function () {
                const actual = checkSqrtBinSearch(a);

                assert.strictEqual(actual, expected);
            });
        });
    });
});


// 4. Циклы. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

describe('getFactorial', function (){
    describe( 'Should return factorial', function () {
        const testData = [
            {a: 1, expected: 1},
            {a: 2, expected: 2},
            {a: 3, expected: 6},

        ];
        testData.forEach(function (data) {
            const {a, expected} = data;

            it(`should return ${expected} when a = ${a}` , function () {
                const actual = getFactorial(a);
                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 5. Циклы.Посчитать сумму цифр заданного числа

describe(`calcSumOfNumber`, function () {
    const testData = [
        {a: 123, expected: 6},
        {a: 777, expected: 21},
        {a: 1234, expected: 10},
        {a: 123455, expected: 20},
        {a: 9999999, expected: 63}
    ];

    testData.forEach(function (params) {
        const {a,expected} = params;

        it(`should return sum = ${expected} when number ==> ${a}`, function () {
            const actual = calcSumOfNumber(a);
            assert.strictEqual(actual,expected);
        });
    });
});


/* 6. Циклы. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321. */

describe('getReverseNumber', function (){
    describe( 'Should return mirror image of a sequence of digits of a given number', function () {
        const testData = [
            {a: 1, expected: '1'},
            {a: 12, expected: '21'},
            {a: 123, expected: '321'},
            {a: 54321, expected: '12345'}


        ];
        testData.forEach(function (data) {
            const {a, expected} = data;

            it(`should return ${expected} when a = ${a}` , function () {
                const actual = getReverseNumber(a);
                assert.strictEqual(actual, expected);
            });

        });
    });
});


//МАССИВЫ


// 1. Одномерные массивы. Найти минимальный элемент массива

describe('getMinArrayElement', function () {
    describe('returns min element from array', function () {
        const testData = [{
            array: [],
            expected: null
        },
            {
                array: [1],
                expected: 1
            },
            {
                array: [0, 1, 2, 3, 4, 5],
                expected: 0
            },
            {
                array: [5, 4, 3, 2, 1, 0],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 2
            },
            {
                array: [5, 5, 5, 5, 5, 5],
                expected: 5
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getMinArrayElement(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 2. Одномерные массивы. Найти максимальный элемент массива

describe('getMaxArrayElement', function () {
    describe('returns max element from array', function () {
        const testData = [{
                array: [],
                expected: null
            },
            {
                array: [1],
                expected: 1
            },
            {
                array: [0, 1, 2, 3, 4, 5],
                expected: 5
            },
            {
                array: [5, 4, 3, 2, 1, 0],
                expected: 5
            },
            {
                array: [3, 2],
                expected: 3
            },
            {
                array: [5, 5, 5, 5, 5, 5],
                expected: 5
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getMaxArrayElement(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 3. Одномерные массивы. Найти индекс минимального элемента массива

describe('getMinArrayElementIndex', function () {
    describe('returns min element index from array', function () {
        const testData = [{
            array: [],
            expected: null
        },
            {
                array: [1],
                expected: 0
            },
            {
                array: [0, 1, 2, 3, 4, 5],
                expected: 0
            },
            {
                array: [5, 4, 3, 2, 1, 0],
                expected: 5
            },
            {
                array: [3, 2],
                expected: 1
            },
            {
                array: [5, 5, 5, 5, 5, 5],
                expected: 0
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getMinArrayElementIndex(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 4. Одномерные массивы. Найти индекс максимального элемента массива

describe('getMaxArrayElementIndex', function () {
    describe('returns max element index from array', function () {
        const testData = [{
            array: [],
            expected: null
        },
            {
                array: [1],
                expected: 0
            },
            {
                array: [0, 1, 2, 3, 4, 5],
                expected: 5
            },
            {
                array: [5, 4, 3, 2, 1, 0],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 0
            },
            {
                array: [5, 5, 5, 5, 5, 5],
                expected: 0
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getMaxArrayElementIndex(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});


// 5. Одномерные массивы. Посчитать сумму элементов массива с нечетными индексами

describe(`getSumArrayElemOdd`, function () {
    describe('returns sum of element array with odd index', function () {
        const testData = [{
            array: [],
            expected: null
        },
            {
                array: [1],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 2
            },
            {
                array: [3, 2, 1, 0, 4, 5],
                expected: 7
            },
            {
                array: [3, 2, 1, 2, 4, 5, 6 , -7],
                expected: 2
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sum of el with odd index ${expected} if array is ${array}`, function () {
                const actual = getSumArrayElemOdd(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 6. Одномерные массивы. Сделать реверс массива (массив в обратном направлении)

describe('getReverseArray', function () {
    describe('returns revesed array', function () {
        const testData = [{
                array: [],
                expected: []
            },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [1,2,3],
                expected: [3,2,1]
            },
            {
                array: [5,4,3,2,1],
                expected: [1,2,3,4,5]
            },
            {
                array: [5, 5, 5, 5, 5, 5],
                expected: [5, 5, 5, 5, 5, 5]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getReverseArray(array);

                assert.sameMembers(actual, expected);
            });
        });
    });

    /*describe('returns revesed array', function () {
        const testData = [{
                array: [],
                expected: null
            }];
        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getReverseArray(array);

                assert.strictEqual(actual, expected);
            });
        });
    });*/
});

// 7. Одномерные массивы. Посчитать количество нечетных элементов массива.

describe(`getOddArrayElem`, function () {
    describe('returns quantity of element array with odd index', function () {
        const testData = [{
            array: [],
            expected: null
        },
            {
                array: [1],
                expected: 0
            },
            {
                array: [3, 2],
                expected: 1
            },
            {
                array: [3, 2, 1, 0, 4, 5],
                expected: 3
            },
            {
                array: [3, 2, 1, 2, 4, 5, 6 , -7],
                expected: 4
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return quantity of element with odd index ${expected} if array is ${array}`, function () {
                const actual = getOddArrayElem(array);

                assert.strictEqual(actual, expected);
            });
        });
    });
});

// 8. Одномерные массивы. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4,
// результат 3 4 1 2

describe('getReplaceArrayParts', function () {
    describe('returns swaped parts', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1],
                expected: [1]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [1, 2, 3],
                expected: [3, 2, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [2, 1, 3, 5,4]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [7, 9, 0, 2, 3, 5]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = getReplaceArrayParts(array);

                assert.sameMembers(actual, expected);
            });
        });
    });
});

// 9. Одномерные массивы. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// bubble

describe(`Sorting Array`, function () {
    describe('returns sorted array (Bubble sorting)', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2],
                expected: [2,1]
            },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sorted array ${expected} if array is ${array}`, function () {
                const actual = bubbleSorted(array);

                assert.sameMembers(actual, expected);
            });
        });
    });

    describe('returns sorted array (Selection sorting)', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2],
                expected: [2,1]
            },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sorted array ${expected} if array is ${array}`, function () {
                const actual = selectionSorted(array);

                assert.sameMembers(actual, expected);
            });
        });
    });

    describe('returns sorted array (Insertion sorting)', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2],
                expected: [2,1]
            },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return sorted array ${expected} if array is ${array}`, function () {
                const actual = insertionSorted(array);

                assert.sameMembers(actual, expected);
            });
        });
    });
});


// 10. Одномерные массивы. Отсортировать массив (Quick, Merge+, Shell, Heap)

// Quick
describe('quickSorted', function () {
    describe('returns sorted array', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = quickSorted(array);

                assert.sameMembers(actual, expected);
            });
        });
    });
});

// Merge
describe('mergeSorted', function () {
    describe('returns sorted array', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = mergeSorted(array);

                assert.sameMembers(actual, expected);
            });
        });
    });
});

// Shell
describe('shellSorted', function () {
    describe('returns sorted array', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                const actual = shellSorted(array);

                assert.sameMembers(actual, expected);
            });
        });
    });
});

// Heap
describe('heapSort', function () {
    describe('returns sorted array', function () {
        const testData = [{
            array: [],
            expected: []
        },
            {
                array: [1,2,3,4,5],
                expected: [1,2,3,4,5]
            },
            {
                array: [2,2,2,2,2],
                expected: [2,2,2,2,2]
            },
            {
                array: [1, 2],
                expected: [2, 1]
            },
            {
                array: [5, 4, 3, 2, 1],
                expected: [1, 2, 3, 4, 5]
            },
            {
                array: [2, 3, 5, 7, 9, 0],
                expected: [0, 2, 3, 5, 7, 9]
            }
        ];

        testData.forEach(function (data) {
            const {
                array,
                expected
            } = data;
            it(`should return ${expected} if array is ${array}`, function () {
                shellSorted(array);

                assert.sameMembers(array, expected);
            });
        });
    });
});


// 1. Функции. Получить строковое название дня недели по номеру дня.

describe(`dayOfNumber`, function () {
    describe(`return day of week with number`, function () {
        const testData = [{
            dayNumber: 1,
            expected: 'Monday'
        },
            {
                dayNumber: 2,
                expected: 'Tuesday'
            },
            {
                dayNumber: 3,
                expected: `Wednesday`
            },
            {
                dayNumber: 4,
                expected: 'Thursday'
            },
            {
                dayNumber: 5,
                expected: 'Friday'
            },
            {
                dayNumber: 6,
                expected: 'Saturday'
            },
            {
                dayNumber: 7,
                expected: 'Sunday'
            },
            {
                dayNumber: 8,
                expected: null
            },
            {
                dayNumber: 0,
                expected: null
            }
        ];

        testData.forEach(function (data) {
            const {
                dayNumber,
                expected
            } = data;

            it(`should return ${expected} when day number of week is ${dayNumber}`, function () {
                const actual = dayOfNumber(dayNumber);

                assert.equal(expected, actual);
            });
        });

    });
});

// 2. Функции. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

describe('getDistOfPointDecart', function (){
    describe( 'Should return distance between two points ', function () {
        const testData = [
            {a: 0, b: 0, c: 0, d: 0, expected: 0},
            {a: 1, b: 1, c: 2, d: 2, expected: 1.41},
            {a: -1, b: 1, c: -2, d: 2, expected: 1.41},
            {a: -1, b: -1, c: -2, d: -3,expected: 2.24},
            {a: 1, b: -1, c: 2, d: -3, expected: 2.24},
            {a: 1, b: 0, c: 3, d: 0,expected: 2},
            {a: -1, b: 0, c: -3, d: 0, expected: 2},
            {a: 0, b: 1, c: 0, d: 5,expected: 4},
            {a: 0, b: -1, c: 0, d: -5,expected: 4}
        ];
        testData.forEach(function (data) {
            const {a, b, c, d, expected} = data;

            it(`should return ${expected} when a = ${a} b = ${b}, c = ${c}, d = ${d} `, function () {
                const actual = getDistOfPointDecart(a, b, c, d);
                assert.strictEqual(actual, expected);
            });

        });
    });
});

// 3. Функции. Вводим число(0-999), получаем строку с прописью числа. Для задания 1 расширить диапазон до 999 миллиардов

describe(`numberToString`, function () {
    describe(`return convert number to string`, function () {
        const testData = [
            {
                num: 1234567890,
                expected: `один миллиард двести тридцать четыре миллиона пятьсот шестьдесят семь тысяч восемьсот девяносто`
            },
            {
                num: 2345678920,
                expected: `два миллиарда триста сорок пять миллионов шестьсот семьдесят восемь тысяч девятьсот двадцать`
            },
            {
                num: 3456789111,
                expected: `три миллиарда четыреста пятьдесят шесть миллионов семьсот восемьдесят девять тысяч сто одинадцать`
            },
            {
                num: 5001002012,
                expected: `пять миллиардов один миллион две тысячи двенадцать`
            },
            {
                num: 13014015,
                expected: `тринадцать миллионов четырнадцать тысяч пятнадцать`
            },
            {
                num: 15000016017,
                expected: `пятнадцать миллиардов шестнадцать тысяч семнадцать`
            },
            {
                num: 17019000000,
                expected: `семнадцать миллиардов девятнадцать миллионов`
            },
            {
                num: 1000,
                expected: `одна тысяча`
            }
        ];

        testData.forEach(function (data) {
            const { num, expected } = data;

            it(`should return convert string = ${expected} of number ${num}`, function () {
                const actual = numberToString(num);
                assert.equal(expected, actual);
            });
        });
    });
});

// 4. Функции. Вводим строку с прописью числа. число(0-999) получаем число(0-999). Для задания 1 расширить диапазон до 999 миллиардов

describe(`stringToNubers`, function () {
    describe(`return convert number to string`, function () {
        const testData = [
            {
                num: `один миллиард двести тридцать четыре миллиона пятьсот шестьдесят семь тысяч восемьсот девяносто`,
                expected: 1234567890
            },
            {
                num: `два миллиарда триста сорок пять миллионов шестьсот семьдесят восемь тысяч девятьсот двадцать`,
                expected: 2345678920
            },
            {
                num: `три миллиарда четыреста пятьдесят шесть миллионов семьсот восемьдесят девять тысяч сто одинадцать`,
                expected: 3456789111
            },
            {
                num: `пять миллиардов один миллион две тысячи двенадцать` ,
                expected: 5001002012
            },
            {
                num: `тринадцать миллионов четырнадцать тысяч пятнадцать`,
                expected: 13014015
            },
            {
                num: `пятнадцать миллиардов шестнадцать тысяч семнадцать`,
                expected: 15000016017
            },
            {
                num: `семнадцать миллиардов девятнадцать миллионов`,
                expected: 17019000000
            },
            {
                num: `одна тысяча`,
                expected: 1000
            }
        ];

        testData.forEach(function (data) {
            const { num, expected } = data;

            it(`should return convert string = ${expected} of number ${num}`, function () {
                const actual = stringToNubers(num);
                assert.equal(expected, actual);
            });
        });
    });
});










