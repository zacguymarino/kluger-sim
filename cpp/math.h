#ifndef MATH_H
#define MATH_H

#include <string>
#include <vector>
#include <regex>
#include <map>

std::string subtractWholes(std::string firstWhole, std::string secondWhole, std::string borrow);

std::string addWholes(std::string firstWhole, std::string secondWhole, std::string carry);

std::vector<std::string> subtractDecimals(std::string firstDecimal, std::string secondDecimal);

std::vector<std::string> addDecimals(std::string firstDecimal, std::string secondDecimal);

std::string addLeadingZeroToDecimalResult(std::string number);

std::string removeTrailingDecimalZeros(std::string number, bool isSplit);

std::string removeLeadingWholeZeros(std::string number);

bool isEqualValue(std::string first, std::string second);

bool isLargerValue(std::string first, std::string second);

std::string addSubtract(std::vector<std::string> numbers, bool subtract);

std::string multiply(std::vector<std::string> numbers);

std::string divide(std::vector<std::string> numbers, int precision);

#endif