#include "unity.h"
#include "h_index.h"

void test_h_index_should_return_3_for_example_1(void)
{
  int citations[] = {4, 3, 0, 1, 5};
  TEST_ASSERT_EQUAL_INT(3, h_index(5, citations));
}

void test_h_index_should_return_4_for_example_2(void)
{
  int citations[] = {4, 5, 2, 0, 6, 4};
  TEST_ASSERT_EQUAL_INT(4, h_index(6, citations));
}

void test_h_index_should_return_136_for_100n(void)
{
  int citations[] = {300, 948, 451, 820, 450, 98, 411, 769, 354, 967, 942, 765, 720, 656, 329, 856, 466, 196, 246, 734, 531, 42, 520, 634, 289, 551, 381, 670, 186, 914, 905, 700, 923, 880, 307, 68, 530, 828, 663, 922, 108, 891, 77, 859, 595, 20, 579, 35, 282, 635, 698, 956, 258, 769, 833, 370, 833, 0, 870, 690, 984, 520, 581, 570, 199, 108, 738, 987, 830, 844, 310, 816, 494, 608, 778, 471, 763, 416, 693, 275, 290, 184, 688, 581, 370, 768, 377, 669, 207, 877, 559, 494, 637, 92, 321, 284, 975, 809, 379, 741};
  TEST_ASSERT_EQUAL_INT(98, h_index(100, citations));
}

int main(void)
{
  UNITY_BEGIN();
  RUN_TEST(test_h_index_should_return_3_for_example_1);
  RUN_TEST(test_h_index_should_return_4_for_example_2);
  RUN_TEST(test_h_index_should_return_136_for_100n);
  return UNITY_END();
}