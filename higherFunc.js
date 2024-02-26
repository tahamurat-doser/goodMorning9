/*//! Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items. */


/* const getStringLists = arr => {
    const stringArray = []

    arr.forEach(el =>{typeof el === 'string'? stringArray.push(el): stringArray});

    return stringArray  // Returns only strings from an array.
} */
const mixedArray = [true, 1, false, 0, '4CH13V3R']
console.log(getStringLists([1,2,3,"elma", "armut"]));

function getStringLists(dizi) {
    return dizi.filter(ogeler => typeof ogeler === 'string');
}


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*//! Use reduce to sum all the numbers in the numbers array */

const sum = numbers.reduce((acc,value) => acc + value, 0)
console.log(sum);

/* Bu kodda, reduce metodu, dizideki her bir öğeyi tek bir değere indirger. Bu durumda, bu tek değer dizideki tüm sayıların toplamıdır. accumulator toplamı tutar ve currentValue şu anki dizi öğesidir. Her iterasyonda, currentValue accumulator’a eklenir. */

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

/*//! Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries */


const sentence = countries.reduce((accumulator, country, index, array) => {
    if (index === array.length - 1) {
        return accumulator + ', and ' + country;
    } else {
        return accumulator + ', ' + country;
    }
}, 'Estonia') + ' are north European countries';

console.log(sentence); 

/* Bu kod parçası, dizinin son öğesini belirlemek için kullanılır. index === array.length - 1 ifadesi, şu an işlem gören öğenin dizinin son öğesi olup olmadığını kontrol eder. Eğer bu doğruysa (yani, eğer şu anki öğe dizinin son öğesi ise), accumulator + ', and ' + country ifadesi çalıştırılır. Bu, son öğeye özel bir işlem yapmamızı sağlar. */

/*//! Explain the difference between some and every */

//? Tum diziyi itere eder ve aldigi callback fonksiyonuna gore
//? test gerceklestirir.Tum elemanlar icin test basarili ise
//? true aksi takdirde false deger dondurur.

const ages = [18, 22, 78, 44, 78, 89, 25]
const check = ages.every((age) => age >= 18)

check ? console.log("All ages are over 18") : console.log("Some are under 18")

//* some()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? En az bir eleman icin bile test basarili ise true aksi
//? takdirde false deger dondurur.

const over80 = ages.some((a) => a >= 80)
console.log(over80) //? true

//! Use some to check if some names' length greater than seven in names array

const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

const kontrol = names.some((a) => a.length > 7 )
kontrol ? console.log("bazı isimler 7 den fazla harf içeririr") : console.log("7 den fazla harf içeren isim yoktur");

//! Use every to check if all the countries contain the word land

const countries1 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

/* const kontrol1 =countries1.every((a) => a.includes("land")) */

const kontrol1 =countries1.every((a) => a.match(/land/gi))

kontrol1 ? console.log("bütün ülkeler land içeriyor") : console.log("bütün ülkeler land içermiyor ");


//!Explain the difference between find and findIndex.

//* find(), findLast()
//*-----------------------------------------------------------
/* const ages = [18, 22, 78, 44, 78, 89, 25] */
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin dondurur.
//? Eger hic bir eleman kosulu saglamazsa undefined dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk ve son elemani yazdirin
const ageBigThan30First = ages.find((age) => age >= 30)
const ageBigThan30Last = ages.findLast((age) => age >= 30)
console.log(ageBigThan30First, ageBigThan30Last)

console.log(ages.find((age) => age >= 80)) //? undefined

//* findIndex()
//*-----------------------------------------------------------
//? Aldigi callback fonksiyonuna gore test gerceklestirir.
//? Kosulu saglayan ilk dizi elemaninin indeksini dondurur.
//? Eger hic bir eleman kosulu saglamazsa -1 dondurur.

//?Ornek: Yasi 30 dan buyuk olan ilk elemanin indexini yazdirin
const foundIndex = ages.findIndex((age) => age > 18)
console.log(foundIndex) //? 1

/*

- "find", returns the first element which satisfies the condition
- "findIndex", returns the index of first element which satisfies the condition

*/
//! Use find to find the first country containing only six letters in the countries array

const countries2 = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand']

const bulIlk = countries2.find((a) => a.length === 6)
console.log(bulIlk);

//! Use findIndex to find the position of the first country containing only six letters in the countries array

const bulIlkIndex = countries2.findIndex((a) => a.length === 6)
console.log(bulIlkIndex);

//! Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.

const positionNorway = countries2.findIndex((a) => a === "Norway")
console.log(positionNorway);

//! Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.

const positionRussia = countries2.findIndex((a) => a === "Russia")
console.log(positionRussia);