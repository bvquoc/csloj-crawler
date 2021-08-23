Bạn được cho một danh sách các biểu thức toán học đúng ở dạng trung tố chỉ chứa:
- Biến: là các chữ cái latinh in thường a-z, (mỗi biến là một chữ cái)
- Các toán tử hai ngôi: +, -,*, /, ^ (lũy thừa) với thứ tự ưu tiên như sau: +, - cùng độ ưu tiên thấp nhất; *, / cùng độ ưu tiên thứ hai, ^ có độ ưu tiên cao nhất
- Các cặp dấu ngoặc

Hãy chuyển đổi biểu thức đó sang dạng hậu tố và giữ nguyên thứ tự các số hạng (RPN – ký pháp nghịch đảo Ba Lan)

## Dữ liệu vào:
- Dòng đầu chứa số nguyên dương $T$ là số biểu thức;
- $T$ dòng tiếp theo, mỗi dòng chứa một biểu thức dạng trung tố.

## Dữ liệu ra:
- Ứng với mỗi biểu thức dạng trung tố, in ra biểu thức RPN tương ứng trên một dòng.

## Ví dụ:
### Dữ liệu vào:
```
3
(a+(b*c))
((a+b)*(z+x))
((a+t)*((b+(a+c))^(c+d)))
```

### Dữ liệu ra:
```
abc*+
ab+zx+*
at+bac++cd+^*
```

## Giới hạn:
- $1 ≤ T ≤ 100$; độ dài các biểu thức trung tố không quá $400$.