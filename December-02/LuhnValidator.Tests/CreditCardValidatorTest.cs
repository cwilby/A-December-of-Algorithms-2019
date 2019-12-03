using Xunit;

namespace LuhnValidator.Tests
{
  public class CreditCardValidatorTest
  {
    private readonly CreditCardValidator _validator;

    public CreditCardValidatorTest()
    {
      _validator = new CreditCardValidator();
    }

    [Theory]
    [InlineData("49927398716")]
    [InlineData("4111111111111111")]
    [InlineData("5500000000000004")]
    [InlineData("340000000000009")]
    [InlineData("30000000000004")]
    public void Validate_InputSequence_ReturnTrue(string number)
    {
      Assert.True(_validator.Validate(number));
    }

    [Theory]
    [InlineData("49927398717")]
    [InlineData("4111111111111112")]
    [InlineData("5500000000000002")]
    [InlineData("340000000000002")]
    [InlineData("30000000000002")]
    public void Validate_InputSequence_ReturnFalse(string number)
    {
      Assert.False(_validator.Validate(number));
    }
  }
}