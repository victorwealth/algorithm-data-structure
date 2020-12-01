def count_down(i):
    # print(i)

    if i <= 0:  # base case
        return
    else:
        count_down(i - 1)  # recursive case
        print(i)


# count_down(5)


def greet(name):
    print("hello, " + name + "!")
    greet2(name)
    print("getting ready to say bye...")
    bye()


def greet2(name):
    print("how are you, " + name + "?")


def bye():
    print("ok bye!")


# greet("victor")


# Sum array elements using recursion
def sum_array(arr, arr_length):
    if arr_length == 0:
        return 0

    if arr_length == 1:
        return arr[0]

    return arr[arr_length - 1] + sum_array(arr, arr_length - 1)


# print(sum_array([10, 20, 30], 3))


# Count the number of items in array using recursion
def count(arr):
    if not arr[1:]:
        return 0

    return 1 + count(arr[1:])


print(count([1, 2, 3, 4, 5]))
