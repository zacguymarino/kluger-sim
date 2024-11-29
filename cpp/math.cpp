#include "math.h"

std::string subtractWholes(std::string firstWhole, std::string secondWhole, std::string borrow)
{
    std::string result;
    int firstWholeLength = firstWhole.length();
    int secondWholeLength = secondWhole.length();
    int wholeDifference;
    int wholeMatchLength;
    int borrowInt = std::stoi(borrow);
    if (firstWholeLength > secondWholeLength)
    {
        wholeDifference = firstWholeLength - secondWholeLength;
        wholeMatchLength = secondWholeLength;
    }
    else if (secondWholeLength > firstWholeLength)
    {
        wholeDifference = secondWholeLength - firstWholeLength;
        wholeMatchLength = firstWholeLength;
    }
    else
    {
        wholeDifference = 0;
        wholeMatchLength = firstWholeLength;
    }
    for (int i = 0; i < wholeMatchLength; i++)
    {
        int firstNum = firstWhole[firstWhole.length() - 1 - i] - '0';
        int secondNum = secondWhole[secondWhole.length() - 1 - i] - '0';
        if (borrowInt > 0)
        {
            firstNum -= 1;
            borrowInt--;
        }
        if (firstNum < secondNum)
        {
            firstNum += 10;
            borrowInt++;
        }
        int difference = firstNum - secondNum;
        result += std::to_string(difference);
    }
    for (int i = 0; i < wholeDifference; i++)
    {
        int firstNum = firstWhole[wholeDifference - 1 - i] - '0';
        if (borrowInt > 0 && firstNum > 0)
        {
            firstNum -= 1;
            borrowInt--;
        }
        result += std::to_string(firstNum);
    }
    reverse(result.begin(), result.end());
    if (result.length() > 1)
    {
        if (result[0] == '0')
        {
            result.erase(0, 1);
        }
    }
    return result;
}

std::string addWholes(std::string firstWhole, std::string secondWhole, std::string carry)
{
    std::string result;
    int firstWholeLength = firstWhole.length();
    int secondWholeLength = secondWhole.length();
    int wholeDifference;
    int wholeMatchLength;
    int carryInt = std::stoi(carry);
    if (firstWholeLength > secondWholeLength)
    {
        wholeDifference = firstWholeLength - secondWholeLength;
        wholeMatchLength = secondWholeLength;
    }
    else if (secondWholeLength > firstWholeLength)
    {
        wholeDifference = secondWholeLength - firstWholeLength;
        wholeMatchLength = firstWholeLength;
    }
    else
    {
        wholeDifference = 0;
        wholeMatchLength = firstWholeLength;
    }
    for (int i = 0; i < wholeMatchLength; i++)
    {
        int firstNum = firstWhole[firstWhole.length() - 1 - i] - '0';
        int secondNum = secondWhole[secondWhole.length() - 1 - i] - '0';
        int sum = firstNum + secondNum + carryInt;
        if (sum > 9)
        {
            sum -= 10;
            carryInt = 1;
        }
        else
        {
            carryInt = 0;
        }
        result += std::to_string(sum);
    }
    for (int i = 0; i < wholeDifference; i++)
    {
        if (firstWholeLength > secondWholeLength)
        {
            int firstNum = firstWhole[wholeDifference - 1 - i] - '0';
            int sum = firstNum + carryInt;
            if (sum > 9)
            {
                sum -= 10;
                carryInt = 1;
            }
            else
            {
                carryInt = 0;
            }
            result += std::to_string(sum);
        }
        else
        {
            int secondNum = secondWhole[wholeDifference - 1 - i] - '0';
            int sum = secondNum + carryInt;
            if (sum > 9)
            {
                sum -= 10;
                carryInt = 1;
            }
            else
            {
                carryInt = 0;
            }
            result += std::to_string(sum);
        }
    }
    if (carryInt == 1)
    {
        result += "1";
    }
    reverse(result.begin(), result.end());
    return result;
}

std::vector<std::string> subtractDecimals(std::string firstDecimal, std::string secondDecimal)
{
    std::vector<std::string> result;
    int firstDecimalLength = firstDecimal.length();
    int secondDecimalLength = secondDecimal.length();
    int decimalDifference;
    std::string decimalResult;
    int borrow = 0;
    if (firstDecimalLength > secondDecimalLength)
    {
        decimalDifference = firstDecimalLength - secondDecimalLength;
    }
    else if (secondDecimalLength > firstDecimalLength)
    {
        decimalDifference = secondDecimalLength - firstDecimalLength;
    }
    else
    {
        decimalDifference = 0;
    }
    if (firstDecimalLength > secondDecimalLength)
    {
        for (int i = 0; i < decimalDifference; i++)
        {
            secondDecimal += "0";
        }
    }
    else
    {
        for (int i = 0; i < decimalDifference; i++)
        {
            firstDecimal += "0";
        }
    }
    for (int i = 0; i < firstDecimal.length(); i++)
    {
        int firstNum = firstDecimal[firstDecimal.length() - 1 - i] - '0';
        int secondNum = secondDecimal[secondDecimal.length() - 1 - i] - '0';
        if (borrow > 0)
        {
            firstNum -= 1;
            borrow--;
        }
        if (firstNum < secondNum)
        {
            firstNum += 10;
            borrow++;
        }
        int difference = firstNum - secondNum;
        decimalResult += std::to_string(difference);
    }
    reverse(decimalResult.begin(), decimalResult.end());
    result.push_back(decimalResult);
    result.push_back(std::to_string(borrow));
    return result;
}

std::vector<std::string> addDecimals(std::string firstDecimal, std::string secondDecimal)
{
    std::vector<std::string> result;
    int firstDecimalLength = firstDecimal.length();
    int secondDecimalLength = secondDecimal.length();
    int decimalDifference;
    std::string decimalResult;
    int carry = 0;
    if (firstDecimalLength > secondDecimalLength)
    {
        decimalDifference = firstDecimalLength - secondDecimalLength;
    }
    else if (secondDecimalLength > firstDecimalLength)
    {
        decimalDifference = secondDecimalLength - firstDecimalLength;
    }
    else
    {
        decimalDifference = 0;
    }
    if (firstDecimalLength > secondDecimalLength)
    {
        for (int i = 0; i < decimalDifference; i++)
        {
            decimalResult += firstDecimal[firstDecimal.length() - 1 - i];
        }
        for (int i = 0; i < secondDecimalLength; i++)
        {
            int firstNum = firstDecimal[firstDecimal.length() - decimalDifference - 1 - i] - '0';
            int secondNum = secondDecimal[secondDecimal.length() - 1 - i] - '0';
            int sum = firstNum + secondNum + carry;
            if (sum > 9)
            {
                sum -= 10;
                carry = 1;
            }
            else
            {
                carry = 0;
            }
            decimalResult += std::to_string(sum);
        }
    }
    else
    {
        for (int i = 0; i < decimalDifference; i++)
        {
            decimalResult += secondDecimal[secondDecimal.length() - 1 - i];
        }
        for (int i = 0; i < firstDecimalLength; i++)
        {
            int firstNum = firstDecimal[firstDecimal.length() - 1 - i] - '0';
            int secondNum = secondDecimal[secondDecimal.length() - decimalDifference - 1 - i] - '0';
            int sum = firstNum + secondNum + carry;
            if (sum > 9)
            {
                sum -= 10;
                carry = 1;
            }
            else
            {
                carry = 0;
            }
            decimalResult += std::to_string(sum);
        }
    }
    reverse(decimalResult.begin(), decimalResult.end());
    result.push_back(decimalResult);
    result.push_back(std::to_string(carry));
    return result;
}

std::string addLeadingZeroToDecimalResult(std::string number)
{
    bool isNegative;
    if (number[0] == '-')
    {
        isNegative = true;
        number.erase(0, 1);
    }
    else
    {
        isNegative = false;
    }
    if (number[0] == '.')
    {
        number.insert(0, "0");
    }
    if (isNegative)
    {
        number = "-" + number;
    }
    return number;
}

std::string removeTrailingDecimalZeros(std::string number, bool isSplit)
{
    if (isSplit)
    {
        int numberLength = number.length();
        for (int i = 0; i < numberLength; i++)
        {
            if (number[number.length() - 1] == '0')
            {
                number.erase(number.length() - 1, 1);
            }
            else
            {
                break;
            }
        }
    }
    else
    {
        if (number.find('.') != std::string::npos)
        {
            int numberLength = number.length();
            for (int i = 0; i < numberLength; i++)
            {
                if (number[number.length() - 1] == '0')
                {
                    number.erase(number.length() - 1, 1);
                }
                else if (number[number.length() - 1] == '.')
                {
                    number.erase(number.length() - 1, 1);
                    break;
                }
                else
                {
                    break;
                }
            }
        }
    }
    return number;
}

std::string removeLeadingWholeZeros(std::string number)
{
    // Return number if whole number is 0 (Regex matches against any real number beginning with 0 or 0.xyz)
    if (std::regex_match(number, std::regex("^0(\\.\\d+)?$")))
    {
        return number;
    }
    // Remove leading zeros
    bool isNegative;
    if (number[0] == '-')
    {
        isNegative = true;
        number.erase(0, 1);
    }
    else
    {
        isNegative = false;
    }
    if (number.find('.') != std::string::npos)
    {
        int wholeLength = number.find('.');
        for (int i = 0; i < wholeLength; i++)
        {
            if (number[0] == '0')
            {
                number.erase(0, 1);
            }
            else
            {
                break;
            }
        }
    }
    else
    {
        int numberLength = number.length();
        for (int i = 0; i < numberLength; i++)
        {
            if (number[0] == '0')
            {
                number.erase(0, 1);
            }
            else
            {
                break;
            }
        }
    }
    if (isNegative)
    {
        number = "-" + number;
    }
    return number;
}

bool isEqualValue(std::string first, std::string second)
{
    std::vector<std::string> firstSplit;
    std::vector<std::string> secondSplit;

    // Prune Numbers
    first = removeLeadingWholeZeros(first);
    first = removeTrailingDecimalZeros(first, false);
    second = removeLeadingWholeZeros(second);
    second = removeTrailingDecimalZeros(second, false);

    if (first[0] == '-')
    {
        first.erase(0, 1);
    }
    if (second[0] == '-')
    {
        second.erase(0, 1);
    }
    if (first.find('.') != std::string::npos)
    {
        firstSplit.push_back(first.substr(0, first.find('.')));
        firstSplit.push_back(first.substr(first.find('.') + 1));
    }
    else
    {
        firstSplit.push_back(first);
        firstSplit.push_back("0");
    }
    if (second.find('.') != std::string::npos)
    {
        secondSplit.push_back(second.substr(0, second.find('.')));
        secondSplit.push_back(second.substr(second.find('.') + 1));
    }
    else
    {
        secondSplit.push_back(second);
        secondSplit.push_back("0");
    }
    if (firstSplit[0].length() != secondSplit[0].length())
    {
        return false;
    }
    if (firstSplit[1].length() != secondSplit[1].length())
    {
        return false;
    }
    for (int i = 0; i < firstSplit[0].length(); i++)
    {
        if (firstSplit[0][i] != secondSplit[0][i])
        {
            return false;
        }
    }
    for (int i = 0; i < firstSplit[1].length(); i++)
    {
        if (firstSplit[1][i] != secondSplit[1][i])
        {
            return false;
        }
    }
    return true;
}

bool isLargerValue(std::string first, std::string second)
{
    std::vector<std::string> firstSplit;
    std::vector<std::string> secondSplit;

    // Prune Numbers
    first = removeLeadingWholeZeros(first);
    first = removeTrailingDecimalZeros(first, false);
    second = removeLeadingWholeZeros(second);
    second = removeTrailingDecimalZeros(second, false);

    if (first[0] == '-')
    {
        first.erase(0, 1);
    }
    if (second[0] == '-')
    {
        second.erase(0, 1);
    }
    if (first.find('.') != std::string::npos)
    {
        firstSplit.push_back(first.substr(0, first.find('.')));
        firstSplit.push_back(first.substr(first.find('.') + 1));
    }
    else
    {
        firstSplit.push_back(first);
        firstSplit.push_back("0");
    }
    if (second.find('.') != std::string::npos)
    {
        secondSplit.push_back(second.substr(0, second.find('.')));
        secondSplit.push_back(second.substr(second.find('.') + 1));
    }
    else
    {
        secondSplit.push_back(second);
        secondSplit.push_back("0");
    }
    if (firstSplit[0].length() > secondSplit[0].length())
    {
        return true;
    }
    else if (secondSplit[0].length() > firstSplit[0].length())
    {
        return false;
    }
    else
    {
        for (int i = 0; i < firstSplit[0].length(); i++)
        {
            if (firstSplit[0][i] - '0' > secondSplit[0][i] - '0')
            {
                return true;
            }
            else if (secondSplit[0][i] - '0' > firstSplit[0][i] - '0')
            {
                return false;
            }
        }
        if (firstSplit[1].length() > secondSplit[1].length())
        {
            int decimalDifference = firstSplit[1].length() - secondSplit[1].length();
            for (int i = 0; i < decimalDifference; i++)
            {
                secondSplit[1] += "0";
            }
        }
        else if (secondSplit[1].length() > firstSplit[1].length())
        {
            int decimalDifference = secondSplit[1].length() - firstSplit[1].length();
            for (int i = 0; i < decimalDifference; i++)
            {
                firstSplit[1] += "0";
            }
        }
        for (int i = 0; i < firstSplit[1].length(); i++)
        {
            if (firstSplit[1][i] - '0' > secondSplit[1][i] - '0')
            {
                return true;
            }
            else if (secondSplit[1][i] - '0' > firstSplit[1][i] - '0')
            {
                return false;
            }
        }
    }
    return false;
}

std::string addSubtract(std::vector<std::string> numbers, bool subtract)
{
    std::string result;
    std::string secondNumber;
    std::string resultSplit[2];
    std::string secondNumSplit[2];
    bool resultIsNegative;
    bool secondNumIsNegative;
    bool resultIsDecimal;
    bool secondNumIsDecimal;
    int resultWholeLength;
    int secondNumWholeLength;
    std::vector<std::string> decimalResult;
    std::string wholeResult;
    for (int i = 0; i < numbers.size() - 1; i++)
    {
        if (result == "")
        {
            result = numbers[i];
        }
        secondNumber = numbers[i + 1];
        if (result[0] == '-')
        {
            resultIsNegative = true;
            result.erase(0, 1);
        }
        else
        {
            resultIsNegative = false;
        }
        if (secondNumber[0] == '-')
        {
            secondNumIsNegative = true;
            secondNumber.erase(0, 1);
        }
        else
        {
            secondNumIsNegative = false;
        }
        // Create whole number and decimal splits
        if (result.find('.') != std::string::npos)
        {
            resultIsDecimal = true;
            resultWholeLength = result.find('.');
            resultSplit[0] = result.substr(0, resultWholeLength);
            resultSplit[1] = result.substr(resultWholeLength + 1);
        }
        else
        {
            resultIsDecimal = false;
            resultSplit[0] = result;
            resultSplit[1] = "0";
        }
        if (secondNumber.find('.') != std::string::npos)
        {
            secondNumIsDecimal = true;
            secondNumWholeLength = secondNumber.find('.');
            secondNumSplit[0] = secondNumber.substr(0, secondNumWholeLength);
            secondNumSplit[1] = secondNumber.substr(secondNumWholeLength + 1);
        }
        else
        {
            secondNumIsDecimal = false;
            secondNumSplit[0] = secondNumber;
            secondNumSplit[1] = "0";
        }
        (resultSplit[0].length() == 0) ? resultSplit[0] = "0" : resultSplit[0];
        (resultSplit[1].length() == 0) ? resultSplit[1] = "0" : resultSplit[1];
        (secondNumSplit[0].length() == 0) ? secondNumSplit[0] = "0" : secondNumSplit[0];
        (secondNumSplit[1].length() == 0) ? secondNumSplit[1] = "0" : secondNumSplit[1];
        // Perform add or subtract
        if (!subtract)
        {
            if (resultIsDecimal || secondNumIsDecimal && !resultIsNegative && !secondNumIsNegative)
            {
                decimalResult = addDecimals(resultSplit[1], secondNumSplit[1]);
                wholeResult = addWholes(resultSplit[0], secondNumSplit[0], decimalResult[1]);
                result = wholeResult + "." + decimalResult[0];
            }
            if (!resultIsDecimal && !secondNumIsDecimal && !resultIsNegative && !secondNumIsNegative)
            {
                result = addWholes(resultSplit[0], secondNumSplit[0], "0");
            }
        }
        if (subtract)
        {
            if (resultIsDecimal || secondNumIsDecimal && !resultIsNegative && !secondNumIsNegative)
            {
                if (isLargerValue(resultSplit[0], secondNumSplit[0]) || isEqualValue(resultSplit[0], secondNumSplit[0]))
                {
                    decimalResult = subtractDecimals(resultSplit[1], secondNumSplit[1]);
                    wholeResult = subtractWholes(resultSplit[0], secondNumSplit[0], decimalResult[1]);
                    result = wholeResult + "." + decimalResult[0];
                }
                else
                {
                    decimalResult = subtractDecimals(secondNumSplit[1], resultSplit[1]);
                    wholeResult = subtractWholes(secondNumSplit[0], resultSplit[0], decimalResult[1]);
                    result = "-" + wholeResult + "." + decimalResult[0];
                }
            }
            if (!resultIsDecimal && !secondNumIsDecimal && !resultIsNegative && !secondNumIsNegative)
            {
                if (isLargerValue(result, secondNumber) || isEqualValue(result, secondNumber))
                {
                    result = subtractWholes(resultSplit[0], secondNumSplit[0], "0");
                }
                else
                {
                    result = "-" + subtractWholes(secondNumSplit[0], resultSplit[0], "0");
                }
            }
            if (resultIsNegative && !secondNumIsNegative)
            {
                std::vector<std::string> newNumbers;
                newNumbers.push_back(resultSplit[0] + "." + resultSplit[1]);
                newNumbers.push_back(secondNumSplit[0] + "." + secondNumSplit[1]);
                result = "-" + addSubtract(newNumbers, false);
            }
            if (!resultIsNegative && secondNumIsNegative)
            {
                std::vector<std::string> newNumbers;
                newNumbers.push_back(resultSplit[0] + "." + resultSplit[1]);
                newNumbers.push_back(secondNumSplit[0] + "." + secondNumSplit[1]);
                result = addSubtract(newNumbers, false);
            }
            if (resultIsNegative && secondNumIsNegative)
            {
                std::vector<std::string> newNumbers;
                if (isLargerValue(result, secondNumber) || isEqualValue(result, secondNumber))
                {
                    newNumbers.push_back(resultSplit[0] + "." + resultSplit[1]);
                    newNumbers.push_back(secondNumSplit[0] + "." + secondNumSplit[1]);
                    result = "-" + addSubtract(newNumbers, true);
                }
                else
                {
                    newNumbers.push_back(secondNumSplit[0] + "." + secondNumSplit[1]);
                    newNumbers.push_back(resultSplit[0] + "." + resultSplit[1]);
                    result = addSubtract(newNumbers, true);
                }
            }
        }
    }
    // Remove trailing zeros after decimal
    result = removeTrailingDecimalZeros(result, false);
    // Remove leading zeros
    result = removeLeadingWholeZeros(result);
    // Add leading zero to decimal result
    result = addLeadingZeroToDecimalResult(result);
    return result;
}

std::string multiply(std::vector<std::string> numbers)
{
    std::string result;
    std::string secondNumber;
    std::string resultSplit[2];
    std::string secondNumSplit[2];
    bool resultIsNegative;
    bool secondNumIsNegative;
    bool resultIsDecimal;
    bool secondNumIsDecimal;
    int resultWholeLength;
    int secondNumWholeLength;
    int decimalDifference;
    int carry = 0;
    std::vector<std::string> sumNumbers;
    for (int i = 0; i < numbers.size() - 1; i++)
    {
        if (result == "")
        {
            result = numbers[i];
        }
        secondNumber = numbers[i + 1];
        if (isLargerValue(secondNumber, result))
        {
            std::string temp = result;
            result = secondNumber;
            secondNumber = temp;
        }
        if (result[0] == '-')
        {
            resultIsNegative = true;
            result.erase(0, 1);
        }
        else
        {
            resultIsNegative = false;
        }
        if (secondNumber[0] == '-')
        {
            secondNumIsNegative = true;
            secondNumber.erase(0, 1);
        }
        else
        {
            secondNumIsNegative = false;
        }
        if (result.find('.') != std::string::npos)
        {
            resultIsDecimal = true;
            resultWholeLength = result.find('.');
            resultSplit[0] = result.substr(0, resultWholeLength);
            resultSplit[1] = result.substr(resultWholeLength + 1);
            if (resultSplit[1].length() == 0)
            {
                resultSplit[1] = "0";
            }
        }
        else
        {
            resultIsDecimal = false;
            resultSplit[0] = result;
            resultSplit[1] = "0";
        }
        if (secondNumber.find('.') != std::string::npos)
        {
            secondNumIsDecimal = true;
            secondNumWholeLength = secondNumber.find('.');
            secondNumSplit[0] = secondNumber.substr(0, secondNumWholeLength);
            secondNumSplit[1] = secondNumber.substr(secondNumWholeLength + 1);
            if (secondNumSplit[1].length() == 0)
            {
                secondNumSplit[1] = "0";
            }
        }
        else
        {
            secondNumIsDecimal = false;
            secondNumSplit[0] = secondNumber;
            secondNumSplit[1] = "0";
        }
        // Trim trailing zeros on decimals
        resultSplit[1] = removeTrailingDecimalZeros(resultSplit[1], true);
        secondNumSplit[1] = removeTrailingDecimalZeros(secondNumSplit[1], true);
        // Make decimals same length by adding zeros
        if (resultSplit[1].length() > secondNumSplit[1].length())
        {
            decimalDifference = resultSplit[1].length() - secondNumSplit[1].length();
            for (int j = 0; j < decimalDifference; j++)
            {
                secondNumSplit[1] += "0";
            }
        }
        else
        {
            decimalDifference = secondNumSplit[1].length() - resultSplit[1].length();
            for (int j = 0; j < decimalDifference; j++)
            {
                resultSplit[1] += "0";
            }
        }
        // combine splits
        std::string newFirst = resultSplit[0] + resultSplit[1];
        std::string newSecond = secondNumSplit[0] + secondNumSplit[1];
        // Remove leading zeros
        newFirst = removeLeadingWholeZeros(newFirst);
        newSecond = removeLeadingWholeZeros(newSecond);
        // Multiply numbers
        for (int j = 0; j < newSecond.length(); j++)
        {
            std::string newSum = "";
            for (int k = 0; k < j; k++)
            {
                newSum += "0";
            }
            for (int k = 0; k < newFirst.length(); k++)
            {
                int product = (newSecond[newSecond.length() - 1 - j] - '0') * (newFirst[newFirst.length() - 1 - k] - '0') + carry;
                if (product > 9)
                {
                    carry = product / 10;
                    product = product % 10;
                }
                else
                {
                    carry = 0;
                }
                newSum += std::to_string(product);
                if (k == newFirst.length() - 1)
                {
                    if (carry > 0)
                    {
                        std::string carryString = std::to_string(carry);
                        reverse(carryString.begin(), carryString.end());
                        newSum += carryString;
                        carry = 0;
                    }
                    reverse(newSum.begin(), newSum.end());
                    sumNumbers.push_back(newSum);
                }
            }
        }
        // Add all products
        if (sumNumbers.size() > 1)
        {
            result = addSubtract(sumNumbers, false);
        }
        else
        {
            result = sumNumbers[0];
        }
        // Reinsert decimal
        int decimalCount = resultSplit[1].length() + secondNumSplit[1].length();
        if (result.length() < decimalCount)
        {
            for (int j = 0; j < decimalCount - result.length() + 1; j++)
            {
                result = "0" + result;
            }
        }
        result.insert(result.length() - (resultSplit[1].length() + secondNumSplit[1].length()), ".");
        // Set sign
        if (resultIsNegative && !secondNumIsNegative || !resultIsNegative && secondNumIsNegative)
        {
            result = "-" + result;
        }
        sumNumbers.clear();
    }
    // Remove trailing zeros after decimal
    result = removeTrailingDecimalZeros(result, false);
    // Add leading zero to decimal result
    result = addLeadingZeroToDecimalResult(result);
    return result;
}

std::string divide(std::vector<std::string> numbers, int precision)
{
    std::string quotient;
    std::string divisor;
    std::string dividend;
    std::string dividendChunk;
    bool divisorIsNegative;
    bool dividendIsNegative;
    std::map<int, std::string> multiplicationTable;
    for (int i = 0; i < numbers.size() - 1; i++)
    {
        // Assign divisor and dividend
        if (i == 0)
        {
            divisor = numbers[i + 1];
            dividend = numbers[i];
        }
        else
        {
            divisor = numbers[i + 1];
            dividend = removeLeadingWholeZeros(quotient);
            quotient = "";
            dividendChunk = "";
        }
        // Handle divide by zero
        if (std::regex_match(divisor, std::regex("^(0+)(\\.0+)?$")))
        {
            return "NaN";
        }
        // Determine signs
        if (divisor[0] == '-')
        {
            divisorIsNegative = true;
            divisor.erase(0, 1);
        }
        else
        {
            divisorIsNegative = false;
        }
        if (dividend[0] == '-')
        {
            dividendIsNegative = true;
            dividend.erase(0, 1);
        }
        else
        {
            dividendIsNegative = false;
        }
        // Shift divisor decimal to end, and dividend decimal equally
        if (divisor.find('.') != std::string::npos)
        {
            int divisorDecimalLocation = divisor.find('.');
            int divisorLength = divisor.length();
            int shiftAmount = divisorLength - divisorDecimalLocation;
            divisor.erase(divisorDecimalLocation, 1);
            if (dividend.find('.') != std::string::npos)
            {
                int dividendDecimalLocation = dividend.find('.');
                int dividendLength = dividend.length();
                int zerosToAdd = shiftAmount - (dividendLength - dividendDecimalLocation);
                if (zerosToAdd < 1)
                {
                    int newDecimalLocation = dividendDecimalLocation + shiftAmount;
                    dividend.insert(newDecimalLocation, ".");
                    if (dividend[dividend.length() - 1] == '.')
                    {
                        dividend.erase(dividend.length() - 1, 1);
                    }
                }
                else
                {
                    for (int j = 0; j < zerosToAdd; j++)
                    {
                        dividend += "0";
                    }
                }
                dividend.erase(dividendDecimalLocation, 1);
            }
            else
            {
                for (int j = 0; j < shiftAmount - 1; j++)
                {
                    dividend += "0";
                }
            }
        }
        divisor = removeLeadingWholeZeros(divisor);
        dividend = removeLeadingWholeZeros(dividend);
        // Create multiplication table
        for (int j = 0; j < 10; j++)
        {
            std::vector<std::string> multipliers;
            multipliers.push_back(divisor);
            multipliers.push_back(std::to_string(j + 1));
            std::string product = multiply(multipliers);
            multiplicationTable[j + 1] = product;
        }
        // Divide
        for (int j = 0; j < dividend.length(); j++)
        {
            if (dividend[j] == '.')
            {
                quotient += ".";
                continue;
            }
            dividendChunk += dividend[j];
            dividendChunk = removeLeadingWholeZeros(dividendChunk);
            if (isLargerValue(dividendChunk, divisor))
            {
                for (int k = 2; k <= multiplicationTable.size(); k++)
                {
                    if (isLargerValue(multiplicationTable[k], dividendChunk))
                    {
                        std::vector<std::string> subtractNumbers;
                        subtractNumbers.push_back(dividendChunk);
                        subtractNumbers.push_back(multiplicationTable[k - 1]);
                        quotient += std::to_string(k - 1);
                        dividendChunk = addSubtract(subtractNumbers, true);
                        break;
                    }
                }
            }
            else
            {
                quotient += "0";
            }
            // Return rational number if remainder is 0
            if (j == dividend.length() - 1 && dividendChunk == "0")
            {
                if (divisorIsNegative && dividendIsNegative || !divisorIsNegative && !dividendIsNegative)
                {
                    break;
                }
                else
                {
                    quotient = "-" + quotient;
                    break;
                }
            }
            // Handle decimal result
            if (j == dividend.length() - 1 && dividendChunk != "0")
            {
                if (quotient.find('.') == std::string::npos)
                {
                    quotient += ".";
                }
                dividend += "0";
            }
            // Check if precision is reached
            if (quotient.find('.') != std::string::npos)
            {
                int quotientLength = quotient.length();
                int decimalLength = quotientLength - quotient.find('.') - 1;
                if (decimalLength >= precision + 1)
                {
                    // Round quotient
                    if (quotient[quotient.length() - 1] - '0' >= 5)
                    {
                        quotient.erase(quotient.length() - 1, 1);
                        quotient.replace(quotient.length() - 1, 1, std::to_string((quotient[quotient.length() - 1] - '0') + 1));
                    }
                    else
                    {
                        quotient.erase(quotient.length() - 1, 1);
                    }
                    // Set sign
                    if (divisorIsNegative && dividendIsNegative || !divisorIsNegative && !dividendIsNegative)
                    {
                        break;
                    }
                    else
                    {
                        quotient = "-" + quotient;
                        break;
                    }
                }
            }
        }
    }
    // Remove trailing zeros after decimal
    quotient = removeTrailingDecimalZeros(quotient, false);
    // Remove leading zeros
    quotient = removeLeadingWholeZeros(quotient);
    // Add leading zero to decimal result
    quotient = addLeadingZeroToDecimalResult(quotient);

    return quotient;
}