
# Binary search works only with sorted list

def binary_search(sorted_list, lookup_item):
    low = 0
    high = len(sorted_list) - 1

    while low <= high:
        mid = (low + high)  // 2 # integer division
        guess = sorted_list[mid]

        if guess == lookup_item:
            return mid      # returns index of the item
        if guess > lookup_item:
            high = mid - 1
        else:
            low = mid + 1

    return None




# run program
sorted_list = [15, 20, 30, 45, 55, 60, 76, 84, 98, 100]
print("Item found at index: ", + binary_search(sorted_list, 60))