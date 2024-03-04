
countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

//!Yukarıdaki diziyi kullanarak aşağıdaki diziyi oluşturun

/* [
    ['Albania', 'ALB', 7],
    ['Bolivia', 'BOL', 7],
    ['Canada', 'CAN', 6],
    ['Denmark', 'DEN', 7],
    ['Ethiopia', 'ETH', 8],
    ['Finland', 'FIN', 7],
    ['Germany', 'GER', 7],
    ['Hungary', 'HUN', 7],
    ['Ireland', 'IRE', 7],
    ['Iceland', 'ICE', 7],
    ['Japan', 'JAP', 5],
    ['Kenya', 'KEN', 5]
  ] */

/*   function convertContriesIntoTwoDimension(){

    let twoDimensional = [];

    countries.forEach(country =>{
        let arr = [];

        arr.push(country, country.slice(0, 3).toUpperCase(), country.length);

        twoDimensional.push(arr);
    })

    return twoDimensional;
}

console.log(convertContriesIntoTwoDimension()) */

let myList = []
  for(let i = 0; i < countries.length; i++){
    let country = countries[i]
    let eleman1 = [country.charAt(0) + country.slice(1).toLowerCase()]
    let eleman2 = [country.slice(0,3)]
    let eleman3 = [country.length]
    myList.push([...eleman1, ...eleman2, ...eleman3])
  }
  console.log(myList);

function istenenDizi(){
    let dolocakDizi = [];
    countries.forEach((a) =>{
        let olusacakDizi = [];
        olusacakDizi.push(a, a.slice(0, 3).toUpperCase(), a.length);
        dolocakDizi.push(olusacakDizi);
    })
    return dolocakDizi;
}
console.log(istenenDizi());



/* 1. `countries` adında bir dizi oluşturulur ve bu diziye çeşitli ülkelerin isimleri eklenir.

2. `istenenDizi` adında bir fonksiyon tanımlanır. Bu fonksiyonun amacı, her bir ülke için belirli bilgileri içeren yeni bir dizi oluşturmak ve bu dizileri bir araya getiren başka bir dizi oluşturmaktır.

3. `dolocakDizi` adında boş bir dizi oluşturulur. Bu dizi, sonuçları saklamak için kullanılacaktır.

4. `countries` dizisindeki her bir ülke için (`forEach` döngüsü ile), aşağıdaki işlemler gerçekleştirilir:
   - `olusacakDizi` adında yeni bir dizi oluşturulur.
   - Bu diziye ülkenin tam adı eklenir.
   - Ülkenin adının ilk üç harfi büyük harfe çevrilir ve bu da `olusacakDizi`'ye eklenir.
   - Ülkenin adının karakter sayısı (uzunluğu) hesaplanır ve bu da `olusacakDizi`'ye eklenir.
   - Sonuçta `olusacakDizi`, üç elemanlı bir dizi haline gelir: [ülke adı, ilk üç harf, adın uzunluğu].
   - `olusacakDizi`, `dolocakDizi`'ye eklenir.

5. `istenenDizi` fonksiyonu, `dolocakDizi`'yi döndürür. Bu dizi, her bir ülke için oluşturulan üç elemanlı dizileri içerir.

6. `console.log(istenenDizi());` ifadesi ile `istenenDizi` fonksiyonunun sonucu konsola yazdırılır. Bu, her bir ülkenin bilgilerini içeren dizilerin listesini gösterir. 

Örneğin, "ALBANIA" için oluşturulan dizi ["ALBANIA", "ALB", 7] olacaktır. Bu, ülkenin adının "ALBANIA" olduğunu, ilk üç harfinin "ALB" olduğunu ve adının 7 karakter uzunluğunda olduğunu gösterir. Bu işlem, `countries` dizisindeki tüm ülkeler için tekrarlanır. */


//!Yukarıdaki ülkeler dizisinde "land" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "land" içeren ülkeler varsa bunu dizi halinde yazdırın.


let landCountries = countries.filter(country => country.toLowerCase().includes("land"));
console.log(landCountries);



//!Yukarıdaki ülkeler dizisinde "ia" sözcüğünü içeren bir ülke veya ülke olup olmadığını kontrol edin. "ia" içeren ülkeler varsa bunu dizi halinde yazdırın..

let iaCountries = countries.filter(country => country.toLowerCase().includes("ia"))

console.log(iaCountries);

//!Yukarıdaki ülkeler dizisini kullanarak en fazla karakter içeren ülkeyi bulun.

function findCountryLargestCharecter(){
    let countryCharecterLength = []

    countries.forEach(country => countryCharecterLength.push(country.length))

    return countries[countryCharecterLength.indexOf(Math.max(...countryCharecterLength))]
}
findCountryLargestCharecter()
console.log(findCountryLargestCharecter());

// En uzun ülke adını saklamak için boş bir dize oluşturun
let longestCountry = "";

// Her ülkeyi kontrol edin ve en uzun ülkeyi güncelleyin
for (const country of countries) {
    if (country.length > longestCountry.length) {
        longestCountry = country;
    }
}
console.log("En fazla karakter içeren ülke:", longestCountry);

let longestCountry1 = countries[0];

for (let i = 1; i < countries.length; i++) {
    if (countries[i].length > longestCountry1.length) {
        longestCountry1 = countries[i];
    }
}
console.log(longestCountry1);

//!Yukarıdaki ülkeler dizisini kullanarak, yalnızca 5 karakter içeren ülkeyi bulun

function findCountryWithFiveCharecters(){
    let countryWithFiveCharecters = []

    countries.forEach(country => {
        if(country.length !== 5) return        
        countryWithFiveCharecters.push(country)
    })
    
  return countryWithFiveCharecters;  
}

console.log(findCountryWithFiveCharecters());   

/* if (country.length !== 5) ifadesi, ülke adının uzunluğunun beş karaktere eşit olmadığını kontrol eder.
Eğer bu koşul sağlanıyorsa (yani ülke adı beş karakter uzunluğunda değilse), return ifadesi çalışır.
return ifadesi, fonksiyonun çalışmasını sonlandırır ve fonksiyonun çağrıldığı yere geri döner.
Eğer ülke adı beş karakter uzunluğunda değilse, fonksiyonun geri kalan kısmı çalıştırılmaz ve başka bir işlem yapmadan sona erer.
Bu nedenle, return, bir fonksiyonun işlem sonucunu döndürmek ve fonksiyonun çalışmasını sonlandırmak için kullanılır. Eğer koşul sağlanmazsa, fonksiyon normal şekilde devam eder. JavaScript’te bu yapı, fonksiyonların sonuçlarını yönetmek ve gerektiğinde sonlandırmak için önemlidir. */

const fiveCharacterCountries = [];

// Her ülkeyi kontrol edin ve beş karakter uzunluğunda ise listeye ekleyin
for (const country of countries) {
    if (country.length === 5) {
        fiveCharacterCountries.push(country);
    }
}

console.log(fiveCharacterCountries);

const besKarak = []

for (let i = 0; i < countries.length; i++){
    let ulkeler = countries[i]
    if(ulkeler.length === 5) {
        besKarak.push(ulkeler)

    }
}
console.log(besKarak);