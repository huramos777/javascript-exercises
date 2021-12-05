const {
    minutesSeconds,
    sameLength,
    sayHello,
    isEven,
    isOdd,
    arraySum,
    findInArray,
    average,
    anualSalary,
    randomNumbers,
    triangleArea,
    isVowel,
    findTheWord,
    createObject,
    highestRating,
    objectKeys,
    showRespectToRiquelme
  } = require('../exercises.js');

  // do not touch
  // ---------------------------------------------------------------------------------------------------------------
  
  describe('Functions', function() {
    describe('minutesSeconds', function() {
      it('should return 300 for 5', function() {
          expect(minutesSeconds(5)).toStrictEqual(300);
      });
      it('should return 180 for 3', function() {
        expect(minutesSeconds(3)).toStrictEqual(180);
      });
    });

    describe('sameLength', function() {
      it('should return true for string1 = hola, and string2 = chau', function() {
          expect(sameLength('hola', 'chau')).toStrictEqual(true);
      });
      it('should return false for string1 = simon, and string2 = camila', function() {
        expect(sameLength('simon', 'camila')).toStrictEqual(false);
      });
    });

    describe('sayHello', function() {
      it('should return the correct string', function() {
          expect(sayHello('a', 1)).toStrictEqual('Hi, my name is a. I am 1 years old.');
      });
    });

    describe('isEven', function() {
      it('should return true for number = 100', function() {
          expect(isEven(100)).toStrictEqual(true);
      });
      it('should return false for number = 12345', function() {
        expect(isEven(12345)).toStrictEqual(false);
      });
    });

    describe('isOdd', function() {
      it('should return true for number = 25', function() {
          expect(isOdd(25)).toStrictEqual(true);
      });
      it('should return false for number = 30', function() {
        expect(isOdd(30)).toStrictEqual(false);
      });
    });

    describe('arraySum', function() {
      it('should return 10 for [2, 3, 5]', function() {
          expect(arraySum([2, 3, 5])).toStrictEqual(10);
      });
      it('should return 18 for [5, 1, 2, 10]', function() {
        expect(arraySum([5, 1, 2, 10])).toStrictEqual(18);
      });
    });

    describe('findInArray', function() {
      it('should return true for [1, 2, 3, 4, 5] and 3', function() {
          expect(findInArray([1, 2, 3, 4, 5], 3)).toStrictEqual(true);
      });
      it('should return false for [1, 2, 3, 4, 5] and 6', function() {
        expect(findInArray([1, 2, 3, 4, 5], 6)).toStrictEqual(false);
    });
    });
  
    describe('average', function() {
      it('should return 2 for [1,2,3]', function() {
          expect(average([1,2,3])).toBe(2)
      })
      it('should return 11 for [10, 20, 3]', function() {
        expect(average([10, 20, 3])).toBe(11)
      })
      it('should return 1 for [1, 1, 1, 1]', function() {
        expect(average([1, 1, 1, 1])).toBe(1)
      })
    })
  
    describe('anualSalary',function(){
      var employees = [{
         nombre: 'name1',
         salario: 1000,
       },
       {
         nombre: 'name2',
         salario: 4000,
       },
       {
         nombre: 'name3',
         salario: 500,
       }
      ];
      it('should return 12000', function(){
        expect(anualSalary(employees, 'name1')).toBe(12000);
      })
      it('should return 48000', function() {
        expect(anualSalary(employees, 'name2')).toBe(48000);
      })
      it('should return 6000', function() {
        expect(anualSalary(employees, 'name3')).toBe(6000);
      })
    })

    describe('randomNumbers', function() {
      it('should pass for number = 3', function() {
          expect(randomNumbers(3).length).toBe(3)
      })
      it('should pass for number = 10', function() {
        expect(randomNumbers(10).length).toBe(10)
      })
    })

    describe('triangleArea', function() {
      it('should return 150 for 10 and 20', function() {
          expect(triangleArea(10, 20)).toBe(100)
      })
      it('should return 5 for 5 and 2', function() {
        expect(triangleArea(5, 2)).toBe(5)
      })
    })

    describe('isVowel', function() {
      it('should return true for string1 = hola, and string2 = chau', function() {
          expect(isVowel('e')).toStrictEqual('Is vowel');
      });
      it('should return true for string1 = hola, and string2 = chau', function() {
        expect(isVowel('g')).toStrictEqual('Is not vowel');
      });
      it('should return true for string1 = hola, and string2 = chau', function() {
        expect(isVowel(5)).toStrictEqual('Incorrect data');
      });
      it('should return true for string1 = hola, and string2 = chau', function() {
        expect(isVowel('as')).toStrictEqual('Incorrect data');
      });
    });
  
    describe('findTheWord', function() {
      it('should return true for "i like working at viseven"', function() {
          expect(findTheWord('i like working at viseven')).toBe(true);
      });
      it('should return false for "the apple is red"', function() {
        expect(findTheWord('the apple is red')).toBe(false);
      });
    });

    describe('createObject', function() {
      it('should pass for the test data', function() {
          expect(createObject('a', 'a', 1, 'a')).toStrictEqual({
            "name": 'a',
            "surname": 'a',
            "age": 1,
            "city": 'a',
          })
      });
    });

    describe('highestRating', function() {
      it('should pass for the test data', function() {
          expect(highestRating(players)).toBe('The best player is Soledad, with 9999 points.')
      });
    });

    describe('objectKeys', function() {
      it('should pass for the test data', function() {
          expect(objectKeys(employee)).toStrictEqual(['name', 'age', 'city', 'company'])
      });
    });

    describe('showRespectToRiquelme', function() {
      it('should pass for the test data', function() {
          expect(showRespectToRiquelme(people)).toStrictEqual([
            { name: 'Cintia' },
            { name: 'Rafael' },
            { name: 'Agustin' },
            { name: 'Soledad'},
            { name: 'Riquelme', respect: 'You are the best'},
            { name: 'Anatolii'},
            { name: 'Camila'},
            { name: 'Simon'},
          ])
      });
    });
  });

const players = [
  { name: 'Cintia', rating: 2000 },
  { name: 'Rafael', rating: 3000 },
  { name: 'Agustin', rating: 1200 },
  { name: 'Soledad', rating: 9999 },
]

const employee = {
  name: 'Cinthia',
  age: 32,
  city: 'CABA',
  company: 'Viseven'
}

const people = [
  { name: 'Cintia' },
  { name: 'Rafael' },
  { name: 'Agustin' },
  { name: 'Soledad'},
  { name: 'Riquelme'},
  { name: 'Anatolii'},
  { name: 'Camila'},
  { name: 'Simon'},
]