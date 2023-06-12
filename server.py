arr1 = ["a", "a", "a"]
# const expected1 = {
#     a: 3,
# };
# #  {"a": 1, "a": 2, "a": 3}



arr2 = ["a", "b", "a", "c", "B", "c", "c", "d"]
# expected2 = 
#     a: 2,
#     b: 1,
#     c: 3,
#     B: 1,
#     d: 1,
# };
# #  {}



arr3 = []
# const expected3 = {};

# function makeFrequencyTable(arr) {
#     const freqTable = {}

# =================

def make_frequency_table(arr):
    # write temp variable to hold new arr
    freq_table = {} 

    # for loop to itterate through array
    for letter in arr:
        #if letter is within the freq table, then ++
        if letter in freq_table:
            freq_table[letter] += 1
        #if letter is not within then set = 1 
        else:
            freq_table[letter] = 1
        #return the arr
    return freq_table

print(make_frequency_table(arr1))
print("=============\n")

print(make_frequency_table(arr2))
print("=============\n")

print(make_frequency_table(arr3))
print("=============\n")

