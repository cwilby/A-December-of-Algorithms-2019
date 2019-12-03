def is_sorted(list):
    return all(list[i] <= list[i+1] for i in range(len(list)-1))


def thanos_sort(list):
    while not is_sorted(list):
        list = list[::2]
    
    return list
