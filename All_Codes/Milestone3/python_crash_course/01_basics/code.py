# name = 'boss is my name'
# age = 32
# print(type(name))



# input('Enter your name: ')


# age = input('Enter your age: ')

# naw_age = int(age) + 1

# print(naw_age)

# print(float(naw_age))


#? Type Conversion & Type Casting

# print(1 + 2.5)
# print(1 + int(2.999))
# print(1 + float(2.999))


#? Sum Program => a, b => sum

# a = int(input("Enter a: "))
# b = int(input("Enter b: "))

# sum = a + b

# print("Sum: ", sum)



# String Operations
# Python Strings are immutable in by nature
name = 'Tony Stark'
# print(name.upper())
# print(name.lower())
# print(name.find('r')) #? it will return index => position
# print(name.replace('Tony Stark', 'iron-man'))


#? check for presence
# print('m' in 'name')

#? reserved words
#? True, in, False, while, for, break, continue


#? practice exercise 2

# mango = int(input("Enter Mango price :"))
# lichi = int(input("Enter Lichi price :"))
# banana = int(input("Enter Banana price :"))

# sum = mango + lichi + banana

# averagePrice = mango + lichi + banana / 3

# print('the Average of prices is : ', averagePrice)

# print('sum of all the prices are : ', sum)


# superHero = input('Enter the superhero name you like : ')

# print('S' in superHero)


#? arithmetic operator
# print(5 + 4)
# print(5 - 4)
# print(5 * 4)
# print(5 / 4)
# print(5 // 4)
# print(5 % 4) #? modulo -> remainder

# assignment operator
# comparison operator
# print(2 == 2)
# logical operator
# print((3 < 5) and (13 > 12))
# conditionals (if-else)

# age = 3
# if(age > 18):
#   print('you are an adult')

# elif((age < 18) and (age >= 13)):
#   print('you are not an adult')

# else:
#   print('you are just a kid')

# print('end of code')


#? Practice Exercise
#? Mini-Project: Calculator

# num1 = int(input("Enter num1 : "))
# num2 = int(input("Enter num2 : "))
# operator = input("Enter the Operator: ")

# if(operator == "+"):
#   print('This is the result you are looking for: ', num1 + num2)

# elif(operator == "-"):
#   print('This is the result you are looking for: ', num1 - num2)

# elif(operator == "*"):
#   print('This is the result you are looking for: ', num1 * num2)

# elif(operator == "/"):
#   print('This is the result you are looking for: ', num1 / num2)

# elif(operator == "%"):
#   print('This is the result you are looking for: ', num1 % num2)

# else:
#   print('INVALID OPERATION')


#? Part 4 - Range....

#? Loops => repetitive task

#? while loop

# counter = 5
# while counter > 0:
#   print(counter * "*")
#   counter -= 1


#? For Loops
# for i in range(1,11):
#   print(i)

# for i in range(1,11):
#   if i % 2 == 0:
#     print(i)

# for i in range(2, 11, 2):
#   print(i)


#? break & continue

# for i in range(1, 31):
#     if(i==21):
#       continue
#     if (i % 3 == 0):
#       print(i)

# print('out of loop')

#? Practice Exercise 4:

# print all odd number from 1 to 20

# for i in range(1,20,2):
#   print(i)


# for i in range(57, 571):
#     if (i % 57 == 0):
#       print(i)

# a = int(input("Enter any num a: "))
# b = int(input("Enter any num b: "))

# for i in range(1, 1001):
#   if i % a == 0 and i % b == 0:
#     print(i)
#     break

#? non-primitive data type or complex ones are:
# List --- is an array but the name is changed here - and it's also mutable
# Tuple
# Set
# Dictionary

# marks = [98,99,100]

# marks.append(7)
# marks.insert(0,7)
# marks.clear()
# print(100 in marks)
# print(len(marks))
# print(marks[-1])
# print(marks[0:2])

# for score in marks:
#   print(score)


#? Tuple --- is also an array but the name is changed here - and it's immutable
# marks = (98,99,100)
# print(marks, type(marks))


#? Set -- unique items collection
# marks = {98,97,95,96}


#? Dictionary -- key value pair -- in sort of object type

# marks = {"math": 99, "physics": 98, "chemistry": 97}

# marks['english'] = 94
# print(marks)
# print(marks["math"])


# for key in marks:
#   print(key,"--", marks[key])


#? Practice Exercise 5: 
# Given a list of roll numbers: [101,105,102,101,108,105,110]. print all unique nums in the list.

# rolls = [101,105,102,101,108,105,110]
# newRolls = []
# for roll in rolls:
#   if roll not in newRolls:
#     newRolls.append(roll)

# print(newRolls)

