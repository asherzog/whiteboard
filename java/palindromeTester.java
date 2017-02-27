// run from the command line with:
// javac PalindromeTester.java && java PalindromeTester

public class PalindromeTester {

  public boolean isPalindrome(String input) {
    String str = input.replaceAll(" ","");
    for (int i = 0; i < str.length() / 2; i++) {
      if (str.charAt(i) != str.charAt(str.length() - 1 -i)) {
        return false;
      }
    }
    return true;
  }

  public static void main(String[] args) {
    printTestPalindrome("race car"); //true
    printTestPalindrome("wat"); //false
    printTestPalindrome("stack cats"); //true
    printTestPalindrome("who"); //false
    printTestPalindrome("step on no pets"); //true
    printTestPalindrome("when"); //false
    printTestPalindrome("taco cat"); //true
  }

  public static void printTestPalindrome(String input) {
    PalindromeTester tester = new PalindromeTester();
    System.out.println(input + ": " + tester.isPalindrome(input)); //true
  }

}
