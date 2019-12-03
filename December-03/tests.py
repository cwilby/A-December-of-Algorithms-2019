import unittest
from thanos_sort import thanos_sort


def read_list(n):
    list = []
    with open("%s.txt" % n) as f:
        for line in f:
            list.append(int(line))
    return list


class TestThanosSort(unittest.TestCase):
    def test_sorted_list_remains_sorted(self):
        list = [1, 2, 3, 4, 5]
        result = thanos_sort(list)
        self.assertEqual(list, result)

    def test_unsorted_list_returns_sorted_list(self):
        list = [1, 2, 3, 4, 3]
        result = thanos_sort(list)
        self.assertEqual([1, 3, 3], result)

    def test_100n_list_returns_correct_value(self):
        list = read_list(100)
        result = thanos_sort(list)
        self.assertEqual([4439], result)

    def test_1000n_list_returns_correct_value(self):
        list = read_list(1000)
        result = thanos_sort(list)
        self.assertEqual([1439, 3843], result)

    def test_10000n_list_returns_correct_value(self):
        list = read_list(10000)
        result = thanos_sort(list)
        self.assertEqual([384, 1771, 6969], result)

    def test_100000n_list_returns_correct_value(self):
        list = read_list(100000)
        result = thanos_sort(list)
        self.assertEqual([8824, 8947], result)

    def test_1000000n_list_returns_correct_value(self):
        list = read_list(1000000)
        result = thanos_sort(list)
        self.assertEqual([3904], result)

if __name__ == '__main__':
    unittest.main()
