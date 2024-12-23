const questions = [
    // Round 1
    [
        {
            question: "What is the greatest common divisor (gcd) of 56 and 98?",
            options: ["14", "28", "7", "49"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 12 and 18?",
            options: ["36", "72", "48", "60"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 72?",
            options: ["12", "18", "24", "36"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 210?",
            options: ["2 × 3 × 5 × 7", "2 × 3 × 5 × 11", "2 × 3 × 7 × 11", "2 × 5 × 7 × 11"],
            correct: 0,
        },
        {
            question: "What is the value of Euler's totient function φ(15)?",
            options: ["8", "10", "12", "6"],
            correct: 0,
        },
    ],

    // Round 2
    [
        {
            question: "What is the remainder when 348 is divided by 7?",
            options: ["6", "5", "4", "3"],
            correct: 0,
        },
        {
            question: "What is the largest prime factor of 156?",
            options: ["13", "11", "7", "5"],
            correct: 0,
        },
        {
            question: "What is the number of prime numbers between 1 and 30?",
            options: ["8", "9", "7", "10"],
            correct: 0,
        },
        {
            question: "Find the sum of all divisors of 36.",
            options: ["55", "40", "45", "60"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 128 and 225?",
            options: ["1", "2", "16", "8"],
            correct: 0,
        },
    ],

    // Round 3
    [
        {
            question: "What is the LCM of 15, 25, and 35?",
            options: ["1050", "175", "1750", "350"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 180?",
            options: ["2 × 3 × 5 × 3", "2 × 3 × 3 × 5", "2 × 3 × 2 × 5", "2 × 5 × 3 × 3"],
            correct: 0,
        },
        {
            question: "Find the value of 5^3 mod 12.",
            options: ["5", "9", "1", "3"],
            correct: 0,
        },
        {
            question: "How many divisors does 84 have?",
            options: ["12", "16", "14", "10"],
            correct: 0,
        },
        {
            question: "What is the largest number that divides 132 and 198 without leaving a remainder?",
            options: ["33", "66", "11", "22"],
            correct: 0,
        },
    ],

    // Round 4
    [
        {
            question: "What is the value of 7^4 mod 13?",
            options: ["9", "11", "7", "3"],
            correct: 0,
        },
        {
            question: "What is the sum of the first 10 prime numbers?",
            options: ["129", "120", "115", "132"],
            correct: 0,
        },
        {
            question: "What is the value of φ(36)?",
            options: ["12", "8", "9", "18"],
            correct: 0,
        },
        {
            question: "What is the remainder when 159 is divided by 11?",
            options: ["4", "3", "2", "1"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 360?",
            options: ["24", "28", "32", "36"],
            correct: 0,
        },
    ],

    // Round 5
    [
        {
            question: "What is the largest prime factor of 144?",
            options: ["11", "7", "13", "2"],
            correct: 0,
        },
        {
            question: "How many prime numbers are there less than 100?",
            options: ["25", "20", "30", "22"],
            correct: 0,
        },
        {
            question: "What is the LCM of 10, 15, and 20?",
            options: ["60", "120", "90", "180"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 56?",
            options: ["2 × 2 × 2 × 7", "2 × 3 × 2 × 7", "2 × 3 × 5 × 7", "2 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 72?",
            options: ["12", "16", "10", "14"],
            correct: 0,
        },
    ],
  // Round 6
    [
        {
            question: "What is the value of 8^3 mod 19?",
            options: ["10", "5", "15", "7"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 144 and 180?",
            options: ["36", "12", "24", "48"],
            correct: 0,
        },
        {
            question: "How many prime numbers are there between 1 and 50?",
            options: ["15", "18", "20", "10"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 120?",
            options: ["16", "20", "24", "28"],
            correct: 0,
        },
        {
            question: "What is the value of φ(72)?",
            options: ["24", "32", "36", "28"],
            correct: 0,
        },
    ],

    // Round 7
    [
        {
            question: "What is the remainder when 213 is divided by 17?",
            options: ["5", "7", "3", "1"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 56?",
            options: ["2 × 2 × 2 × 7", "2 × 3 × 2 × 7", "2 × 2 × 3 × 7", "2 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the value of 6^4 mod 11?",
            options: ["5", "1", "4", "7"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 18 and 24?",
            options: ["72", "48", "36", "56"],
            correct: 0,
        },
        {
            question: "How many divisors does 72 have?",
            options: ["12", "16", "24", "28"],
            correct: 0,
        },
    ],

    // Round 8
    [
        {
            question: "What is the greatest common divisor (gcd) of 144 and 216?",
            options: ["72", "24", "36", "48"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 245?",
            options: ["5 × 7 × 7", "5 × 7 × 11", "7 × 7 × 5", "7 × 5 × 13"],
            correct: 0,
        },
        {
            question: "What is the value of φ(54)?",
            options: ["18", "24", "12", "30"],
            correct: 0,
        },
        {
            question: "What is the remainder when 254 is divided by 9?",
            options: ["3", "1", "2", "4"],
            correct: 0,
        },
        {
            question: "How many divisors does 120 have?",
            options: ["16", "20", "24", "28"],
            correct: 0,
        },
    ],

    // Round 9
    [
        {
            question: "What is the least common multiple (LCM) of 30, 45, and 60?",
            options: ["180", "90", "360", "720"],
            correct: 0,
        },
        {
            question: "What is the value of 3^6 mod 13?",
            options: ["1", "7", "9", "11"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 84?",
            options: ["12", "16", "24", "20"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 154 and 272?",
            options: ["26", "22", "28", "18"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 210?",
            options: ["2 × 3 × 5 × 7", "2 × 3 × 5 × 11", "2 × 3 × 7 × 11", "2 × 5 × 7 × 11"],
            correct: 0,
        },
    ],

    // Round 10
    [
        {
            question: "What is the number of divisors of 96?",
            options: ["12", "18", "14", "16"],
            correct: 0,
        },
        {
            question: "What is the remainder when 467 is divided by 15?",
            options: ["3", "2", "1", "4"],
            correct: 0,
        },
        {
            question: "What is the value of φ(45)?",
            options: ["24", "12", "20", "28"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 99 and 77?",
            options: ["11", "7", "33", "77"],
            correct: 0,
        },
        {
            question: "What is the value of 5^5 mod 11?",
            options: ["5", "7", "3", "1"],
            correct: 0,
        },
    ],
  // Round 11
    [
        {
            question: "What is the least common multiple (LCM) of 14, 21, and 35?",
            options: ["70", "140", "105", "210"],
            correct: 0,
        },
        {
            question: "What is the value of 9^2 mod 13?",
            options: ["3", "6", "1", "4"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 216 and 288?",
            options: ["72", "48", "36", "24"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 132?",
            options: ["2 × 2 × 3 × 11", "2 × 2 × 3 × 5", "2 × 3 × 5 × 11", "2 × 3 × 11 × 7"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 180?",
            options: ["18", "24", "20", "16"],
            correct: 0,
        },
    ],

    // Round 12
    [
        {
            question: "What is the greatest common divisor (gcd) of 153 and 195?",
            options: ["3", "9", "5", "15"],
            correct: 0,
        },
        {
            question: "What is the value of 4^5 mod 7?",
            options: ["2", "3", "4", "1"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 12, 15, and 20?",
            options: ["60", "120", "180", "240"],
            correct: 0,
        },
        {
            question: "How many prime numbers are there between 1 and 100?",
            options: ["25", "30", "35", "40"],
            correct: 0,
        },
        {
            question: "What is the value of φ(50)?",
            options: ["20", "18", "22", "24"],
            correct: 0,
        },
    ],

    // Round 13
    [
        {
            question: "What is the greatest common divisor (gcd) of 1024 and 2048?",
            options: ["512", "1024", "256", "128"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 210?",
            options: ["2 × 3 × 5 × 7", "2 × 3 × 5 × 11", "2 × 3 × 7 × 11", "2 × 5 × 7 × 11"],
            correct: 0,
        },
        {
            question: "What is the remainder when 357 is divided by 8?",
            options: ["5", "3", "1", "7"],
            correct: 0,
        },
        {
            question: "What is the value of 7^3 mod 11?",
            options: ["9", "10", "7", "5"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 48?",
            options: ["8", "10", "12", "14"],
            correct: 0,
        },
    ],

    // Round 14
    [
        {
            question: "What is the greatest common divisor (gcd) of 120 and 180?",
            options: ["24", "12", "36", "60"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 8 and 12?",
            options: ["24", "48", "72", "96"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 128?",
            options: ["10", "7", "8", "6"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 216?",
            options: ["2 × 2 × 2 × 3 × 3", "2 × 3 × 3 × 3", "2 × 2 × 2 × 2 × 3", "2 × 3 × 5 × 6"],
            correct: 0,
        },
        {
            question: "What is the value of 5^6 mod 17?",
            options: ["5", "3", "12", "6"],
            correct: 0,
        },
    ],

    // Round 15
    [
        {
            question: "What is the value of 3^4 mod 7?",
            options: ["2", "1", "5", "3"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 56 and 72?",
            options: ["8", "14", "24", "28"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 25 and 30?",
            options: ["150", "100", "75", "120"],
            correct: 0,
        },
        {
            question: "What is the value of φ(36)?",
            options: ["12", "18", "15", "24"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 84?",
            options: ["12", "14", "18", "16"],
            correct: 0,
        },
    ],
  // Round 16
    [
        {
            question: "What is the value of 11^2 mod 19?",
            options: ["5", "12", "15", "7"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 252 and 336?",
            options: ["42", "36", "28", "24"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 180?",
            options: ["2 × 2 × 3 × 3 × 5", "2 × 3 × 3 × 5", "2 × 2 × 5 × 3", "2 × 2 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the value of 3^5 mod 10?",
            options: ["3", "7", "1", "9"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 15, 20, and 25?",
            options: ["60", "100", "150", "200"],
            correct: 0,
        },
    ],

    // Round 17
    [
        {
            question: "What is the number of divisors of 144?",
            options: ["12", "14", "16", "18"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 72 and 96?",
            options: ["24", "36", "48", "60"],
            correct: 0,
        },
        {
            question: "What is the value of 2^10 mod 17?",
            options: ["16", "1", "5", "8"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 210?",
            options: ["2 × 3 × 5 × 7", "2 × 3 × 5 × 11", "2 × 5 × 7 × 11", "2 × 3 × 11 × 7"],
            correct: 0,
        },
        {
            question: "How many prime numbers are there between 1 and 50?",
            options: ["15", "18", "20", "25"],
            correct: 0,
        },
    ],

    // Round 18
    [
        {
            question: "What is the least common multiple (LCM) of 9, 12, and 15?",
            options: ["60", "180", "90", "120"],
            correct: 0,
        },
        {
            question: "What is the remainder when 1001 is divided by 17?",
            options: ["10", "7", "5", "3"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 128 and 256?",
            options: ["128", "64", "32", "16"],
            correct: 0,
        },
        {
            question: "What is the value of 6^4 mod 13?",
            options: ["9", "7", "1", "3"],
            correct: 0,
        },
        {
            question: "How many divisors does 120 have?",
            options: ["16", "18", "20", "24"],
            correct: 0,
        },
    ],

    // Round 19
    [
        {
            question: "What is the prime factorization of 450?",
            options: ["2 × 3 × 3 × 5 × 5", "2 × 3 × 3 × 5", "2 × 3 × 5 × 5", "2 × 3 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 385 and 455?",
            options: ["35", "25", "45", "15"],
            correct: 0,
        },
        {
            question: "What is the value of 5^7 mod 9?",
            options: ["7", "4", "5", "2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 18 and 48?",
            options: ["144", "96", "72", "108"],
            correct: 0,
        },
        {
            question: "What is the value of φ(72)?",
            options: ["24", "30", "36", "48"],
            correct: 0,
        },
    ],

    // Round 20
    [
        {
            question: "What is the remainder when 527 is divided by 13?",
            options: ["7", "5", "8", "4"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 180?",
            options: ["16", "18", "24", "20"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 340 and 450?",
            options: ["10", "20", "30", "40"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 560?",
            options: ["2 × 2 × 2 × 5 × 7", "2 × 3 × 5 × 7", "2 × 5 × 7 × 11", "2 × 2 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the value of 7^4 mod 13?",
            options: ["9", "5", "3", "1"],
            correct: 0,
        },
    ],
  // Round 21
    [
        {
            question: "What is the greatest common divisor (gcd) of 252 and 336?",
            options: ["42", "28", "24", "36"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 1024?",
            options: ["2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2", "2 × 2 × 2 × 5 × 5", "2 × 2 × 3 × 3 × 5", "2 × 2 × 2 × 2 × 3 × 3"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 30, 45, and 60?",
            options: ["90", "180", "360", "720"],
            correct: 0,
        },
        {
            question: "What is the value of 3^6 mod 13?",
            options: ["7", "1", "4", "12"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 240?",
            options: ["18", "20", "24", "30"],
            correct: 0,
        },
    ],

    // Round 22
    [
        {
            question: "What is the greatest common divisor (gcd) of 128 and 1024?",
            options: ["128", "64", "32", "256"],
            correct: 0,
        },
        {
            question: "What is the value of 4^5 mod 9?",
            options: ["7", "1", "3", "4"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 288?",
            options: ["2 × 2 × 2 × 3 × 3 × 2", "2 × 3 × 3 × 3 × 2", "2 × 2 × 2 × 3 × 3", "2 × 2 × 3 × 3 × 3"],
            correct: 0,
        },
        {
            question: "What is the value of φ(45)?",
            options: ["24", "18", "20", "24"],
            correct: 0,
        },
        {
            question: "How many prime numbers are there between 1 and 30?",
            options: ["9", "8", "7", "6"],
            correct: 0,
        },
    ],

    // Round 23
    [
        {
            question: "What is the least common multiple (LCM) of 24, 36, and 48?",
            options: ["144", "1440", "72", "120"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 49 and 63?",
            options: ["7", "14", "21", "28"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 360?",
            options: ["2 × 2 × 2 × 3 × 3 × 5", "2 × 3 × 3 × 5", "2 × 2 × 3 × 5 × 5", "2 × 3 × 3 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the remainder when 859 is divided by 12?",
            options: ["5", "7", "3", "11"],
            correct: 0,
        },
        {
            question: "What is the value of 7^5 mod 11?",
            options: ["9", "5", "3", "4"],
            correct: 0,
        },
    ],

    // Round 24
    [
        {
            question: "What is the greatest common divisor (gcd) of 56 and 72?",
            options: ["8", "14", "28", "20"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 96?",
            options: ["12", "16", "18", "20"],
            correct: 0,
        },
        {
            question: "What is the value of 2^7 mod 17?",
            options: ["10", "5", "7", "2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 40 and 60?",
            options: ["120", "240", "60", "80"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 180?",
            options: ["16", "18", "24", "20"],
            correct: 0,
        },
    ],

    // Round 25
    [
        {
            question: "What is the prime factorization of 1000?",
            options: ["2 × 2 × 2 × 5 × 5 × 5", "2 × 5 × 5 × 5", "2 × 2 × 5 × 5", "2 × 3 × 5 × 5"],
            correct: 0,
        },
        {
            question: "What is the greatest common divisor (gcd) of 100 and 200?",
            options: ["50", "25", "100", "200"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 36 and 48?",
            options: ["144", "72", "108", "180"],
            correct: 0,
        },
        {
            question: "What is the value of φ(54)?",
            options: ["18", "20", "24", "36"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 144?",
            options: ["12", "14", "16", "18"],
            correct: 0,
        },
    ],
  // Round 26
    [
        {
            question: "What is the greatest common divisor (gcd) of 42 and 56?",
            options: ["14", "28", "42", "7"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 512?",
            options: ["2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2", "2 × 3 × 5 × 5", "2 × 2 × 2 × 3 × 3", "2 × 2 × 2 × 2 × 3 × 3"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 14, 28, and 35?",
            options: ["140", "280", "70", "105"],
            correct: 0,
        },
        {
            question: "What is the remainder when 1279 is divided by 11?",
            options: ["4", "6", "8", "10"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 96?",
            options: ["12", "16", "18", "20"],
            correct: 0,
        },
    ],

    // Round 27
    [
        {
            question: "What is the greatest common divisor (gcd) of 77 and 119?",
            options: ["7", "11", "14", "21"],
            correct: 0,
        },
        {
            question: "What is the value of 5^6 mod 13?",
            options: ["9", "8", "7", "3"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 243?",
            options: ["3 × 3 × 3 × 3 × 3", "2 × 2 × 3 × 3 × 3", "3 × 3 × 2 × 2 × 5", "3 × 5 × 5 × 5"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 48 and 64?",
            options: ["192", "128", "96", "72"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 360?",
            options: ["16", "18", "20", "24"],
            correct: 0,
        },
    ],

    // Round 28
    [
        {
            question: "What is the greatest common divisor (gcd) of 84 and 126?",
            options: ["42", "12", "28", "56"],
            correct: 0,
        },
        {
            question: "What is the value of 3^7 mod 17?",
            options: ["6", "13", "11", "7"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 128?",
            options: ["2 × 2 × 2 × 2 × 2 × 2 × 2", "2 × 2 × 3 × 2 × 2", "2 × 2 × 2 × 3 × 3", "2 × 2 × 2 × 2 × 5"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 16 and 40?",
            options: ["160", "80", "120", "100"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 180?",
            options: ["16", "18", "24", "20"],
            correct: 0,
        },
    ],

    // Round 29
    [
        {
            question: "What is the greatest common divisor (gcd) of 180 and 270?",
            options: ["90", "180", "60", "30"],
            correct: 0,
        },
        {
            question: "What is the value of 4^6 mod 9?",
            options: ["5", "1", "3", "8"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 150?",
            options: ["2 × 3 × 5 × 5", "2 × 3 × 5", "2 × 2 × 3 × 5", "3 × 3 × 5"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 45 and 60?",
            options: ["180", "90", "75", "120"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 120?",
            options: ["16", "18", "20", "24"],
            correct: 0,
        },
    ],

    // Round 30
    [
        {
            question: "What is the greatest common divisor (gcd) of 63 and 147?",
            options: ["21", "7", "14", "28"],
            correct: 0,
        },
        {
            question: "What is the value of 6^5 mod 13?",
            options: ["8", "7", "9", "4"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 392?",
            options: ["2 × 2 × 2 × 7 × 7", "2 × 2 × 7 × 7", "2 × 3 × 7 × 7", "3 × 2 × 5 × 7"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 18 and 24?",
            options: ["72", "96", "144", "60"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 144?",
            options: ["12", "16", "20", "24"],
            correct: 0,
        },
    ],
  // Round 31
    [
        {
            question: "What is the greatest common divisor (gcd) of 88 and 132?",
            options: ["44", "22", "33", "11"],
            correct: 0,
        },
        {
            question: "What is the value of 2^9 mod 13?",
            options: ["3", "6", "1", "9"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 625?",
            options: ["5 × 5 × 5 × 5", "5 × 5 × 5", "2 × 5 × 5 × 5", "5 × 5 × 5 × 2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 18 and 36?",
            options: ["36", "72", "54", "108"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 512?",
            options: ["10", "12", "8", "16"],
            correct: 0,
        },
    ],

    // Round 32
    [
        {
            question: "What is the greatest common divisor (gcd) of 81 and 243?",
            options: ["81", "9", "27", "243"],
            correct: 0,
        },
        {
            question: "What is the value of 5^7 mod 17?",
            options: ["12", "5", "8", "13"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 900?",
            options: ["2 × 2 × 3 × 3 × 5 × 5", "2 × 3 × 3 × 5 × 5", "3 × 3 × 5 × 5", "3 × 5 × 5 × 2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 24 and 72?",
            options: ["72", "48", "96", "144"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 1000?",
            options: ["12", "16", "18", "24"],
            correct: 0,
        },
    ],

    // Round 33
    [
        {
            question: "What is the greatest common divisor (gcd) of 90 and 120?",
            options: ["30", "60", "15", "45"],
            correct: 0,
        },
        {
            question: "What is the value of 3^5 mod 17?",
            options: ["2", "8", "7", "3"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 576?",
            options: ["2 × 2 × 2 × 3 × 3 × 2", "2 × 2 × 2 × 2 × 3 × 3", "2 × 3 × 3 × 5 × 5", "3 × 3 × 2 × 2 × 2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 45 and 60?",
            options: ["180", "120", "90", "150"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 240?",
            options: ["16", "18", "20", "24"],
            correct: 0,
        },
    ],

    // Round 34
    [
        {
            question: "What is the greatest common divisor (gcd) of 56 and 84?",
            options: ["28", "14", "42", "21"],
            correct: 0,
        },
        {
            question: "What is the value of 6^4 mod 11?",
            options: ["7", "10", "6", "1"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 720?",
            options: ["2 × 2 × 2 × 2 × 3 × 3 × 5", "2 × 3 × 3 × 5 × 5", "2 × 2 × 3 × 3 × 5 × 5", "2 × 2 × 5 × 5 × 3"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 32 and 64?",
            options: ["128", "96", "160", "72"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 625?",
            options: ["4", "6", "8", "12"],
            correct: 0,
        },
    ],

    // Round 35
    [
        {
            question: "What is the greatest common divisor (gcd) of 100 and 150?",
            options: ["50", "30", "25", "75"],
            correct: 0,
        },
        {
            question: "What is the value of 7^5 mod 13?",
            options: ["7", "9", "12", "3"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 144?",
            options: ["2 × 2 × 3 × 3 × 2", "2 × 2 × 2 × 3 × 3", "3 × 3 × 2 × 2", "2 × 3 × 3 × 5"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 28 and 35?",
            options: ["140", "90", "120", "72"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 900?",
            options: ["16", "18", "20", "24"],
            correct: 0,
        },
    ],
  // Round 36
    [
        {
            question: "What is the greatest common divisor (gcd) of 120 and 180?",
            options: ["60", "30", "45", "90"],
            correct: 0,
        },
        {
            question: "What is the value of 2^7 mod 19?",
            options: ["4", "16", "7", "9"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 1024?",
            options: ["2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2", "2 × 2 × 2 × 3 × 3 × 5", "3 × 3 × 2 × 2 × 2 × 2 × 5", "2 × 2 × 5 × 5 × 5"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 45 and 50?",
            options: ["450", "250", "150", "200"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 720?",
            options: ["32", "30", "36", "40"],
            correct: 0,
        },
    ],

    // Round 37
    [
        {
            question: "What is the greatest common divisor (gcd) of 54 and 81?",
            options: ["27", "18", "9", "36"],
            correct: 0,
        },
        {
            question: "What is the value of 3^8 mod 17?",
            options: ["4", "9", "12", "7"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 1000?",
            options: ["2 × 2 × 2 × 5 × 5 × 5", "2 × 5 × 5 × 5", "2 × 2 × 3 × 5 × 5", "5 × 5 × 5 × 2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 32 and 48?",
            options: ["96", "128", "64", "72"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 144?",
            options: ["18", "16", "20", "22"],
            correct: 0,
        },
    ],

    // Round 38
    [
        {
            question: "What is the greatest common divisor (gcd) of 160 and 200?",
            options: ["40", "80", "50", "20"],
            correct: 0,
        },
        {
            question: "What is the value of 4^6 mod 11?",
            options: ["10", "5", "3", "1"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 512?",
            options: ["2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2", "2 × 3 × 5 × 5", "3 × 3 × 2 × 2 × 5", "2 × 2 × 2 × 2 × 3 × 5"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 20 and 60?",
            options: ["60", "100", "120", "180"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 240?",
            options: ["16", "18", "22", "24"],
            correct: 0,
        },
    ],

    // Round 39
    [
        {
            question: "What is the greatest common divisor (gcd) of 110 and 165?",
            options: ["55", "33", "22", "11"],
            correct: 0,
        },
        {
            question: "What is the value of 2^8 mod 23?",
            options: ["13", "5", "1", "9"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 324?",
            options: ["2 × 2 × 3 × 3 × 3 × 3", "2 × 3 × 3 × 3 × 3", "2 × 2 × 2 × 3 × 3", "3 × 3 × 2 × 2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 24 and 48?",
            options: ["48", "72", "96", "144"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 900?",
            options: ["16", "20", "24", "18"],
            correct: 0,
        },
    ],

    // Round 40
    [
        {
            question: "What is the greatest common divisor (gcd) of 99 and 121?",
            options: ["11", "33", "7", "9"],
            correct: 0,
        },
        {
            question: "What is the value of 5^6 mod 17?",
            options: ["10", "8", "15", "5"],
            correct: 0,
        },
        {
            question: "What is the prime factorization of 576?",
            options: ["2 × 2 × 2 × 2 × 3 × 3 × 2", "2 × 2 × 2 × 3 × 3 × 2 × 3", "2 × 2 × 3 × 3 × 2", "2 × 3 × 5 × 5 × 2"],
            correct: 0,
        },
        {
            question: "What is the least common multiple (LCM) of 54 and 72?",
            options: ["216", "144", "108", "90"],
            correct: 0,
        },
        {
            question: "What is the number of divisors of 108?",
            options: ["12", "14", "16", "18"],
            correct: 0,
        },
    ]
  ];
  




// Game State
let currentRound = 0;
let currentQuestion = 0;
let timer;
let timeLeft;
let isQuizActive = false;
let timeScore = 0;
let roundScore = 0;

// DOM Elements
const timerBar = document.querySelector('.timer-bar');
const timerDisplay = document.querySelector('.timer-display');
const questionElement = document.querySelector('.question');
const optionsContainer = document.querySelector('.options');
const startButton = document.querySelector('.start-quiz');
const nextRoundButton = document.querySelector('.next-round');
const progressDots = document.querySelectorAll('.progress-dot');
const roundDisplay = document.querySelector('#currentRound');
const timeScoreDisplay = document.querySelector('#timeScore');
const roundScoreDisplay = document.querySelector('#roundScore');
const feedbackElement = document.querySelector('.feedback');
const finalScoresElement = document.querySelector('.final-scores');

// Timer Function
function startTimer() {
    timeLeft = 60;
    timerBar.style.width = '100%';
    
    timer = setInterval(() => {
        timeLeft -= 0.1;
        timerDisplay.textContent = Math.ceil(timeLeft);
        timerBar.style.width = `${(timeLeft / 60) * 100}%`;

        if (timeLeft <= 0) {
            clearInterval(timer);
            showFeedback(false);
            setTimeout(() => nextQuestion(), 1000);
        }
    }, 100);
}

// Display Question Function
function displayQuestion() {
    const currentQuestionData = questions[currentRound][currentQuestion];
    questionElement.textContent = currentQuestionData.question;
    feedbackElement.classList.remove('show', 'correct', 'wrong');
    finalScoresElement.innerHTML = '';
    
    optionsContainer.innerHTML = '';
    currentQuestionData.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option fade-in';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });

    updateProgressDots();
}

// Check Answer Function
function checkAnswer(selectedIndex) {
    clearInterval(timer);
    const currentQuestionData = questions[currentRound][currentQuestion];
    const isCorrect = selectedIndex === currentQuestionData.correct;
    
    const options = document.querySelectorAll('.option');
    options.forEach(option => option.style.pointerEvents = 'none');
    
    options[selectedIndex].classList.add(isCorrect ? 'correct' : 'wrong');
    options[currentQuestionData.correct].classList.add('correct');

    if (isCorrect) {
        roundScore++;
        timeScore += Math.ceil(timeLeft);
        roundScoreDisplay.textContent = roundScore;
        timeScoreDisplay.textContent = timeScore;
    }

    showFeedback(isCorrect);
    progressDots[currentQuestion].classList.add(isCorrect ? 'correct' : 'wrong');

    setTimeout(() => nextQuestion(), 1000);
}

// Show Feedback Function
function showFeedback(isCorrect) {
    feedbackElement.textContent = isCorrect ? 'Correct! 🎉' : 'Wrong! 😞';
    feedbackElement.className = `feedback show ${isCorrect ? 'correct' : 'wrong'}`;
}

// Next Question Function
function nextQuestion() {
    currentQuestion++;

    if (currentQuestion >= questions[currentRound].length) {
        endRound();
    } else {
        displayQuestion();
        startTimer();
    }
}

// Update Progress Dots Function
function updateProgressDots() {
    progressDots.forEach((dot, index) => {
        if (index === currentQuestion) {
            dot.classList.add('active');
        } else if (index < currentQuestion) {
            dot.classList.remove('active');
        }
    });
}

// End Round Function
function endRound() {
    isQuizActive = false;
    timerDisplay.textContent = '60';
    timerBar.style.width = '100%';
    questionElement.textContent = 'Round Complete! 🎯';
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    
    finalScoresElement.innerHTML = `
        <div>Round Score: ${roundScore}/5 correct answers</div>
        <div>Time Bonus Points: ${timeScore}</div>
        <div>Great job! 🎉</div>
    `;
    
    nextRoundButton.style.display = 'block';
    startButton.style.display = 'none';
}

// Start New Round Function
function startNewRound() {
    currentQuestion = 0;
    currentRound++;
    roundScore = 0;
    roundDisplay.textContent = currentRound + 1;
    roundScoreDisplay.textContent = '0';
    nextRoundButton.style.display = 'none';
    startButton.style.display = 'block';
    questionElement.textContent = `Ready for Round ${currentRound + 1}? 🤩`;
    optionsContainer.innerHTML = '';
    feedbackElement.classList.remove('show');
    finalScoresElement.innerHTML = '';
    
    // Reset progress dots
    progressDots.forEach(dot => {
        dot.className = 'progress-dot';
    });
    progressDots[0].classList.add('active');
}

// Event Listeners
startButton.addEventListener('click', () => {
    if (!isQuizActive) {
        isQuizActive = true;
        startButton.style.display = 'none';
        displayQuestion();
        startTimer();
    }
});

nextRoundButton.addEventListener('click', () => {
    if (currentRound < questions.length - 1) {
        startNewRound();
    } else {
        // End of all rounds
        questionElement.textContent = 'Quiz Complete! 🎉';
        finalScoresElement.innerHTML = `
            <div>Final Score: ${timeScore} points</div>
            <div>Thank you for playing! 🌟</div>
        `;
        nextRoundButton.style.display = 'none';
    }
});

// Initialize first round
questionElement.textContent = 'Ready for Round 1? 🏁';
