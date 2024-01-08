const lengthOfString: String.LengthOfString<"hello"> = 5;
const reverseOfString: String.ReverseTheString<"hello"> = "olleh";
const isPalindrome: String.IfAStringIsPalindrome<"hee2"> = false;
const substring: String.Substring<"hello", 3> = "hel";
const s: String.Split<"lkg", ""> = ["l", "k", "g"];
const doesStringExistInAnotherString: String.DoesStringExistInAnotherString<"hello", "ell"> = true;

const fibonacci: Series.Fibonacci<5> = 5;

const parser: Parser.GetByDot<"a.b.d.e", { a: { b: { c: { e: 2 }; d: 2 } } }> = 5;
