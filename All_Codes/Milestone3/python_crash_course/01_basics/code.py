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