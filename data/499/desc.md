Với mọi biểu thức số học gồm ~5~ phép toán hai ngôi +, -, *, /, ^ ở dạng hậu tố (RPN – ký pháp đảo ngược Ba Lan), ta có thể xây dựng một cây nhị phân tương ứng. Ví dụ với biểu thức hậu tố: AB+CDE^-* (mỗi toán hạng là một chữ cái Latinh) thì cây nhị phân tương ứng là như sau:
<center><img src="/images/problems/499/RPNHEIGHT.png" width="350px" /></center>

**Yêu cầu:** cho một biểu thức hậu tố, hãy tính chiều cao của cây nhị phân tương ứng với biểu thức đó.

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương ~T~ là số biểu thức;
- ~T~ dòng tiếp theo, mỗi dòng chứa một biểu thức RPN (các toán hạng là các chữ cái Latinh).

## Dữ liệu ra:
- Ứng với mỗi biểu thức dạng RPN, in ra chiều cao cây nhị phân tương ứng trên một dòng.

## Ví dụ:
#### Dữ liệu vào:
```
4
AB+CDE^-*
ABC*+
AB+ZX+*
AT+BAC++CD+^*
```

#### Dữ liệu ra:
```
3
2
2
4
```

## Giới hạn:
- ~1 ≤ T ≤ 100~; độ dài các biểu thức không quá ~5000~.
**Nguồn:** [Chuyên Sơn La Online Judge](http://csloj.ddns.net/)

**Group giải đáp thắc mắc:** [Lập trình 24h](https://www.facebook.com/groups/1386904321519984)