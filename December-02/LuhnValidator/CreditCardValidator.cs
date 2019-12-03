using System;
using System.Linq;

namespace LuhnValidator
{
  public class CreditCardValidator
  {
    public bool Validate(string number)
    {
      var digitsReversed = number
        .Select(charToInt)
        .Reverse()
        .ToArray();

      int s1 = digitsReversed.Where(evenIndex).Sum();
      int s2 = digitsReversed.Where(oddIndex).Select(partialSum).Sum();

      return $"{s1 + s2}".Last() == '0';
    }

    private bool evenIndex(int x, int i)
    {
      return i % 2 == 0;
    }

    private bool oddIndex(int x, int i)
    {
      return i % 2 == 1;
    }

    private int partialSum(int n)
    {
      return $"{n * 2}".Select(charToInt).Sum();
    }

    private int charToInt(char c)
    {
      return int.Parse(c.ToString());
    }
  }
}
